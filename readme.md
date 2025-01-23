git checkout main
npm run build
npm run deploy
# ne va pas accepter de changer de branche car on a modifié main sans push
git checkout gh-pages
cp -r build/* .  # Pour React (build) ou dist/* pour Vue (dist)
git add .
git commit -m "message"
git push


