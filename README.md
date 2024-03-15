# Suivi de recettes

## Présentation du projet

Application de suivi de recettes qui stocke des recettes avec les ingrédients et les instructions de préparation.

## Stack technologique

### Frontend : Next

Utilisation de Next pour son architecture basée sur les composants, permettant la réutilisation des composants d'interface utilisateur.

### Backend : Nest

Choix de Nest pour ses performances, sa sécurité et ses fonctionnalités de concurrence. C'est un excellent choix pour gérer de manière efficace la logique backend complexe.

### Base de données : MongoDB

Utilisation de MongoDB pour sa robustesse, son support pour les requêtes complexes et sa compatibilité avec divers types de données, ce qui est idéal pour stocker des recettes, des ingrédients et des métadonnées associées.

## Fonctionnalités principales

### Ingrédients et instructions de préparation

- Comprend des listes détaillées d'ingrédients avec des quantités et des unités.
- Stocke les instructions de préparation étape par étape.

### Conversion d'unités

Implémente une fonctionnalité pour convertir les unités d'ingrédients (par exemple, grammes en onces).

### Catégorisation des recettes

- Permet de catégoriser les recettes par type (par exemple, steak, gâteau, japonais).
- Système de tags ou de catégories pour une recherche et une organisation plus faciles.

### Comptes utilisateur et authentification

- Met en œuvre l'authentification utilisateur pour sauvegarder les recettes personnalisées et les préférences.
- Utilise des jetons JWT pour une authentification sécurisée et sans état.

### Adaptabilité mobile

L'application sera responsive sur différents appareils, notamment les téléphones mobiles et les tablettes, pour permettre aux utilisateurs d'accéder aux recettes en déplacement.

## Idées supplémentaires

### Suggestions basées sur l'IA

- Intégrer une IA pour suggérer des recettes en fonction des préférences de l'utilisateur, des ingrédients disponibles ou des objectifs nutritionnels.

### Fonctionnalité de recherche

- Mettre en place une fonction de recherche pour trouver des recettes en fonction des ingrédients, des noms ou des catégories.
- Envisager une recherche en texte intégral pour des capacités de recherche plus efficaces.

### Informations nutritionnelles

- Inclure des informations nutritionnelles pour les recettes (calories, macronutriments, etc.).
- Offrir la possibilité d'ajuster les recettes en fonction des besoins alimentaires (par exemple, végétalien, kéto).

### Fonctionnalités sociales

- Permettre aux utilisateurs de noter et de commenter les recettes.
- Mettre en place des fonctionnalités de partage pour les recettes sur les médias sociaux.

### Internationalisation

- Prendre en charge plusieurs langues pour répondre à un public mondial.
- Tenir compte des variations culturelles dans les termes et unités de cuisine.

### Accès hors ligne

Des workers de service pour un accès hors ligne aux recettes qui ont été chargées précédemment.
