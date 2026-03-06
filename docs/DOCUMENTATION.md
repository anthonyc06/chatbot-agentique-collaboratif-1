# Chatbot Agentique Collaboratif — Documentation

Résumé
------
Ce dépôt fournit une base minimale pour construire un chatbot « agentique » collaboratif : un serveur Express léger, une interface web simple et une intégration optionnelle avec LM Studio (instance locale ou distante). L'objectif est pédagogique : les contributeurs ajoutent des agents, des tools et des workflows.

Prérequis
---------
- Node.js (version LTS recommandée)
- Instance LM Studio accessible via HTTP si vous voulez utiliser un modèle local

Installation et démarrage
-------------------------
1. Cloner le dépôt :

```bash
git clone <repo>
cd chatbot-agentique-collaboratif-1
```

2. Installer les dépendances et démarrer :

```bash
npm install
npm start
```

Configuration (variables d'environnement)
---------------------------------------
Le projet lit quelques variables d'environnement (fichier `.env` supporté localement) :

- `PORT` : port du serveur (par défaut `3000`).
- `NODE_ENV` : environnement (`development`/`production`).
- `LM_STUDIO_API_URL` : URL du endpoint HTTP de LM Studio. Le format dépend de votre instance :
- Par défaut ce projet utilise `http://127.0.0.1:1234/v1/chat/completions` (voir `src/index.js`),
- mais adaptez l'URL au endpoint exposé par votre installation de LM Studio.
- `LM_STUDIO_MODEL` : nom du modèle à demander (ex : `meta-llama-3.1-8b-instruct`).

Exemple (PowerShell) :

```powershell
# Exemple : utilisez l'URL que votre instance expose. Exemple par défaut du projet :
$env:LM_STUDIO_API_URL = "http://127.0.0.1:1234/v1/chat/completions"
$env:LM_STUDIO_MODEL = "meta-llama-3.1-8b-instruct"
npm start
```

API serveur
-----------
- `POST /api/message` — attend un JSON `{ "message": "..." }` et retourne `{ "reply": "..." }`.

Exemple `curl` :

```bash
curl -X POST http://localhost:3000/api/message \
  -H "Content-Type: application/json" \
  -d '{"message":"Bonjour"}'
```

Comportement
-----------
- Si `LM_STUDIO_API_URL` est fourni, le serveur forwarde le prompt au endpoint configuré via `callLmStudio()` et normalise plusieurs formats de réponses courants (OpenAI-like, champs `reply`/`text`/`result`, ou tableau de générations).
- Si l'endpoint LM Studio n'est pas accessible ou n'est pas configuré, le serveur renvoie un message de secours (`todo` ou un message d'erreur explicite si l'appel échoue).

Frontend
--------
- La page principale est `public/index.html`. Elle propose une interface minimale de chat avec :
  - affichage des bulles (`user` / `bot`),
  - indicateur de saisie,
  - envoi via POST vers `/api/message`.

Structure du dépôt
------------------
- `src/index.js` — serveur Express et logique d'appel LM Studio.
- `public/index.html` — interface web et script client.
- `docs/DOCUMENTATION.md` — ce fichier.
- `package.json`, `README.md`, etc.

Contribuer
----------
- Fork ou créez une branche par fonctionnalité.
- Ajoutez des agents dans `src/agents` et des tools dans `src/tools` (convention suggérée).
- Soumettez de petites PRs avec description et exemples d'utilisation.

Dépannage rapide
----------------
- Si `npm start` échoue : vérifier la version de Node et que les dépendances sont installées.
- Si l'appel LM Studio retourne des erreurs : vérifier `LM_STUDIO_API_URL`, le format attendu (certains endpoints n'utilisent pas `/v1/chat/completions`) et les logs du serveur.

Licence
-------
Consultez le fichier `LICENSE` à la racine du dépôt.

Amusez-vous et codez ensemble !
