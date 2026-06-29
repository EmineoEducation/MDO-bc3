// ══════════════════════════════════════════════════════════════
//  DATA · PAC BC3 · Diriger une organisation
//  Opération Cohésion — La tempête silencieuse chez Lumio Health · 14 mars 2025
//  Schéma : mailbox[] · dossiers[] · notes[] · guide · finder · calendar · slack
//  ⚠️  Remplacer les [À COMPLÉTER] par le contenu narratif réel du bloc.
//  ⚠️  Les placeholders {{PRENOM}} {{NOM}} {{EMAIL_ETUDIANT}} sont substitués à la connexion.
// ══════════════════════════════════════════════════════════════

window.LUMIO_DATA = {
  "student": {
    "name": "{{PRENOM}} {{NOM}}",
    "role": "Consultant·e externe",
    "email": "{{EMAIL_ETUDIANT}}",
    "company": "Indépendant·e",
    "initial": "?"
  },
  "mailbox": [
    {
      "id": "DOC-01",
      "from": "Théo Marczak (CEO)",
      "fromEmail": "theo.marczak@lumio-health.com",
      "subject": "URGENT — Mission Sonia : audit RH & plan de cohésion avant le 28/03",
      "date": "14 mars 2025",
      "preview": "Théo mandate Sonia en urgence : audit RH et plan de cohésion à livrer avant le CODIR du 28 mars, enjeu Northgate en arrière-plan.",
      "body": "Sonia,\n\nJe t'écris directement parce qu'on n'a plus le temps de tourner autour du pot.\n\nDepuis le lancement de janvier, l'équipe est dans un état que je ne peux plus ignorer : Camille absente depuis deux semaines, Yassine qui parle de partir, et une productivité marketing qui ne suit pas les objectifs Q1 révisés. Jakob Rein m'a appelé jeudi dernier — il commence à poser des questions sur notre capacité d'exécution. Je n'ai pas de bonne réponse pour lui si on ne remet pas la maison en ordre d'ici le 28 mars.\n\nJe te mandate officiellement pour conduire un audit RH d'urgence sur l'équipe marketing et produire un plan de cohésion opérationnel présentable en comité de direction. Concrètement, j'attends de toi : (1) un état des lieux honnête des tensions et des risques humains actuels, avec une attention particulière à la situation de Yassine — je te laisse gérer ça avec discernement, tu sais ce que je veux dire — (2) des actions managériales concrètes, planifiées et assignées, pas un document théorique, et (3) une proposition de gouvernance d'équipe stabilisée pour Q2.\n\nTu as carte blanche sur la méthode. Entretiens individuels, diagnostic outillé, ce que tu juges utile. Budget RH : à valider avec moi si nécessaire, viens me voir.\n\nDate limite non négociable : vendredi 28 mars, 9h00, avant le CODIR.\n\nThéo\nCEO — Lumio Health",
      "avatar": "TM",
      "avatarColor": "#134547",
      "unread": true,
      "flagged": true,
      "tags": [
        "Mission"
      ]
    },
    {
      "id": "DOC-05",
      "from": "Jakob Rein (Northgate)",
      "fromEmail": "jakob.rein@lumio-health.com",
      "subject": "RE: Lumio Band Pro — Inquiétudes sur la stabilité de l'équipe partenaire",
      "date": "14 mars 2025",
      "preview": "Jakob Rein soulève poliment mais fermement les absences de Camille et questionne la stabilité organisationnelle de Lumio avant le comité du 28.",
      "body": "Théo,\n\nJe fais suite à nos échanges de la semaine dernière et, plus directement, aux deux réunions de suivi manquées par Camille Ott — sans préavis la première fois, avec un message de dernière minute la seconde. Je comprends que des imprévus surviennent, mais à ce stade du déploiement post-lancement, ce type de discontinuité commence à poser question en interne chez Northgate.\n\nNous avons investi sur Lumio Health en partie parce que nous croyions en la solidité de votre organisation et en la maturité de vos processus. Le lancement de janvier a déjà suscité des interrogations que nous avons choisi de ne pas formaliser — nous avons préféré vous accorder le temps de vous repositionner. Mais l'absence répétée d'un interlocuteur clé sur les partenariats B2B, sans plan de continuité apparent, nous oblige à reposer la question de la gouvernance opérationnelle de l'équipe.\n\nJe note également — et je dis cela sans intention de vous mettre en difficulté — que nos partenaires institutionnels européens avec lesquels nous co-instruisons ce dossier sont attentifs aux engagements RSE des structures qu'ils accompagnent : stabilité sociale, gestion des équipes, conditions de travail. Ce ne sont plus des éléments périphériques pour eux.\n\nJe vous propose un point rapide cette semaine, Théo — idéalement avec Sonia Ferracci si elle reprend la coordination des sujets stratégiques. Je souhaite comprendre comment vous abordez les semaines à venir avant notre comité du 28.\n\nCordialement,\n\nJakob Rein\nPartner, Northgate Capital\njakob.rein@northgate-capital.eu\n+33 1 44 XX XX XX",
      "avatar": "JR",
      "avatarColor": "#5b3a8a",
      "unread": false,
      "flagged": false
    }
  ],
  "dossiers": [
    {
      "id": "DOC-03",
      "type": "rich",
      "tab": "COMPTE_R",
      "title": "CR — Réunion de relance équipe Lumio Band Pro — 17 mars 2025",
      "accent": "#1a6641",
      "runningHead": "COMPTE_RENDU_REUNION",
      "pages": [
        {
          "kicker": "COMPTE-RENDU INTERNE — CONFIDENTIEL",
          "title": "Réunion de relance équipe Lumio Band Pro",
          "byline": "Sonia Ferracci, Directrice Marketing · 17 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Réunion tenue le lundi 17 mars 2025 de 09h30 à 11h15, en présentiel salle Mistral (siège Paris 11e). Participants : Sonia Ferracci (DirMkt), Yassine Morel (Content), Marcus Tell (Design), Priya Anand (Performance), Lucie Barre (Chef de projet). Absents : Camille Ott (arrêt maladie — représentée par un point d'information écrit transmis en amont). Ordre du jour communiqué la veille via Slack #equipe-marketing."
            },
            {
              "type": "h2",
              "text": "1. Contexte et objectifs de la réunion"
            },
            {
              "type": "p",
              "text": "Sonia Ferracci a ouvert la séance en posant le cadre sans euphémisme : le lancement de la Lumio Band Pro en janvier n'a pas atteint ses cibles (38 % de l'objectif de conversion B2B à fin février, zéro activation grand public). La pression de Théo Marczak pour réviser les objectifs trimestriels à la hausse est réelle. L'objet de cette réunion n'est pas de revenir sur les causes du raté — un diagnostic sera présenté au CODIR du 28 mars — mais de reconstruire une base de travail commune, claire et tenable pour chaque membre de l'équipe d'ici fin mars."
            },
            {
              "type": "callout",
              "text": "Décision actée : les objectifs individuels Q1 sont révisés et formalisés dans Notion d'ici le 19 mars. Chaque collaborateur valide sa fiche objectifs par écrit. Aucun objectif n'est imposé sans échange préalable en tête-à-tête avec Sonia."
            },
            {
              "type": "h2",
              "text": "2. Déclinaison individuelle des objectifs relancés"
            },
            {
              "type": "p",
              "text": "Un tableau Miro (board 'LBP-Relance-Mars25', accès équipe restreint) a été co-construit en séance. Chaque participant a positionné ses trois livrables prioritaires sur une timeline glissante jusqu'au 28 mars, avec une estimation de charge en demi-journées. Yassine Morel a signalé une surcharge estimée à 11 jours/homme sur 9 jours ouvrés disponibles. Sonia a acté la déprioritisation de deux contenus SEO non urgents et le recours à un rédacteur externe freelance pour soulager Yassine — arbitrage soumis à validation de Théo Marczak avant le 18 mars 18h."
            },
            {
              "type": "h2",
              "text": "3. Outils de suivi activés"
            },
            {
              "type": "p",
              "text": "À compter du 18 mars, le canal Slack #lbp-relance-daily est activé pour un point asynchrone quotidien : chaque membre poste un message structuré (fait du jour / blocage éventuel / besoin). Un standup synchrone de 15 minutes est maintenu le mercredi matin à 09h00. Le board Miro est mis à jour en temps réel par chaque responsable de livrable. Sonia assure une revue hebdomadaire des avancements chaque vendredi à 17h00 et remonte un statut synthétique à Théo Marczak."
            },
            {
              "type": "callout",
              "text": "Point de vigilance RH : Yassine Morel a exprimé de manière explicite un niveau de fatigue préoccupant. Sonia Ferracci prend RDV bilatéral le 18 mars pour évaluation de la charge et, si nécessaire, orientation vers la médecine du travail. Ce point est traité hors canal collectif, dans le respect de la confidentialité liée à son statut RQTH."
            },
            {
              "type": "h2",
              "text": "4. Prochaines étapes"
            },
            {
              "type": "p",
              "text": "19 mars : fiches objectifs individuelles validées dans Notion. 20 mars : premier bilan Slack #lbp-relance-daily opérationnel. 21 mars 09h00 : standup hebdomadaire de référence. 24 mars : point intermédiaire Sonia / Théo Marczak sur l'avancement. 28 mars : présentation au CODIR de l'audit RH et du plan de relance consolidé. Camille Ott sera contactée par Sonia dès la semaine du 24 mars pour préparer sa réintégration progressive, en lien avec le médecin du travail."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-04",
      "type": "rich",
      "tab": "TABLEAU_",
      "title": "Référentiel de compétences & cartographie des écarts — Équipe Marketing Lumio Health Q1 2025",
      "accent": "#c4420f",
      "runningHead": "TABLEAU_GPEC",
      "pages": [
        {
          "kicker": "TABLEAU_GPEC",
          "title": "Référentiel de compétences & cartographie des écarts — Équipe Marketing Lumio Health Q1 2025",
          "byline": "Sonia Ferracci (DirMkt) · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "[À COMPLÉTER — paragraphe d'introduction]"
            },
            {
              "type": "h2",
              "text": "Éléments clés"
            },
            {
              "type": "p",
              "text": "[À COMPLÉTER — corps du document]"
            },
            {
              "type": "callout",
              "text": "Rôle narratif : Tableau synthétique compétences requises vs actuelles pour Sonia, Yassine, Camille. Identifie les écarts et propose des actions de formation. Support clé pour C19."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-06",
      "type": "rich",
      "tab": "RAPPORT_",
      "title": "Audit Politique RH Lumio Health — Variables emploi, rémunération, valorisation, implication — Mars 2025",
      "accent": "#7a756c",
      "runningHead": "RAPPORT_AUDIT_RH",
      "pages": [
        {
          "kicker": "RAPPORT_AUDIT_RH",
          "title": "Audit Politique RH Lumio Health — Variables emploi, rémunération, valorisation, implication — Mars 2025",
          "byline": "Sonia Ferracci (DirMkt) · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "[À COMPLÉTER — paragraphe d'introduction]"
            },
            {
              "type": "h2",
              "text": "Éléments clés"
            },
            {
              "type": "p",
              "text": "[À COMPLÉTER — corps du document]"
            },
            {
              "type": "callout",
              "text": "Rôle narratif : Document central de l'étude de cas : audit structuré en quatre variables avec préconisations, recommandations juridiques (DUERP, RPS, droit du travail) et plan de développement des compétences budgété. Support pour C17, C18 et C19."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-07",
      "type": "rich",
      "tab": "PLAN_FOR",
      "title": "Plan de formation 2025 — Équipe Marketing & B2B Lumio Health",
      "accent": "#134547",
      "runningHead": "PLAN_FORMATION",
      "pages": [
        {
          "kicker": "DOCUMENT INTERNE — CONFIDENTIEL RH",
          "title": "Plan de formation 2025 — Équipe Marketing & B2B Lumio Health — Budget OPCO & CPF",
          "byline": "Sonia Ferracci, Directrice Marketing · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Ce plan de formation est produit en urgence dans le cadre de l'Opération Cohésion, à la demande de Théo Marczak. Il couvre la période mars–décembre 2025 et cible prioritairement les membres de l'équipe Marketing et Partenariats B2B fragilisés par les turbulences du premier trimestre. Il s'inscrit dans la politique RSE de Lumio Health, notamment l'axe « Employabilité & bien-être au travail », et anticipe les évolutions de compétences nécessaires au pivot stratégique en cours. Le plan mobilise deux leviers de financement : l'enveloppe OPCO Santé (via l'adhésion Lumio Health à la branche SYNTEC) et les droits CPF individuels de Yassine Morel et Camille Ott."
            },
            {
              "type": "h2",
              "text": "1. Objectifs du plan"
            },
            {
              "type": "p",
              "text": "Objectifs collectifs : renforcer la culture de collaboration transversale Marketing/B2B, développer les compétences en gestion de projet agile post-lancement produit, et doter l'équipe d'outils de régulation du stress professionnel cohérents avec la mission de Lumio Health. Objectifs individuels : (a) Yassine Morel — montée en compétences sur la stratégie de contenu multicanal et accompagnement spécifique RQTH (aménagement de la charge, formation en gestion des priorités) ; (b) Camille Ott — reprise progressive via un parcours de formation à distance sur la négociation partenariale B2B et la résilience managériale, démarrage prévu à son retour estimé le 31 mars 2025."
            },
            {
              "type": "callout",
              "text": "Priorité absolue : formation Yassine Morel à enclencher avant le 28 mars — comité de direction Northgate. Son maintien dans l'équipe est conditionnel à un signal RH fort et documenté."
            },
            {
              "type": "h2",
              "text": "2. Parcours et budget détaillé"
            },
            {
              "type": "p",
              "text": "Formation 1 — « Stratégie de contenu & SEO avancé » (Yassine Morel) : 2 jours en présentiel, organisme M2iFormation Paris, 1 200 € HT. Prise en charge OPCO Santé : 800 € — CPF Yassine (solde estimé 1 450 €) : 400 €. Dates : 25–26 mars 2025. / Formation 2 — « Gestion du stress et prévention du burnout » (Yassine Morel + 3 membres équipe Marketing) : 1 journée collective, organisme Stimulus Paris, 2 400 € HT (groupe). Prise en charge OPCO Santé : 2 400 € (action de prévention RPS éligible à 100 %). Dates : 3 avril 2025. / Formation 3 — « Négociation et fidélisation grands comptes B2B » (Camille Ott) : 3 jours distanciel, organisme Cegos, 1 800 € HT. CPF Camille (solde estimé 2 100 €) : 1 800 € — reste à charge Lumio Health : 0 €. Dates : 7–9 avril 2025. / Formation 4 — « Pilotage de projet en mode agile » (équipe Marketing 5 personnes) : 2 jours en présentiel, organisme Orsys Paris, 3 500 € HT. Prise en charge OPCO Santé : 2 500 € — cofinancement Lumio Health : 1 000 €. Dates : 22–23 mai 2025."
            },
            {
              "type": "callout",
              "text": "Budget total plan : 8 900 € HT — Prise en charge OPCO Santé : 5 700 € — Mobilisation CPF (Yassine + Camille) : 2 200 € — Reste à charge Lumio Health : 1 000 €. Dossier de prise en charge OPCO à déposer avant le 20 mars 2025 (délai réglementaire 8 jours ouvrés avant démarrage)."
            },
            {
              "type": "h2",
              "text": "3. Conditions de mise en œuvre & suivi RSE"
            },
            {
              "type": "p",
              "text": "Pour Yassine Morel (RQTH), les formations seront organisées en accord avec son référent handicap, avec garantie d'accessibilité des locaux (M2iFormation Paris — site Opéra, certifié accessible). Le volume horaire hebdomadaire ne dépassera pas 7 heures de formation sur les semaines concernées, conformément au plan d'aménagement établi avec la médecine du travail le 10 mars 2025. Pour Camille Ott, le démarrage en distanciel limite les contraintes de reprise. Un point de suivi individuel sera programmé avec elle dès la semaine du 31 mars. Un bilan d'efficacité du plan sera présenté en comité de direction le 27 juin 2025 : taux de complétion, feedbacks participants, indicateurs de charge de travail perçue (outil Lumio Band Pro — usage interne)."
            },
            {
              "type": "callout",
              "text": "Ce plan de formation constitue une pièce du dossier RSE 2025 de Lumio Health. Il sera transmis à Jakob Rein (Northgate Capital) en synthèse dans le rapport de gouvernance sociale Q1, comme preuve d'une politique RH structurée et conforme aux engagements ESG du partenariat."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-08",
      "type": "deck",
      "tab": "PRESENTA",
      "title": "Restitution CODIR — Plan de Cohésion & Audit RH",
      "subtitle": "Lumio Health · 28 mars 2025 · Sonia Ferracci, Directrice Marketing",
      "date": "14 mars 2025",
      "accent": "#1b4f8a",
      "confidential": "CONFIDENTIEL",
      "slides": [
        {
          "titre": "1. État des lieux : une équipe sous pression critique",
          "contenu": "Situation au 14 mars 2025 : 3 signaux d'alerte simultanés identifiés.\n• Yassine Morel (Content Manager, RQTH) : intention de démission formalisée verbalement le 10 mars ; charge de travail estimée à 148 % sur Q1 2025, sans ajustement depuis le lancement Lumio Band Pro.\n• Camille Ott (Partenariats B2B) : arrêt maladie depuis le 28 février, durée indéterminée ; 12 comptes clients actifs sans interlocuteur désigné, dont 3 renouvellements prévus en avril.\n• Objectifs Q1 révisés à la hausse de +22 % post-lancement raté (janvier 2025) sans réévaluation des ressources disponibles.\n• Risque juridique identifié : absence de document unique d'évaluation des risques (DUERP) actualisé depuis juin 2023 — non-conformité article L4121-1 Code du travail.\n• Indice de confiance Northgate fragilisé : Jakob Rein a sollicité un point de situation le 5 mars, hors calendrier trimestriel habituel."
        },
        {
          "titre": "2. Diagnostic RH : facteurs structurels et facteurs déclencheurs",
          "contenu": "Facteurs structurels (préexistants au lancement) :\n• Absence de politique formelle de prévention des RPS — aucun référent désigné, aucun baromètre social depuis 18 mois.\n• Plan de développement des compétences 2025 non finalisé au 1er janvier ; Yassine Morel : 0 heure de formation suivie depuis son recrutement (mars 2023).\n• Pas d'entretiens professionnels réalisés en 2024 pour 4 collaborateurs sur 6 dans l'équipe marketing — obligation biennale non respectée (L6315-1 CT).\nFacteurs déclencheurs (post-janvier 2025) :\n• Pression descendante directe du CEO sur les équipes sans filtre managérial intermédiaire.\n• Redistribution des tâches de Camille Ott répartie informellement sans formalisation ni compensation.\n• Communication interne absente sur la stratégie post-lancement : vide d'information comblé par des rumeurs sur un pivot B2C.\nConclusion : crise de cohésion d'abord managériale, amplifiée par des lacunes structurelles en droit social et GPEC."
        },
        {
          "titre": "3. Plan d'actions managérial — 4 axes, 90 jours",
          "contenu": "AXE 1 — Sécurisation immédiate (mars 2025) :\n• Entretien individuel Yassine Morel : aménagement de poste formalisé avant le 31 mars, réduction de charge à 100 %, désignation d'un référent RQTH (médecine du travail convoquée).\n• Désignation d'un binôme interimaire pour les 12 comptes Camille Ott ; brief clients prioritaires avant le 4 avril.\n• Mise à jour DUERP confiée au cabinet RH externe Atémis (devis validé : 2 400 €, livraison 15 avril).\nAXE 2 — Rétablissement du cadre managérial (avril 2025) :\n• Instauration d'un rituel hebdomadaire d'équipe (30 min, vendredi 9h) avec compte-rendu partagé.\n• Déploiement d'un baromètre social mensuel anonyme (outil Supermood, déjà sous licence).\n• Révisition des objectifs Q1-Q2 en concertation avec Théo : objectifs réalistes validés en CODIR.\nAXE 3 — Développement des compétences (mai–juin 2025) :\n• Plan de formation individualisé pour chaque membre de l'équipe ; budget proposé : 8 500 € (CPF + plan entreprise).\n• Entretiens professionnels rattrapés d'ici le 30 juin 2025 pour les 4 collaborateurs concernés.\nAXE 4 — Ancrage RSE & performance sociale (Q2–Q3 2025) :\n• Rédaction d'une charte managériale Lumio intégrant QVT, inclusion et droit à la déconnexion.\n• Indicateurs RSE reportés trimestriellement à Northgate Capital : taux d'absentéisme, satisfaction équipe, heures de formation.",
          "callout": "Point d'attention CODIR : l'axe 1 conditionne la stabilité du partenariat Northgate. Toute décision sur les objectifs Q2 doit intégrer l'état réel des ressources disponibles — une surenchère d'objectifs non concertée reproduirait exactement le scénario de janvier."
        },
        {
          "titre": "4. Indicateurs de pilotage & calendrier de décision",
          "contenu": "Indicateurs clés suivis dès avril 2025 :\n• Taux d'absentéisme équipe marketing : cible < 4 % (vs 11 % en mars 2025).\n• Score baromètre social mensuel : cible ≥ 7/10 d'ici juin 2025 (baseline à mesurer en avril).\n• Taux de couverture entretiens professionnels : 100 % avant le 30 juin 2025.\n• Heures de formation réalisées : objectif 12 h/collaborateur sur 2025.\n• Comptes B2B actifs maintenus pendant l'arrêt Camille Ott : objectif 0 résiliation non voulue en avril.\nCalendrier de décision :\n— 31 mars : formalisation aménagement Yassine Morel + désignation binôme Camille Ott.\n— 15 avril : livraison DUERP actualisé + premier baromètre social.\n— 30 avril : révision objectifs Q2 validée en CODIR restreint (Théo + Sonia).\n— 30 juin : bilan plan de cohésion + restitution indicateurs RSE à Jakob Rein.\nDécision attendue ce jour : validation des axes 1 et 2, déblocage budget formation 8 500 €, et gel de toute révision d'objectifs non concertée jusqu'au 30 avril."
        }
      ]
    }
  ],
  "notes": [
    {
      "id": "DOC-02",
      "title": "Diagnostic flash — Climat social Marketing/B2B — Semaine 10",
      "date": "14 mars 2025",
      "preview": "Deux signaux critiques identifiés semaine 10 : arrêt Camille Ott et menace de démission de Yassine Morel — action RH immédiate requise.",
      "kicker": "NOTE INTERNE CONFIDENTIELLE",
      "render": "plain",
      "body": "À : Théo Marczak, CEO\nDe : Sonia Ferracci, Directrice Marketing\nDate : 14 mars 2025 — Diffusion restreinte\n\nSuite à mes entretiens individuels des 12 et 13 mars, je formalise les signaux identifiés dans l'équipe.\n\nAbsentéisme : Camille Ott est en arrêt maladie depuis le 28 février (2 semaines). Aucune date de retour confirmée à ce jour. Ses dossiers partenariats actifs (clients Renault et AXA notamment) sont en suspens.\n\nRisque de démission : Yassine Morel m'a signifié oralement le 11 mars qu'il « envisage sérieusement de partir ». Il évoque une charge de travail non soutenable depuis janvier, un manque de reconnaissance post-lancement Lumio Band Pro, et une absence de réponse RH concernant ses aménagements RQTH. Ce signal doit être traité en priorité — perte de compétences critique + risque juridique.\n\nClimat général : 3 membres de l'équipe sur 5 présentent des signes de surcharge (délais non tenus, qualité en baisse, communication dégradée). Les objectifs Q1 révisés à la hausse début février ont été perçus comme imposés sans concertation.\n\nPoints de vigilance RPS : cumul pression temporelle + déficit de reconnaissance + incertitude stratégique (pivot B2C non arbitré). Profil de risque psychosocial élevé au sens de l'accord ANI du 2 juillet 2008.\n\nRecommandation immédiate : suspendre toute révision d'objectif supplémentaire avant le 28 mars, initier un entretien RH avec Yassine dès la semaine 11, et cadrer le retour de Camille avec la médecine du travail.",
      "byline": "Sonia Ferracci (DirMkt) · 14 mars 2025"
    }
  ],
  "guide": {
    "title": "Guide de mission · Manager les équipes",
    "intro": "Ce guide est là si tu te sens bloqué. Il ne donne pas les réponses — il indique où chercher.",
    "tips": [
      {
        "titre": "C14 — Mobiliser les équipes autour des projets et des valeurs de l'organisation en veillant à la convergence entre les objectifs stratégiques et les intérêts des salariés pour créer une dynamique dans les actions individuelles et collectives",
        "body": "Appuyez-vous sur un exemple concret de réunion ou de brief d'équipe. Montrez la chaîne logique : objectif stratégique → déclinaison individuelle → rituels d'équipe. Citez au moins un outil numérique utilisé (Notion, Slack, Miro…)."
      },
      {
        "titre": "C15 — Fédérer les équipes par un management adapté aux enjeux du développement durable pour déployer des processus d'innovations et conduire le changement",
        "body": "Ne restez pas dans le discours générique : rattachez le DD à la réalité produit de Lumio (données santé, usage responsable des wearables, sobriété numérique). Formulez au moins deux objectifs chiffrés ou datés."
      },
      {
        "titre": "C16 — Superviser l'activité des équipes pour veiller à la stabilité du climat, par la mise en place d'outils de prévention et de résolution de conflits",
        "body": "Citez des indicateurs concrets (taux d'absentéisme, score eNPS, résultats d'entretiens individuels). Distinguez prévention (actions avant le conflit) et résolution (actions pendant/après). Montrez que vous avez priorisé vos actions après diagnostic."
      },
      {
        "titre": "C17 — Définir une politique sociale en intégrant les enjeux de la Responsabilité Sociétale des Entreprises (RSE) et de la gestion d'équipes multiculturelles afin d'améliorer la performance sociale de l'organisation",
        "body": "Structurez votre audit en quatre variables (emploi / rémunération / valorisation / implication) puis formulez une préconisation par variable. Pour l'interculturel, appuyez-vous sur le profil de Jakob Rein et les interactions Northgate pour illustrer concrètement."
      },
      {
        "titre": "C18 — Assurer le respect des règles et obligations de droit du travail, de sécurité au travail et de protection sociale dans le cadre des impératifs économiques de l'entreprise pour protéger les salariés et les biens",
        "body": "Citez les textes applicables (Code du travail, accords de branche medtech si pertinent). Distinguez ce qui relève de l'obligation légale de ce qui relève de la politique volontaire de l'entreprise. Le jury attend des préconisations actionnables, pas seulement une liste de textes."
      },
      {
        "titre": "C19 — Piloter la gestion des compétences et des métiers afin d'anticiper et de suivre les évolutions stratégiques de l'entreprise dans son environnement par l'élaboration et la conduite d'un plan de développement des compétences et d'un plan de formation",
        "body": "Utilisez un tableau synthétique compétences requises / compétences actuelles / écart / action pour chaque membre de l'équipe. Chiffrez le budget formation (CPF, OPCO…) et associez chaque action à un délai. Le jury vérifiera que votre plan répond à la fois aux besoins collectifs ET individuels."
      }
    ],
    "footer": "Ce guide est disponible à tout moment via le bouton ? en bas à gauche du desktop."
  },
  "notepad": {
    "title": "Mes notes — mission",
    "placeholder": "Tes pensées au fil de l'eau pendant que tu lis le dossier."
  },
  "finder": {
    "folders": {
      "guide": {
        "title": "Guide",
        "sidebar": "⌘ Guide",
        "icon": "📕",
        "items": [
          {
            "kind": "pdf",
            "name": "Guide de mission",
            "app": "pdf",
            "props": {}
          }
        ]
      },
      "acte1": {
        "title": "Acte 1",
        "sidebar": "Acte 1",
        "icon": "📁",
        "items": [
          {
            "kind": "mail",
            "name": "URGENT — Brief mission",
            "app": "mail",
            "props": {
              "docId": "DOC-01"
            }
          },
          {
            "kind": "note",
            "name": "Diagnostic flash — État",
            "app": "notes",
            "props": {
              "docId": "DOC-02"
            }
          }
        ]
      },
      "acte2": {
        "title": "Acte 2",
        "sidebar": "Acte 2",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "CR — Réunion de",
            "app": "pdf",
            "props": {
              "docId": "DOC-03"
            }
          },
          {
            "kind": "pdf",
            "name": "Référentiel de compétences &",
            "app": "pdf",
            "props": {
              "docId": "DOC-04"
            }
          }
        ]
      },
      "acte3": {
        "title": "Acte 3",
        "sidebar": "Acte 3",
        "icon": "📁",
        "items": [
          {
            "kind": "mail",
            "name": "RE: Lumio Band Pro",
            "app": "mail",
            "props": {
              "docId": "DOC-05"
            }
          },
          {
            "kind": "pdf",
            "name": "Audit Politique RH Lumio",
            "app": "pdf",
            "props": {
              "docId": "DOC-06"
            }
          }
        ]
      },
      "acte4": {
        "title": "Acte 4",
        "sidebar": "Acte 4",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "Plan de formation 2025",
            "app": "pdf",
            "props": {
              "docId": "DOC-07"
            }
          }
        ]
      },
      "acte5": {
        "title": "Acte 5",
        "sidebar": "Acte 5",
        "icon": "📁",
        "items": [
          {
            "kind": "deck",
            "name": "Restitution CODIR — Plan",
            "app": "pdf",
            "props": {
              "docId": "DOC-08"
            }
          }
        ]
      },
      "portraits": {
        "title": "Portraits équipe",
        "sidebar": "Portraits",
        "icon": "🪪",
        "items": [
          {
            "kind": "html",
            "name": "Théo Marczak — CEO",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_theo_marczak.html"
            }
          },
          {
            "kind": "html",
            "name": "Sonia Ferracci — Dir. Marketing",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_sonia_ferracci.html"
            }
          },
          {
            "kind": "html",
            "name": "Camille Ott — Partenariats B2B",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_camille_ott.html"
            }
          },
          {
            "kind": "html",
            "name": "Yassine Morel — Content Manager",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_yassine_morel.html"
            }
          },
          {
            "kind": "html",
            "name": "Jakob Rein — Northgate Capital",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_jakob_rein.html"
            }
          }
        ]
      }
    },
    "order": [
      "guide",
      "acte1",
      "acte2",
      "acte3",
      "acte4",
      "acte5",
      "portraits"
    ]
  },
  "calendar": {
    "monthLabel": "Mars",
    "todayLabel": "Jour 1 / 18",
    "countdownLabel": "AVANT ÉCHÉANCE",
    "startDay": 14,
    "daysInMonth": 31,
    "startOffset": 0,
    "deadlineDay": 31,
    "boardDay": null,
    "legend": [
      {
        "label": "Réunion",
        "color": "#3a7bd5"
      },
      {
        "label": "Production",
        "color": "#c4420f"
      },
      {
        "label": "Échéance",
        "color": "#a83232"
      }
    ],
    "events": {
      "14": [
        {
          "label": "Kick-off · Opération Cohésion — La tempête silencieuse chez Lumio Health",
          "bg": "#3a7bd5",
          "color": "#fff",
          "bold": true
        }
      ],
      "31": [
        {
          "label": "Livrable final",
          "bg": "#a83232",
          "color": "#fff",
          "bold": true
        }
      ]
    },
    "footer": "<em>1 jour fictif ≈ 11 minutes réelles · ratio ×74</em>"
  },
  "trash": {
    "title": "La corbeille est vide.",
    "body": "Mais l'idée est bonne. La plupart des consultants commencent par jeter quelque chose."
  },
  "slack": {
    "workspace": "Lumio Health",
    "channels": [
      {
        "id": "general",
        "name": "general"
      },
      {
        "id": "projet-bc3",
        "name": "projet-bc3"
      }
    ],
    "dms": [
      {
        "id": "commanditaire",
        "name": "Théo Marczak",
        "avatar": "TM",
        "color": "#134547",
        "status": "online",
        "isCommanditaire": true
      }
    ],
    "seed": {
      "commanditaire": [
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:17",
          "text": "Bonjour {{PRENOM}}, je te contacte directement parce que la situation interne ne peut plus attendre — Camille est out, Yassine est à deux doigts de claquer la porte, et Jakob commence à poser des questions sur notre capacité à tenir nos engagements"
        },
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:21",
          "text": "Sonia fait ce qu'elle peut mais elle a besoin d'un regard extérieur, quelqu'un qui structure vite et qui ne soit pas pris dans la dynamique émotionnelle de l'équipe"
        },
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:24",
          "text": "J'ai besoin d'un audit RH complet + un plan de remise en cohésion opérationnel sur mon bureau avant le 28 mars — comité de direction avec Northgate, pas de marge de manœuvre"
        }
      ]
    }
  },
  "slackPrompts": {
    "commanditaire": "Tu es Théo Marczak, CEO de Lumio Health chez Lumio Health. Tu réponds à {{PRENOM}}, consultant·e externe sur la mission \"Opération Cohésion — La tempête silencieuse chez Lumio Health\". Tu évalues sans expliquer, tu relances sans donner la réponse, tu simules la pression hiérarchique. Tu réponds en 2-3 messages courts séparés par ---SPLIT---. Pas de longs développements.",
    "commanditaireLivrable": "Tu es Théo Marczak. Tu viens de recevoir le livrable de {{PRENOM}}. Tu réagis en 2-3 messages courts séparés par ---SPLIT---. Tu pointes ce qui te paraît juste et ce qui te paraît faible, sans expliquer comment corriger."
  },
  "pressArticles": [
    {
      "id": "a1",
      "source": "L'Usine Digitale",
      "host": "usine-digitale.fr",
      "url": "usine-digitale.fr/article/quand-la-croissance-forcee-epuise-les-equipes-des-medtech-francaises",
      "author": "Margaux Teillard",
      "date": "11 mars 2025",
      "headline": "Quand la croissance forcée épuise les équipes des medtech françaises",
      "lede": "Portées par des investisseurs exigeants et des cycles de lancement accélérés, plusieurs startups de santé numérique voient leurs équipes internes se fissurer. Un phénomène qui interroge les pratiques managériales du secteur.",
      "illustration": "PHOTO ILLUSTRATIVE",
      "body": "Depuis dix-huit mois, le marché français des medtech affiche une attractivité record auprès des fonds de capital-risque européens. Les levées de fonds se succèdent, les roadmaps produit s'accélèrent, et les équipes — souvent réduites — se retrouvent à absorber des charges de travail croissantes sans que les effectifs suivent. Résultat : un turnover qui grimpe en flèche et des signaux d'épuisement professionnel de plus en plus difficiles à ignorer.\n\nSelon une étude publiée en février 2025 par le cabinet Alvares & Marsal, 62 % des startups healthtech françaises de moins de 50 salariés ont connu au moins un départ non anticipé dans leur équipe marketing ou produit au cours des douze derniers mois. Les directions générales, elles, reconnaissent rarement le lien direct avec la pression des investisseurs.\n\n\"Il y a une dissonance très forte entre le discours sur le bien-être au travail porté par ces entreprises — qui, pour beaucoup, vendent justement des solutions de santé — et la réalité vécue par leurs propres collaborateurs\", observe Delphine Aubert, associée chez RH Lab Conseil, cabinet spécialisé dans l'accompagnement des scale-ups.\n\nLe cas des travailleurs en situation de handicap est particulièrement préoccupant. Dans des environnements à forte intensité cognitive et à cadences serrées, le respect des aménagements RQTH devient souvent la première variable d'ajustement. Une tendance que les inspections du travail commencent à surveiller de près, notamment dans les zones de forte concentration de startups comme Paris XIe ou le quartier de Sentier.\n\nLes directions marketing sont en première ligne. Chargées de piloter des lancements produit avec des budgets contraints et des objectifs trimestriels souvent fixés unilatéralement par les fondateurs sous pression de leurs boards, elles se retrouvent à gérer simultanément la performance externe et la tension interne. \"Le rôle de directeur marketing dans une startup en hypercroissance est devenu un poste à très haute usure\", résume Aubert.\n\nCertains fonds commencent néanmoins à intégrer des critères de climat social dans leurs reportings ESG trimestriels, sous la pression croissante des limited partners sensibles aux risques réputationnels. Mais pour beaucoup d'observateurs, il s'agit encore d'indicateurs cosmétiques, rarement suivis d'effets correctifs concrets.\n\nLa question qui se pose désormais pour ces entreprises n'est plus seulement de savoir comment croître vite, mais comment croître sans se briser de l'intérieur."
    }
  ],
  "fausseUne": {
    "source": "Les Échos",
    "host": "lesechos.fr",
    "rubrique": "Économie & Entreprises",
    "kicker": "Santé au travail",
    "date": "14 mars 2025",
    "headline": "Medtech françaises : quand les champions du bien-être au travail s'effondrent de l'intérieur",
    "chapeau": "Paradoxe cruel du secteur : les startups spécialisées dans la mesure du stress et la prévention des risques psychosociaux sont, selon une étude Syndex publiée ce jour, parmi les plus exposées aux crises managériales silencieuses. Derrière les wearables et les dashboards RH, des équipes à bout de souffle que personne ne surveille.",
    "body": "L'étude porte sur 47 medtechs européennes actives dans le segment du bien-être professionnel. Résultat sans appel : 61 % d'entre elles ont connu au moins un épisode de crise RH grave — démission clé, arrêt maladie prolongé d'un cadre, ou conflit ouvert avec un investisseur — dans les 18 mois suivant un lancement produit raté. 'Il existe une forme d'angle mort organisationnel propre à ces entreprises : elles vendent la mesure du stress sans se doter des outils pour le gérer en interne', analyse Delphine Cros, directrice associée chez Syndex. Le phénomène s'accélère à mesure que les fonds de capital-risque intensifient leur pression sur les KPI de croissance, parfois au mépris des réalités humaines des équipes fondatrices. Sur le plan juridique, les experts rappellent que l'obligation de sécurité de l'employeur — consacrée par la jurisprudence de la Cour de cassation — s'applique sans exception, y compris dans les structures de moins de cinquante salariés. 'Un arrêt maladie non traité, un salarié RQTH mis en difficulté, une démission consécutive à un surmenage documenté : autant de signaux qui peuvent déboucher sur une mise en cause pénale du dirigeant', avertit Maître Isabelle Fontaine, avocate spécialisée en droit social. À l'heure où plusieurs acteurs du secteur cherchent à séduire de nouveaux investisseurs ou à consolider des partenariats stratégiques, la question de la gouvernance interne s'impose comme un critère de due diligence à part entière."
  }
};

window.PAC_CONFIG = {
  "bloc": "bc3",
  "titre": "Manager les équipes",
  "epreuve": "Évaluation 1 : Rapport d'activité (mémoire professionnel), Évaluation 4 : Étude de cas",
  "deadline": "14 mars 2025 · 18h00",
  "commanditaire": "Théo Marczak",
  "entreprise": "Lumio Health",
  "dispositif": "PAC",
  "note_reflexive": true,
  "temps": [
    {
      "n": 1,
      "label": "Ancrage terrain",
      "debut": 0,
      "fin": 20,
      "couleur": "#7a756c"
    },
    {
      "n": 2,
      "label": "Entrée dans l'affaire",
      "debut": 20,
      "fin": 50,
      "couleur": "#1b4f8a"
    },
    {
      "n": 3,
      "label": "Diagnostic",
      "debut": 50,
      "fin": 95,
      "couleur": "#1a6641"
    },
    {
      "n": 4,
      "label": "Production",
      "debut": 95,
      "fin": 175,
      "couleur": "#c4420f"
    },
    {
      "n": 5,
      "label": "Réflexion",
      "debut": 175,
      "fin": 210,
      "couleur": "#7a756c"
    }
  ],
  "competences": [
    {
      "code": "C14",
      "label": "Mobiliser les équipes autour des projets et des valeurs de l'organisation en veillant à la convergence entre les objectifs stratégiques et les intérêts des salariés pour créer une dynamique dans les actions individuelles et collectives",
      "libelle": "Mobiliser les",
      "rncp": "Mobiliser les équipes autour des projets et des valeurs de l'organisation en veillant à la convergence entre les objectifs stratégiques et les intérêts des salariés pour créer une dynamique dans les actions individuelles et collectives",
      "placeholder": "Décrivez comment vous avez (ou auriez) mobilisé l'équipe marketing de Lumio autour du relancement Lumio Band Pro : quels supports de communication interne avez-vous produits, comment avez-vous décliné les objectifs stratégiques en objectifs individuels pour Sonia, Yassine et Camille, et quelles techniques d'animation de réunion avez-vous mobilisées (y compris en distanciel) ?",
      "min": 180,
      "motsCles": [
        "objectifs individuels",
        "culture d'équipe",
        "animation de réunion",
        "management de proximité",
        "outils numériques",
        "convergence",
        "dynamique collective"
      ],
      "conseil": "Appuyez-vous sur un exemple concret de réunion ou de brief d'équipe. Montrez la chaîne logique : objectif stratégique → déclinaison individuelle → rituels d'équipe. Citez au moins un outil numérique utilisé (Notion, Slack, Miro…)."
    },
    {
      "code": "C15",
      "label": "Fédérer les équipes par un management adapté aux enjeux du développement durable pour déployer des processus d'innovations et conduire le changement",
      "libelle": "Fédérer les",
      "rncp": "Fédérer les équipes par un management adapté aux enjeux du développement durable pour déployer des processus d'innovations et conduire le changement",
      "placeholder": "Dans le contexte Lumio Health (medtech, wearables bien-être), expliquez quelle vision RSE / développement durable vous portez auprès de vos équipes, quels objectifs concrets vous avez fixés (ex. : réduction empreinte carbone des process, diversité des recrutements) et comment vous avez conduit un processus d'innovation ou de changement en lien avec ces enjeux.",
      "min": 120,
      "motsCles": [
        "développement durable",
        "RSE",
        "innovation",
        "conduite du changement",
        "vision",
        "objectifs mesurables",
        "fédérer"
      ],
      "conseil": "Ne restez pas dans le discours générique : rattachez le DD à la réalité produit de Lumio (données santé, usage responsable des wearables, sobriété numérique). Formulez au moins deux objectifs chiffrés ou datés."
    },
    {
      "code": "C16",
      "label": "Superviser l'activité des équipes pour veiller à la stabilité du climat, par la mise en place d'outils de prévention et de résolution de conflits",
      "libelle": "Superviser l'activité",
      "rncp": "Superviser l'activité des équipes pour veiller à la stabilité du climat, par la mise en place d'outils de prévention et de résolution de conflits",
      "placeholder": "Face à la tension entre Yassine Morel et la direction, et à l'absence de Camille Ott, décrivez les indicateurs de climat social que vous avez mis en place pour détecter les signaux faibles, le diagnostic que vous avez conduit et le plan d'actions de prévention/résolution que vous préconisez.",
      "min": 140,
      "motsCles": [
        "indicateurs de climat social",
        "signaux faibles",
        "diagnostic",
        "prévention des conflits",
        "médiation",
        "plan d'actions",
        "suivi"
      ],
      "conseil": "Citez des indicateurs concrets (taux d'absentéisme, score eNPS, résultats d'entretiens individuels). Distinguez prévention (actions avant le conflit) et résolution (actions pendant/après). Montrez que vous avez priorisé vos actions après diagnostic."
    },
    {
      "code": "C17",
      "label": "Définir une politique sociale en intégrant les enjeux de la Responsabilité Sociétale des Entreprises (RSE) et de la gestion d'équipes multiculturelles afin d'améliorer la performance sociale de l'organisation",
      "libelle": "Définir une",
      "rncp": "Définir une politique sociale en intégrant les enjeux de la Responsabilité Sociétale des Entreprises (RSE) et de la gestion d'équipes multiculturelles afin d'améliorer la performance sociale de l'organisation",
      "placeholder": "Rédigez l'audit de la politique RH de Lumio Health : analysez les variables emploi, rémunération, valorisation et implication au sein de l'équipe, formulez des préconisations cohérentes et montrez comment les outils du management interculturel (présence de Jakob Rein / Northgate, diversité de l'équipe) ont été mobilisés.",
      "min": 160,
      "motsCles": [
        "politique sociale",
        "emploi",
        "rémunération",
        "valorisation",
        "implication",
        "management interculturel",
        "RSE",
        "performance sociale",
        "préconisations"
      ],
      "conseil": "Structurez votre audit en quatre variables (emploi / rémunération / valorisation / implication) puis formulez une préconisation par variable. Pour l'interculturel, appuyez-vous sur le profil de Jakob Rein et les interactions Northgate pour illustrer concrètement."
    },
    {
      "code": "C18",
      "label": "Assurer le respect des règles et obligations de droit du travail, de sécurité au travail et de protection sociale dans le cadre des impératifs économiques de l'entreprise pour protéger les salariés et les biens",
      "libelle": "Assurer le",
      "rncp": "Assurer le respect des règles et obligations de droit du travail, de sécurité au travail et de protection sociale dans le cadre des impératifs économiques de l'entreprise pour protéger les salariés et les biens",
      "placeholder": "L'arrêt maladie de Camille Ott et la situation de stress déclarée par Yassine Morel soulèvent des questions juridiques. Décrivez votre veille réglementaire (RPS, obligation de sécurité de résultat, DUERP), les vérifications que vous avez effectuées et les recommandations juridiques que vous intégrez à votre audit.",
      "min": 130,
      "motsCles": [
        "droit du travail",
        "sécurité au travail",
        "protection sociale",
        "RPS",
        "DUERP",
        "obligation de sécurité",
        "veille réglementaire",
        "recommandations juridiques"
      ],
      "conseil": "Citez les textes applicables (Code du travail, accords de branche medtech si pertinent). Distinguez ce qui relève de l'obligation légale de ce qui relève de la politique volontaire de l'entreprise. Le jury attend des préconisations actionnables, pas seulement une liste de textes."
    },
    {
      "code": "C19",
      "label": "Piloter la gestion des compétences et des métiers afin d'anticiper et de suivre les évolutions stratégiques de l'entreprise dans son environnement par l'élaboration et la conduite d'un plan de développement des compétences et d'un plan de formation",
      "libelle": "Piloter la",
      "rncp": "Piloter la gestion des compétences et des métiers afin d'anticiper et de suivre les évolutions stratégiques de l'entreprise dans son environnement par l'élaboration et la conduite d'un plan de développement des compétences et d'un plan de formation",
      "placeholder": "Élaborez un référentiel de compétences pour l'équipe marketing/B2B de Lumio Health en tenant compte des évolutions du secteur medtech (IA, data santé, réglementation MDR). Proposez ensuite un plan de développement des compétences identifiant les écarts et un plan de formation budgété répondant aux besoins collectifs et individuels.",
      "min": 160,
      "motsCles": [
        "référentiel de compétences",
        "GPEC",
        "plan de développement des compétences",
        "plan de formation",
        "écarts de compétences",
        "mobilité professionnelle",
        "budget formation",
        "medtech"
      ],
      "conseil": "Utilisez un tableau synthétique compétences requises / compétences actuelles / écart / action pour chaque membre de l'équipe. Chiffrez le budget formation (CPF, OPCO…) et associez chaque action à un délai. Le jury vérifiera que votre plan répond à la fois aux besoins collectifs ET individuels."
    }
  ],
  "gabarits": {},
  "questionsPositionnement": [],
  "juryPrompt": "Tu es le jury certifiant du bloc bc3 (Diriger une organisation).\nContexte : Opération Cohésion — La tempête silencieuse chez Lumio Health · 14 mars 2025.\nTu évalues une production étudiante aux critères RNCP stricts. Sois exigeant mais juste.\nCritères éliminatoires :\n- Absence de description des rôles et responsabilités de chaque membre de l'équipe dans le dispositif managérial présenté : le jury doit pouvoir identifier qui fait quoi (Sonia, Yassine, Camille, Théo) dans chaque action proposée.\n- Absence d'indicateurs d'impact mesurables sur au moins trois des six compétences : chaque préconisation doit être assortie d'un indicateur qualitatif ou quantitatif permettant d'évaluer son effet (ex. taux d'absentéisme, score eNPS, budget formation, nombre d'actions formation réalisées).\n- Traitement superficiel ou absent de la dimension juridique (C18) : tout dossier ne citant aucune obligation légale concrète (Code du travail, DUERP, RPS) sera éliminé.\n- Plan de formation (C19) non budgété ou non rattaché à des écarts de compétences identifiés : un plan sans chiffrage ou sans lien avec un référentiel de compétences ne satisfait pas aux critères d'évaluation.\n- Note réflexive absente ou inférieure à 100 mots : la posture réflexive est une exigence formelle du bloc ; son absence entraîne l'invalidation du dossier.\n- Aucun lien établi entre la politique RSE / développement durable (C15) et la réalité sectorielle de Lumio Health (medtech, wearables, données de santé) : les discours génériques déconnectés du contexte sont éliminatoires.\n- Confusion entre prévention et résolution de conflits (C16) : le jury attend une distinction explicite entre les outils de prévention (avant le conflit) et les dispositifs de résolution (pendant/après), appuyée sur un diagnostic préalable.\n\nRéponds EXACTEMENT dans ce format :\n### C14 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C15 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C16 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C17 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C18 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C19 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### Note réflexive — [Satisfaisant / Insuffisant / Absent]\nUne phrase.\n\n## Niveau global\n**[Non conforme / Partiellement conforme / Conforme / Conforme avec distinction]**\n\n## Question de jury\nUne question dérangeante que tu poserais à l'oral.",
  "livrableMinMots": 520,
  "noteReflexiveMinMots": 100
};
// Alias de compatibilité
window.PASS_CONFIG = window.PAC_CONFIG;

// [PATCH] Correction bug — voiceMemos fallback pour app-voice.jsx
if (window.LUMIO_DATA && !window.LUMIO_DATA.voiceMemos && !window.LUMIO_DATA.camilleVerbatims) {
  window.LUMIO_DATA.voiceMemos = [];
}
