# 📊 Statistiques des Issues

Document généré à partir de `docs/FEATURES.md`.  
**Total : ~100 issues** réparties stratégiquement pour débutants.

## Par Bloc

| Bloc | Nom | Issues | Difficulté | Type |
|------|-----|--------|-----------|------|
| 0 | Infrastructure | 4 | S=4 | setup |
| 1 | Tools basiques | 6 | S=4, M=2 | feature |
| 2 | Web & APIs | 5 | S=2, M=3 | feature |
| 3 | Génération | 7 | S=4, M=3 | feature |
| 4 | Voix (TTS/STT) | 3 | M=3 | feature |
| 5 | Mémoire | 6 | S=4, M=2 | feature |
| 6 | Commandes | 5 | S=4, M=1 | feature |
| 7 | Agents | 5 | S=1, M=3, L=1 | feature |
| 8 | Embeddings & Vector | 3 | M=1, L=2 | feature |
| 9 | Documents | 5 | S=1, M=4 | feature |
| 10 | Collaboration | 4 | S=1, M=3 | feature |
| 11 | Intégrations | 4 | S=2, M=2 | feature |
| 12 | UI/Frontend | 7 | S=6, M=1 | feature |
| 13 | Sécurité | 4 | S=2, M=2 | feature |
| 14 | Tests & Docs | 5 | S=2, M=3 | test/doc |
| 15 | Avancé | 6 | M=3, L=3 | feature |
| **TOTAL** | | **104** | **S=45, M=45, L=10** | |

## Par Difficulté

### Faciles (S) — 45 issues
✅ Parfait pour débuter  
⏱️ 1–2h par issue

**Distribution** :
- Infrastructure (4)
- Tools basiques (4)
- Web APIs (2)
- Génération (4)
- Mémoire (4)
- Commandes (4)
- Agents (1)
- Documents (1)
- Collab (1)
- Intégrations (2)
- Frontend (6)
- Sécurité (2)
- Docs (5) ← **Test & tests, super pour apprendre**

### Moyennes (M) — 45 issues
⚠️ Pas trop compliqué, quelques dépendances  
⏱️ 2–4h par issue

**Distribution** :
- Tools basiques (2)
- Web APIs (3)
- Génération (3)
- Voix (3)
- Mémoire (2)
- Commandes (1)
- Agents (3)
- Embeddings (1)
- Documents (4)
- Collab (3)
- Intégrations (2)
- Sécurité (2)
- Avancé (3)

### Difficiles (L) — 10 issues
🔴 Pour les expérimentés  
⏱️ 4h+ par issue

**Distribution** :
- Agents (1)
- Embeddings (2)
- Python runner (1)
- CoT mode (1)
- Auto-critic (1)
- Prompt compression (1)
- Plugin system (1)
- Avancé (3)

---

## Par Catégorie

| Catégorie | Count | Labels | Color |
|-----------|-------|--------|-------|
| **tools** | 20 | `category:tools` | 🔵 |
| **web** | 10 | `category:web` | 🟢 |
| **generative** | 10 | `category:generative` | 🟠 |
| **voice** | 3 | `category:voice` | 🟣 |
| **advanced** | 20 | `category:advanced` | 🔴 |
| **collaborative** | 10 | `category:collaborative` | 🟤 |
| **infrastructure** | 31 | `category:infrastructure` | 🩷 |

---

## Par Type

| Type | Count | Color |
|------|-------|-------|
| **feature** | 95 | 🟢 |
| **test** | 4 | 🟣 |
| **doc** | 5 | 🟠 |

---

## Dependencies Graph (simplifié)

```
Phase 1: Foundation
└─ 0.1, 0.2, 0.3, 0.4
   └─ Dépend: aucune ✨ START HERE

Phase 2: Tools
└─ 1.1 (base)
   ├─ 1.2 (calculator)
   ├─ 1.3 (strings)
   ├─ 1.4 (datetime)
   ├─ 1.5 (integration)
   └─ 1.6 (logging)

Phase 3: Web
└─ 2.1 (HTTP)
   ├─ 2.2 (search)
   ├─ 2.3 (cache)
   ├─ 2.4 (HTML parse)
   └─ 2.5 (security)

Phase 4: Génération
└─ 3.1-3.7 (charts, pages, PDF, etc)

Phase 5: Mémoire
└─ 5.1 (store)
   ├─ 5.2 (history)
   ├─ 5.3 (facts)
   ├─ 5.4 (search)
   ├─ 5.5 (keywords)
   └─ 5.6 (cleanup)

Phase 6: Commandes
└─ 6.1 (parser)
   ├─ 6.2 (/clear)
   ├─ 6.3 (/export)
   ├─ 6.4 (/settings)
   └─ 6.5 (/info, dépend 2.2)

Phase 7: Agents
└─ 7.1 (base)
   ├─ 7.2 (planner)
   ├─ 7.3 (runner)
   ├─ 7.4 (summarizer, dépend 5.2)
   └─ 7.5 (bus, dépend tous agents)

Phase 8: Voice
└─ 4.1 (TTS)
   ├─ 4.2 (STT)
   └─ 4.3 (server TTS)

Phase 9: Documents
└─ 9.1 (upload)
   ├─ 9.2 (PDF)
   ├─ 9.3 (DOCX)
   ├─ 9.4 (chunker, dépend 9.2+9.3)
   └─ 9.5 (metadata)

Phase 10: Frontend
└─ 12.1 (chat UI)
   ├─ 12.2 (dark mode)
   ├─ 12.3 (responsive)
   ├─ 12.4 (suggestions)
   ├─ 12.5 (streaming)
   ├─ 12.6 (copy)
   └─ 12.7 (charts, dépend 3.1+3.2)

Phase 11: Collab
└─ 10.1 (sessions)
   ├─ 10.2 (websockets)
   ├─ 10.3 (rooms, dépend 10.2)
   └─ 10.4 (roles, dépend 10.1)

Phase 12: Intégrations
├─ 11.1 (Discord)
├─ 11.2 (GitHub, dépend 2.1)
├─ 11.3 (Slack, dépend 10.2)
└─ 11.4 (monitoring)

Phase 13: Sécurité
├─ 13.1 (sanitize)
├─ 13.2 (rate limit)
├─ 13.3 (auth, dépend 10.1)
└─ 13.4 (HTTPS)

Phase 14: Tests
├─ 14.1 (unit, dépend 1.2+1.3+1.4)
├─ 14.2 (integration, dépend 14.1)
├─ 14.3 (OpenAPI)
├─ 14.4 (readmes)
└─ 14.5 (examples)

Phase 15: Avancé
├─ 8.1 (embeddings)
├─ 8.2 (vector DB, dépend 8.1)
├─ 8.3 (search, dépend 8.1+8.2)
├─ 15.1 (Python sandbox)
├─ 15.2 (CoT mode, dépend 7.1)
├─ 15.3 (critic, dépend 7.1)
├─ 15.4 (compression, dépend 7.4)
├─ 15.5 (plugins, dépend 7.1+7.5)
└─ 15.6 (analytics, dépend 11.4+3.1)
```

---

## Recommandations de parallélisation

### Première vague (Semaine 1)
Tout le monde prend 1 issue du **Bloc 0**.
- Max 4 issues
- Durée: 1-2h chacune
- Blockers: aucun

### Deuxième vague (Semaine 2-3)
Groupes en parallèle:
- **Groupe A** (2-3 pers): Bloc 1 (tools) — peut se faire en parallèle
- **Groupe B** (2-3 pers): Bloc 5 (memory)
- **Groupe C** (1-2 pers): Bloc 0 finition + 14.1 (tests)

Point commun: **1.1 et 5.1 doivent être finis rapidement**

### Troisième vague (Semaine 3-4)
- **Groupe A**: Bloc 2 (web)
- **Groupe B**: Bloc 3 (génération)
- **Groupe C**: Bloc 4 (voice) — indépendant
- **Groupe D**: Bloc 6 (commandes)
- **Groupe E**: Bloc 9 (documents)

### Quatrième vague (Semaine 5-6)
- **Groupe A**: Bloc 12 (frontend) — IMPORTANT
- **Groupe B**: Bloc 14 (tests & docs)
- **Groupe C**: Bloc 11 (intégrations)
- **Groupe D**: Bloc 13 (sécurité)

### Vague finale (Semaine 7+)
- **Groupe A**: Bloc 7 (agents) — complexe, 2+ pers
- **Groupe B**: Bloc 10 (collaboration)
- **Groupe C**: Bloc 8 + 15 (avancé) — pour experts

---

## Checks qualité

Avant de dire "terminé" :

- [ ] Issue est liée à ses dépendances (GitHub links)
- [ ] Tests passent (`npm test`)
- [ ] Code suivi conventions (CONTRIBUTING.md)
- [ ] Pas de `console.log()` (utiliser logger)
- [ ] PR approuvée par 2+ reviewers
- [ ] Aucun conflit sur main

---

## 📈 Métriques d'avancement

Calculer le % avec ce tableau :

| Bloc | Total | Fait ✅ | % | Status |
|------|-------|---------|---|--------|
| 0 | 4 | ? | ? | |
| 1 | 6 | ? | ? | |
| 2 | 5 | ? | ? | |
| 3 | 7 | ? | ? | |
| 4 | 3 | ? | ? | |
| 5 | 6 | ? | ? | |
| 6 | 5 | ? | ? | |
| 7 | 5 | ? | ? | |
| 8 | 3 | ? | ? | |
| 9 | 5 | ? | ? | |
| 10 | 4 | ? | ? | |
| 11 | 4 | ? | ? | |
| 12 | 7 | ? | ? | |
| 13 | 4 | ? | ? | |
| 14 | 5 | ? | ? | |
| 15 | 6 | ? | ? | |
| **TOTAL** | **104** | **?** | **?** | |

Objectifs intermédiaires recommandés:
- Semaine 2: Bloc 0 à 100% ✅
- Semaine 4: Bloc 0-3 à 80%+
- Semaine 6: Bloc 0-7 à 70%+
- Fin: Bloc 0-12 à 100%, 13-15 optionnel
