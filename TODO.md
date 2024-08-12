
- une utilisation des **types générés** pour l'api de la gateway
- une gestion du token et/ou des credentials dans le vscode\[.workspace].**secrets**
- un groupe de **treeviews** pour chaque ressources
- une **configuration** pour l'acces à la gateway
- une **tache** de rafraichissement par treeview
- une **ecoute** de la config pour lancer la teche de refresh
- une ouverture des retours des reponses d'api (si 200) dans des **editeurs JSON**
- un **task provider** allowing to run Naos jobs:
  - https://code.visualstudio.com/api/extension-guides/task-provider

- fonctions de filtrage des views
- creation de **filtres** et **stockage** (où?)

- customisation du display (docker-ext like)

- document build steps :
  - npm install -g @vscode/vsce
  - vsce package

- UX politic:
  - commands args:
    - if explicitly passed : use
    - elif something selected : use
    - else : ask user
  - create/update:
    - if ID provided : update or die
    - else: create
  - use contributes...enablement rules.

WARNING: No need for TreeView? (as TreeItem have a "command" property)