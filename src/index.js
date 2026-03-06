#!/usr/bin/env node

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.post('/api/message', (req, res) => {
	const { message } = req.body || {};
	const text = (message || '').toString().trim();
	const normalized = text.toLowerCase();

	// Simule un temps de réflexion léger
	setTimeout(() => {
		let reply = 'todo';
		if (!text) {
			reply = "Je n'ai rien reçu.";
		} else {
			reply = 'todo';
		}
		res.json({ reply });
	}, 600);
});

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
