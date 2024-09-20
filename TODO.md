
- jsonValidation for Run, Task and TaskMessage
- envoi de POST PATCH selon selection / contenu de l'editeur?
- custom editor basé sur JSON? (ou yaml?)
- Utiliser une [output channel](https://code.visualstudio.com/api/references/vscode-api#OutputChannel)
  - loglevel as configuration
- [snippets](https://code.visualstudio.com/api/language-extensions/snippet-guide) ! 
- editor command : "filter edit fields"
  - ctrl + S
  - filter edit fields
  - real modifs
  - POST / PATCH
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





,
    "jsonValidation": [
      {
        "fileMatch": "naos:",
        "url": "url"
      }
    ]

    