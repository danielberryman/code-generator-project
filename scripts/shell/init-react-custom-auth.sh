echo "Adding custom auth..."

echo "Run: mkdir Auth"
mkdir ./src/components/Auth

echo "Run: generate nav component files"
plop --plopfile ~/Code/db-plop/generators/react/react-custom-auth.js

echo "Run: mv files to /src/components/Nav"
mv ~/Code/db-plop/output/react/* ./src/components/Auth

echo "Run: add-custom-auth.js"
node ~/Code/db-plop/scripts/react/add-custom-auth.js
