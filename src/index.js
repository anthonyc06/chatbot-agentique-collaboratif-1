#!/usr/bin/env node

// Serveur Express minimal pour l'interface et l'API de chat.
// Ce fichier est volontairement simple : il sert de point d'entrée
// pour le projet pédagogique — les contributeurs peuvent étendre
// la logique (agents, tools, etc.) depuis `src/`.

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware : JSON body parsing + fichiers statiques (dossier public)
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// ----- Configuration LM Studio -----
// L'URL et le modèle sont lus depuis les variables d'environnement.
// Si LM_STUDIO_API_URL n'est pas défini, la fonction de forwarding
// retourne `null` et l'API utilisera une réponse de secours.
const fetch = require('node-fetch');
const LM_STUDIO_API_URL = process.env.LM_STUDIO_API_URL || 'http://127.0.0.1:1234/v1/chat/completions';
const LM_STUDIO_MODEL = process.env.LM_STUDIO_MODEL || 'meta-llama-3.1-8b-instruct';

/**
 * Appelle le serveur LM Studio en POST et normalise plusieurs formats
 * de réponse possibles. Renvoie `null` si la requête échoue.
 * @param {string} prompt - Le texte envoyé au modèle.
 * @returns {Promise<string|null>} - Réponse textuelle ou null.
 */
async function callLmStudio(prompt) {
	if (!LM_STUDIO_API_URL) return null;
	try {
		// Corps typique pour un endpoint /v1/chat/completions
		const body = {
			model: LM_STUDIO_MODEL,
			messages: [ { role: 'user', content: prompt } ],
			max_new_tokens: 512,
		};

		const resp = await fetch(LM_STUDIO_API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});

		// Récupère le texte brut de la réponse (parfois ce n'est pas du JSON)
		const text = await resp.text();
		try {
			const json = JSON.parse(text);
			// Format type OpenAI/LM Studio chat
			if (json.choices && json.choices[0] && json.choices[0].message && json.choices[0].message.content) {
				return json.choices[0].message.content;
			}
			// Autres formats courants : reply, text, result, ou génération simple
			if (json.reply) return json.reply;
			if (json.text) return json.text;
			if (json.result) return json.result;
			if (Array.isArray(json) && json[0] && json[0].generated_text) return json[0].generated_text;
			// Si on ne reconnaît pas la forme, retourne l'objet JSON stringifié
			return JSON.stringify(json);
		} catch (err) {
			// Si ce n'est pas du JSON, retourne le texte brut (ex: erreurs ou plain text)
			return text;
		}
	} catch (err) {
		// Log côté serveur pour débogage, et retourne null pour indiquer l'échec
		console.error('LM Studio request failed:', err && err.message ? err.message : err);
		return null;
	}
}

// ----- Route API : POST /api/message -----
// Attends un JSON { message: '...' } et retourne { reply: '...' }.
app.post('/api/message', async (req, res) => {
	const { message } = req.body || {};
	const text = (message || '').toString().trim();

	if (!text) {
		// Réponse claire pour le client si le corps est vide
		return res.json({ reply: "Je n'ai rien reçu." });
	}

	// Si une URL LM Studio est configurée, on forward le prompt
	if (LM_STUDIO_API_URL) {
		const reply = await callLmStudio(text);
		if (reply !== null && reply !== undefined) {
			return res.json({ reply: String(reply) });
		}
		// Si l'appel à LM Studio a échoué, retourner un message d'erreur explicite
		return res.json({ reply: 'Erreur: impossible de contacter LM Studio (vérifiez LM_STUDIO_API_URL).' });
	}

	// Comportement par défaut si aucune configuration LM Studio : réponse placeholder
	res.json({ reply: 'todo' });
});

// Démarre le serveur HTTP
app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});

