echo "Adding routing..."

echo "Run: npm i react-router-dom"
npm i react-router-dom

echo "Run: add-react-router.js"
node ~/Code/db-plop/scripts/react/add-react-router.js

echo "Run: mkdir Nav"
mkdir ./src/components/Nav

echo "Run: generate nav component files"
plop --plopfile ~/Code/db-plop/generators/react/react-router-nav-comp.js

echo "Run: mv files to /src/components/Nav"
mv ~/Code/db-plop/output/react/* ./src/components/Nav