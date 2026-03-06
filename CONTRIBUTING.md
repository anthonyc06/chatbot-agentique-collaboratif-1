# Guide de contribution — Projet Chatbot Agentique

Bienvenue ! Ce guide explique comment contribuer au projet de manière coopérative et efficace.

## 🎯 Structuration des tâches

Chaque tâche GitHub a un **tag** unique au format `X.Y` (ex: `1.2`, `5.3`).

### Blocs de travail
- **Bloc 0** : Infrastructure & Setup (préalables)  
- **Bloc 1–5** : Features fondamentales (tools, web, mémoire, commandes)  
- **Bloc 6–10** : Features intermédiaires (agents, docs, collab, intégrations)  
- **Bloc 11–15** : Features avancées (Python, analytics, plugins)

### Difficulté

- **S** (Simple) : 1–2h, peu de dépendances, parfait pour débuter
- **M** (Moyen) : 2–4h, quelques dépendances, bon pour consolider
- **L** (Difficile) : 4h+, beaucoup de dépendances, pour les experts

## 📋 Avant de commencer une tâche

1. **Vérifiez les dépendances** : Si la tâche liste "Dépend de: X, Y", assurez-vous que X et Y sont complétées.
2. **Réclamez l'issue** : Commentez "Je prends cette issue" pour qu'on la vous assigne.
3. **Créez une branche** : 
   ```bash
   git checkout -b feat/BLOC.X-description
   # Ex: git checkout -b feat/1.2-tool-calculator
   ```

## 💻 Conventions de code

### Structure des fichiers

```
src/
├── tools/           # Tous les tools (calculator, fetch, etc)
├── agents/          # Agents intelligents
├── memory/          # Système de mémoire
├── utils/           # Utilitaires (logger, validators)
└── index.js         # Point d'entrée
```

### Format d'un Tool

```javascript
// src/tools/my_tool.js
class MyTool {
  constructor() {
    this.name = 'my_tool';
    this.description = 'Brève description';
    this.schema = {
      param1: { type: 'string', description: '...' },
      param2: { type: 'number', description: '...' }
    };
  }

  async run(input) {
    // Validation input
    if (!input.param1) throw new Error('param1 requis');
    
    // Logique
    const result = doSomething(input);
    
    return { success: true, data: result };
  }
}

module.exports = MyTool;
```

### Nommage

- **Fichiers**: `kebab-case` (ex: `calculator-tool.js`)
- **Classes**: `PascalCase` (ex: `Calculator Tool`)
- **Fonctions**: `camelCase` (ex: `calculateSum()`)
- **Constantes**: `UPPER_CASE` (ex: `MAX_RETRIES = 3`)

## 🧪 Tests

Chaque feature doit avoir un test basique :

```bash
# Installer Jest (une fois)
npm install --save-dev jest

# Ajouter à package.json
"test": "jest"

# Créer test
# src/__tests__/calculator-tool.test.js
describe('CalculatorTool', () => {
  it('should add two numbers', () => {
    const tool = new CalculatorTool();
    const result = tool.run({ operation: 'add', a: 2, b: 3 });
    expect(result.data).toBe(5);
  });
});

# Lancer
npm test
```

## 📝 Commit & PR

### Message de commit
```
[TAG] Description courte

Closes #issue-number
Depends-On: TAG1, TAG2 (si applicable)
```

Exemples:
```
[1.2] Implement calculator tool with basic arithmetic
Closes #5

[0.2] Add logger utility with color support
```

### Pull Request

Titre : `[TAG] Description`

Description :
```markdown
## Description
Courte explication de la feature.

## Dépendances
- Dépend de: [TAG1](link-issue)
- Impacte: [TAG3](link-issue)

## Checklist
- [ ] Code testé localement
- [ ] Tests ajoutés/updatés
- [ ] Pas de console.log() restants (usage logger.js)
- [ ] Dépendances npm documentées
```

## 🔄 Flux de travail

1. **Assigner l'issue** : Demandez à être assigné
2. **Créer branche** : `git checkout -b feat/TAG-description`
3. **Développer** : Faites le code, committez progressivement
4. **Tester** : `npm test`, testez le résultat localement
5. **Push & PR** : Pushez votre branche, créez une PR
6. **Code review** : Un autre étudiant review, vous itérez
7. **Merge** : Une fois approuvée, merge sur main

## 📊 Labels de priorité

Quand plusieurs issues sont libres, priorité :

1. **Bloc 0** : Toutes les tâches (infrastructure)
2. **Bloc 1** : Avant les autres (tools de base)
3. Puis en ordre : 2, 3, 4, ...
4. Cherchez des **S** (Simple) en priorité si débutant

## ⚠️ Pièges courants

❌ **À ÉVITER** :
- Commencer une tâche sans vérifier ses dépendances
- Committer directement sur `main`
- Laisser `console.log()` au lieu d'utiliser `logger.js`
- Créer des fichiers sans structure définie
- Ignorer les tests

✅ **À FAIRE** :
- Lire la description complète avant de développer
- Coder progressivement avec commits petits et significatifs
- Commenter le code complexe
- Tester souvent : `npm start`, `npm test`
- Demander de l'aide en commentant l'issue si bloqué

## 🆘 Besoin d'aide ?

- **Problème technique** : Commentez l'issue avec votre problème
- **Question de design** : Créez une discussion dans Discussions
- **Bug découvert** : Créez une issue `[BUG]` liée

## 📚 Ressources

- [Node.js Docs](https://nodejs.org/docs)
- [Express.js Guide](https://expressjs.com)
- [Jest Testing](https://jestjs.io/)
- [LM Studio API](http://localhost:1234) (local)

Bon coding ! 🚀
