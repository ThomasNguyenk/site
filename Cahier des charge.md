Absolument ! Voici un **Cahier des Charges** synthétique et structuré pour votre application web, basé sur les fichiers HTML que vous avez fournis et les fonctionnalités développées (y compris le Quiz et la génération de PDF).

Ce document définit les objectifs, l'architecture et les exigences détaillées du projet.

## Cahier des Charges - Portail Étudiant Physique-Chimie

---

### 1. Objectif Général du Projet

L'objectif principal est de fournir aux élèves de **Première** une plateforme d'apprentissage web (e-learning) sécurisée et thématique, leur permettant d'accéder à des ressources de Physique-Chimie, de s'évaluer via des quiz interactifs, et de suivre leurs progrès localement.

---

### 2. Architecture et Vues de l'Application

Le portail se compose de quatre vues principales, toutes intégrées dans un environnement visuel cohérent (thème sombre/magique).

| Fichier HTML | Rôle Principal | Public Cible | Prérequis d'Accès |
| :--- | :--- | :--- | :--- |
| **Connexion étudiant.html** | Authentification (Login + 2FA) | Tous | Aucun |
| **index.html** | Page d'Accueil personnalisée | Élèves de Première | Authentification réussie |
| **1ere année.html** | Répertoire des Cours et Exercices | Élèves de Première | Authentification réussie |
| **Quiz de révision de 1ère Année.html** | Questionnaire à Choix Multiples (QCM) | Élèves de Première | Authentification réussie |

---

### 3. Exigences Fonctionnelles Détaillées (EF)

#### EF 3.1. Module d'Authentification et Sécurité (`Connexion étudiant.html`)

| Id | Description |
| :--- | :--- |
| **EF-AUTH-01** | L'utilisateur doit saisir un identifiant et un mot de passe valides (stockés en dur dans le script ou en simulation locale). |
| **EF-AUTH-02** | Après validation des identifiants, un **code 2FA simulé (4 chiffres)** doit être demandé pour compléter la connexion. |
| **EF-AUTH-03** | Les informations de session (`isLoggedIn`, `currentUser`, `studentClass`) doivent être stockées dans le **`localStorage`** du navigateur. |
| **EF-AUTH-04** | En cas de succès, l'utilisateur est redirigé vers `index.html`. En cas d'échec, un message d'erreur est affiché. |
| **EF-AUTH-05** | La page de connexion doit automatiquement effacer la session de `localStorage` lors de son chargement pour forcer une nouvelle authentification. |

#### EF 3.2. Navigation et Structure (`index.html` & Bandeau)

| Id | Description |
| :--- | :--- |
| **EF-NAV-01** | La page `index.html` doit vérifier l'état de la connexion et rediriger l'utilisateur vers `Connexion étudiant.html` s'il n'est pas authentifié. |
| **EF-NAV-02** | Le contenu de la page d'accueil doit être **personnalisé** en affichant le nom et la classe de l'utilisateur récupérés via `localStorage`. |
| **EF-NAV-03** | Un **bandeau de navigation fixe** (`position: fixed`) doit être présent sur toutes les pages principales, permettant d'accéder aux Cours, au Quiz et à la Déconnexion. |
| **EF-NAV-04** | La mise en page doit être **responsive** (adaptée au mobile) avec un menu qui peut s'afficher/se masquer (`toggleMenu` dans `index.html`). |

#### EF 3.3. Module Quiz et Évaluation (`Quiz de révision de 1ère Année.html`)

| Id | Description |
| :--- | :--- |
| **EF-QUIZ-01** | Afficher un ensemble de **20 questions** de Physique-Chimie de niveau Première, sélectionnées aléatoirement à partir du pool de questions. |
| **EF-QUIZ-02** | Permettre aux utilisateurs de sélectionner une réponse unique par question (QCM ou Vrai/Faux). |
| **EF-QUIZ-03** | Après soumission, afficher le score final (`score/total`) ainsi qu'un message d'évaluation (`Excellent`, `Bien joué`, etc.). |
| **EF-QUIZ-04** | Permettre d'**enregistrer le score** dans un **classement personnel local** (`localStorage`), lié à l'utilisateur connecté (`currentUser`). |
| **EF-QUIZ-05** | Le classement doit être affichable et permettre l'effacement de l'historique des scores par l'utilisateur. |
| **EF-QUIZ-06** | **Générer et télécharger un fichier PDF** contenant l'intégralité des questions du quiz et les **bonnes réponses** correspondantes. |

#### EF 3.4. Module Cours et Exercices (`1ere année.html`)

| Id | Description |
| :--- | :--- |
| **EF-COURS-01** | Lister clairement les **ressources pédagogiques** par séries thématiques (ex: Énergie, Dosages, etc.). |
| **EF-COURS-02** | Chaque série doit être un lien (`<a>`) menant à la ressource correspondante (URL simulées dans le code fourni). |

---

### 4. Exigences Techniques et Contraintes (ET)

| Id | Exigence | Contrainte |
| :--- | :--- | :--- |
| **ET-01** | **Langages** | HTML5, CSS3, JavaScript (Vanilla JS). |
| **ET-02** | **Design** | Utiliser un **thème sombre/thématique** (inspiré de la magie/science-fiction, comme le suggèrent les images de fond). |
| **ET-03** | **PDF** | Utilisation de la librairie **jsPDF** (via CDN) pour la fonctionnalité de génération de corrigé. |
| **ET-04** | **Données** | Toutes les données persistantes (session, scores) doivent être gérées exclusivement par l'API **`localStorage`** du navigateur. Aucune technologie côté serveur n'est requise. |
| **ET-05** | **Navigation** | S'assurer que tous les chemins de fichiers entre les pages (`index.html`, `Connexion étudiant.html`, etc.) sont corrects. |
