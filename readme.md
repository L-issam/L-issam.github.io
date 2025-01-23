### git checkout main
### npm run build
### npm run deploy
### git add .
### git commit -m "message"
### git push origin main

### git checkout gh-pages
### cp -r build/* .  # Pour React (build) ou dist/* pour Vue (dist)
### git add .
### git commit -m "message"
### git push

### pour résoudre les conflits si on modifie le repo distant directement sur place:

## Identifier les fichiers en conflit :
### git status

## Ouvrir et résoudre les conflits :
Choisis la version correcte ou combine les deux de manière appropriée.
Supprime les marqueurs <<<<<<<, =======, >>>>>>> après modification.

### git add <fichier_conflit>
Si plusieurs fichiers sont concernés, tu peux tous les ajouter d'un coup :
### git add .

## Continuer le rebase :
### git rebase --continue
Si d'autres conflits apparaissent, répète le processus jusqu'à la fin du rebase.
Si Git te demande de modifier un message de commit, modifie-le ou laisse-le tel quel et enregistre.

### git status

Si tout est OK, termine en poussant les modifications vers le dépôt distant :
### git push --force-with-lease


