# chatbot-agentique-collaboratif-1
Un projet collaboratif pour apprendre et construire ensemble un chatbot IA « agentique ».

**Concept**
- **But:** pratiquer le développement d'un chatbot composé d'agents et de tools, en équipe réelle.
- **Approche:** le dépôt contient une base minimale — les contributeurs ajoutent des agents, des outils, et des workflows.

**Comment contribuer**
- **Fork/Clone:** forkez ou clonez le dépôt et créez une branche par fonctionnalité.
- **Petites PRs:** envoyez des Pull Requests petites et ciblées pour faciliter la revue.
- **Communication:** décrivez le rôle de chaque agent/tool dans la PR et incluez des exemples d'utilisation.

**Structure minimale fournie**
- `package.json`: configuration du projet Node.js minimal.
- `src/index.js`: point d'entrée vide pour lancer l'application.

**Objectif pédagogique**
- Apprendre en pratiquant sur un vrai projet partagé: conception d'agents, intégration de tools, orchestration et tests.
- Encourager le pair-programming, les revues et la construction itérative.

**Démarrage rapide**
1. Installez Node.js (version LTS recommandée).
2. Clonez le dépôt et installez les dépendances si nécessaire.

```bash
git clone <repo>
cd chatbot-agentique-collaboratif-1
npm install
npm start
```

Rien n'est imposé: commencez par créer un agent simple dans `src/` et ouvrez une PR.

Amusez-vous et codez ensemble !

## Structure du projet (base minimale)

Ce dépôt contient une base très légère pour démarrer le travail en équipe. Voici les fichiers et dossiers fournis :

- `package.json` : configuration minimale Node.js (script `npm start` lance le serveur).
- `src/index.js` : serveur Express minimal qui sert la page front et expose l'API POST `/api/message`.
- `public/index.html` : interface web minimaliste (UI de chat) pour envoyer des messages et afficher les réponses.
- `.github/PULL_REQUEST_TEMPLATE.md` : modèle de Pull Request pour standardiser les contributions.
- `README.md` : ce fichier — concept, démarrage et structure.

Conseil : les contributeurs peuvent ajouter des dossiers `src/agents`, `src/tools` ou `tests/` selon leurs besoins. L'idée est que l'équipe complète progressivement cette base.

**Démarrage rapide**
1. Installez Node.js (version LTS recommandée).
2. Clonez le dépôt et installez les dépendances.

```bash
git clone <repo>
cd chatbot-agentique-collaboratif-1
npm install
npm start
```

La page est alors disponible sur `http://localhost:3000/`.

## Intégration avec LM Studio (optionnel, recommandé)

Ce projet peut utiliser une instance locale de **LM Studio** pour générer les réponses.

- Prérequis: LM Studio tournant en local (ou accessible depuis le serveur). Je recommande le modèle `meta-llama-3.1-8b-instruct`.
- Configuration: définir l'URL de l'API LM Studio dans la variable d'environnement `LM_STUDIO_API_URL`. Exemple (PowerShell):

```powershell
$env:LM_STUDIO_API_URL = "http://127.0.0.1:1234/v1/chat/completions"
$env:LM_STUDIO_MODEL = "meta-llama-3.1-8b-instruct"
npm start
```

Le serveur enverra le message au endpoint configuré en POST avec un JSON minimale: `{ "prompt": "<message>", "model": "<model>" }`.

Remarques:
- Selon la configuration / version de LM Studio que vous utilisez, le chemin d'API et le format de la requête peuvent varier. Si votre endpoint attend un autre schéma, mettez à jour `LM_STUDIO_API_URL` pour pointer vers le bon chemin, ou adaptez `src/index.js` (fonction `callLmStudio`) pour correspondre au format attendu.
- Si LM Studio n'est pas configuré, l'API renvoie une réponse placeholder (`todo`) ou des règles locales simples (`bonjour`, `/echo`).

Exemple de test direct avec `curl` (si votre LM Studio accepte un JSON avec `prompt`):

```bash
curl -X POST "$LM_STUDIO_API_URL" -H "Content-Type: application/json" -d '{"prompt":"Bonjour","model":"meta-llama-3.1-8b-instruct"}'
```
