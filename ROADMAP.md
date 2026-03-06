# 🗺️ Feuille de route — Ordre recommandé de travail

Ce document montre l'ordre dans lequel aborder les tâches pour construire le projet de manière cohérente.

## Phase 1 : Foundation (Semaine 1)
**IMPÉRATIF** : À faire en premier, tout dépend de ceci.

```
└─ 0.1) Structure des dossiers
   ├─ 0.2) Logger utility
   ├─ 0.3) Tests unitaires setup
   └─ 0.4) Documentation CONTRIBUTING.md
```

**Issues à chercher** : Toutes celles du Bloc 0  
**Difficulté** : Presque toutes en Simple (S)  
**Nb approx** : 4 issues, ~1 semaine pour débuter

---

## Phase 2 : Tools de base (Semaine 2-3)
**Après** : Phase 1 complète  
**À faire en parallèle** : Les 3 premiers tools peuvent être codés en parallèle

```
└─ 1.1) Tool Registry + base class
   ├─ 1.2) Calculator tool
   ├─ 1.3) String utils tool
   ├─ 1.4) Datetime tool
   ├─ 1.5) Integration to LM Studio prompt
   └─ 1.6) Tool logging/tracing
```

**Issues à chercher** : Bloc 1  
**Difficulté** : Toutes Simples (S) ou Moyen (M)  
**Nb approx** : 6 issues, ~2-3 semaines  
**Parallélisation** : Oui, 1.2 / 1.3 / 1.4 peuvent être indépendants

---

## Phase 3 : Web & APIs (Semaine 3-4)
**Après** : 1.1 min (pour le Tool Registry)  
**À faire en parallèle** : Oui, plusieurs peuvent se faire ensemble

```
2.1) HTTP Request tool
├─ 2.2) Web Search (DuckDuckGo)
├─ 2.3) Caching layer
├─ 2.4) HTML → text parser
└─ 2.5) Security (timeouts, whitelist)
```

**Issues à chercher** : Bloc 2  
**Difficulté** : Mix de S et M  
**Nb approx** : 5 issues, ~2 semaines

---

## Phase 4 : Génération (Documents, Pages, PDF)
**Après** : 1.1 min  
**Parallélisation** : Oui, les tools de génération peuvent être indépendants

```
3.1) Chart generator
├─ 3.2) Mermaid diagrams
├─ 3.3) HTML page generator
│  ├─ 3.4) PDF generator (nécessite 3.3)
│  ├─ 3.6) Expose pages as HTTP endpoints
│  └─ 3.7) ZIP archiver
├─ 3.5) Markdown → HTML converter
└─ (Plus tard: intégrer au chat via 12.7)
```

**Issues à chercher** : Bloc 3  
**Difficulté** : Surtout Simple-Moyen  
**Nb approx** : 7 issues, ~2-3 semaines  
**Conseil** : 3.4 et 3.6 se font APRÈS 3.3, les autres sont indépendants

---

## Phase 5 : Mémoire & Persistence
**Après** : 0.1 min (pour structure)  
**Peut commencer** : En même temps que Phase 2-3

```
5.1) MemoryStore base (JSON file)
├─ 5.2) Conversation history
├─ 5.3) Long-term facts
├─ 5.4) Memory search API
├─ 5.5) Keyword extractor tool
└─ 5.6) Auto-cleanup old messages
```

**Issues à chercher** : Bloc 5  
**Difficulté** : S et M  
**Nb approx** : 6 issues, ~2 semaines

---

## Phase 6 : Slash Commands (Commandes rapides)
**Après** : 5.1-5.2 (pour /clear et /export)  
**Parallélisation** : Les 4 commandes peuvent être indépendantes

```
6.1) Command parser base
├─ 6.2) /clear command
├─ 6.3) /export command
├─ 6.4) /settings command
└─ 6.5) /info command (dépend de 2.2)
```

**Issues à chercher** : Bloc 6  
**Difficulté** : Surtout Simple  
**Nb approx** : 5 issues, ~1 semaine

---

## Phase 7 : Agents & Multi-tasks
**Après** : 1.1 et 7.1 de base  
**DIFFICILE** : À faire par les plus expérimentés

```
7.1) Agent base class
├─ 7.3) Tool runner agent (dépend 7.1)
├─ 7.2) Planner agent (dépend 7.1)
├─ 7.4) Summarizer agent (dépend 7.1, 5.2)
└─ 7.5) Agent bus & communication (dépend de tous les agents)
```

**Issues à chercher** : Bloc 7  
**Difficulté** : Moyen-Difficile  
**Nb approx** : 5 issues, ~2-4 semaines

---

## Phase 8 : Voice (TTS/STT)
**Après** : Aucune préalable (indépendant côté frontend)  
**Peut commencer** : N'importe quand

```
4.1) Web Speech API TTS
├─ 4.2) Web Speech API STT
└─ 4.3) Server-side TTS fallback (dépend 4.1)
```

**Issues à chercher** : Bloc 4  
**Difficulté** : Moyen  
**Nb approx** : 3 issues, ~1-2 semaines

---

## Phase 9 : Documents & Upload
**Après** : Aucune préalable (mais utile avec 8.2 later)  
**Parallélisation** : Oui

```
9.1) Upload endpoint
├─ 9.2) PDF parser
├─ 9.3) DOCX parser
├─ 9.4) Document chunker (dépend 9.2, 9.3)
└─ 9.5) Metadata extraction
```

**Issues à chercher** : Bloc 9  
**Difficulté** : Simple-Moyen  
**Nb approx** : 5 issues, ~2 semaines

---

## Phase 10 : Frontend basique
**Après** : Serveur fonctionnel (Phase 1-2)  
**Parallélisation** : Oui, les composants UI peuvent être indépendants

```
12.1) Basic chat interface
├─ 12.2) Dark mode toggle
├─ 12.3) Responsive design
├─ 12.4) Follow-up suggestions
├─ 12.5) Streaming responses
├─ 12.6) Copy to clipboard
└─ 12.7) Inline charts/diagrams (dépend 3.1, 3.2)
```

**Issues à chercher** : Bloc 12  
**Difficulté** : Surtout Simple  
**Nb approx** : 7 issues, ~2 semaines

---

## Phase 11 : Collaboration (Multi-users)
**Après** : 10.1 (sessions)  
**Difficulté** : Moyen-Difficile

```
10.1) User sessions
├─ 10.2) WebSocket integration
├─ 10.3) Shared rooms
└─ 10.4) Roles & permissions
```

**Issues à chercher** : Bloc 10  
**Difficulté** : Surtout Moyen  
**Nb approx** : 4 issues, ~2-3 semaines

---

## Phase 12 : Intégrations externes
**Après** : 2.1 (pour API calls)  
**Indépendant** : Chaque intégration est indépendante

```
11.1) Discord webhook
│  ├─ 11.2) GitHub integration (créer issues)
├─ 11.3) Slack bot
└─ 11.4) Monitoring endpoint
```

**Issues à chercher** : Bloc 11  
**Difficulté** : Simple-Moyen  
**Nb approx** : 4 issues, ~1-2 semaines

---

## Phase 13 : Sécurité
**Après** : Tout (à intégrer partout)  
**Parallélisation** : Oui

```
13.1) Input sanitization
├─ 13.2) Rate limiting
├─ 13.3) Authentication (tokens)
└─ 13.4) HTTPS setup
```

**Issues à chercher** : Bloc 13  
**Difficulté** : Simple-Moyen  
**Nb approx** : 4 issues, ~1-2 semaines

---

## Phase 14 : Tests & Docs
**Après** : Features associées  
**Parallélisation** : Pour chaque feature

```
14.1) Unit tests (tools)
│  ├─ 14.2) Integration tests (API)
├─ 14.3) OpenAPI documentation
├─ 14.4) Module readmes
└─ 14.5) Code examples
```

**Issues à chercher** : Bloc 14  
**Difficulté** : Simple-Moyen  
**Nb approx** : 5 issues, ~1-2 semaines

---

## Phase 15 : OPTIONNEL - Avancé
**Après** : Au moins Phase 1-7  
**Pour experts** : À faire en dernier

```
8.1) Vector embeddings
├─ 8.2) Vector DB indexing (dépend 8.1)
└─ 8.3) Semantic search (dépend 8.1, 8.2)

15.1) Python sandbox runner
├─ 15.2) Chain-of-thought mode
├─ 15.3) Auto-critic agent
├─ 15.4) Prompt compression
├─ 15.5) Plugin system
└─ 15.6) Analytics dashboard
```

**Issues à chercher** : Bloc 8, 15  
**Difficulté** : Difficile  
**Nb approx** : ~10 issues, 4h+  
**Conseil** : À faire en dernier ou en parallèle avancé

---

## 📊 Chronologie recommandée

```
Timeline (semaines)
─────────────────────────────────────

Semaine 1:   Bloc 0 (Foundation)
               └─ Tout le monde ici

Semaine 2-3: Bloc 1 (Tools) + Bloc 5 (Memory)
               ├─ Groupe A: Bloc 1 en parallèle
               ├─ Groupe B: Bloc 5 
               └─ Groupe C: Tests (0.3)

Semaine 3-4: Bloc 2 (Web) + Phase 3
               ├─ Groupe A: Bloc 2
               ├─ Groupe B: Bloc 3 (Génération)
               ├─ Groupe C: Bloc 4 (Voice)
               └─ Groupe D: Bloc 9 (Documents)

Semaine 5-6: Frontend + Commandes
               ├─ Groupe A: Bloc 12 (UI)
               ├─ Groupe B: Bloc 6 (Commands)
               └─ Groupe C: Bloc 14 (Tests & Docs)

Semaine 7+:  Agents, Collab, Intégrations, Avancé
               ├─ Groupe A: Bloc 7 (Agents)
               ├─ Groupe B: Bloc 10 (Collaboration)
               ├─ Groupe C: Bloc 11 + 13 (Intégrations + Sécurité)
               └─ Groupe D: Bloc 8 + 15 (Avancé)
```

---

## 🎯 Advice par rôle

### Pour les **débutants**
1. Prenez une issue **Simple (S)** du Bloc 0 ou 1
2. Suivez CONTRIBUTING.md à la lettre
3. Demandez de l'aide en commentant l'issue
4. Révisez au maximum 1-2 issues avant de merger

### Pour les **intermédiaires**
1. Prenez des Moyen (M) et des dépendances
2. Aidez les débutants en faisant des code reviews
3. Enchaînez 2-3 issues d'un même bloc
4. Documentez votre code en passant

### Pour les **avancés**
1. Prenez du Difficile (L)
2. Mentorez un groupe
3. Travaillez sur Bloc 7, 8, 15
4. Améliorez l'architecture globale

---

## 💡 Tips pour maximiser

- **Parallélisation** : 5-6 groupes indépendants peuvent travailler en même temps
- **Choisir un "tech captain"** : Une personne décide des patterns (dossiers, naming)
- **Daily sync** : 5 min chaque jour pour savoir qui fait quoi
- **Code review buddy** : Assignez toujours 2+ reviewers
- **Merge strategy** : Main branch doit rester stable (rebase, squash commits)

Bon travail ! 🚀
