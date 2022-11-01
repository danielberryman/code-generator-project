echo "Run: npm install(s)"
npm install @prisma/client
npm install prisma --save-dev

echo "Run: npx prisma init --datasource-provider sqlite"
npx prisma init --datasource-provider sqlite

echo "Run: npx prisma db push"
npx prisma db push

# Refresh node modules
echo "Run: npx prisma generate"
npx prisma generate

echo "Run: add-server-db-prisma"
node ../add-server-db-prisma.js
