echo "Run: running npm create vite@latest $1"
npm create vite@latest $1 -- --template react-ts

cd ~/Code/db-javascript/db-react/$1/src

echo "Run: creating directories..."
mkdir pages
mkdir components
mkdir services
mkdir utils

echo "Run: generate App.tsx and main.tsx"
plop --plopfile ~/Code/db-plop/generators/react/react-vite-setup.js

echo "Run: mv files to $1"
mv ~/Code/db-plop/output/react/* ~/Code/db-javascript/db-react/$1/src

cd ~/Code/db-javascript/db-react/$1
