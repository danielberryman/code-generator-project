echo "Run: mkdir $1"
mkdir $1
cd $1

echo "Run: npm init"
npm init

echo "Run: navgiate back to root Code dir"
cd ../

echo "Run: plop --plopfile ~/Code/db-plop/generators/express/express-server.js"
plop --plopfile ~/Code/db-plop/generators/express/express-server.js

echo "Run: mv files to $1"
mv ~/Code/db-plop/output/express/* ~/Code/db-javascript/db-node/$1

echo "Run: cd $1"
cd $1

echo "Run: npm install(s)"
npm i express body-parser path
npm i typescript nodemon @types/express --save-dev

echo "Run: npx tsc --init"
npx tsc --init

echo "Run: add-tsc-outdir.js"
pwd
node ~/Code/db-plop/scripts/node/add-tsc-outdir.js

echo "Run: add-npm-scripts.js"
node ~/Code/db-plop/scripts/node/add-npm-scripts.js

echo "Run: creating directories..."
mkdir controllers
mkdir repositories
mkdir services
mkdir interfaces
touch constants.ts

code .
