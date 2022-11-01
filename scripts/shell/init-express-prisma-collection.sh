# Generate files
echo "Run: plop --plopfile ./generators/express-prisma-crud-api.js"
plop --plopfile ../db-plop/generators/express-prisma-crud-api.js

# Move files
echo "Run: move generated files into place"
mv ../db-plop/output/express/*Controller.ts ./controllers
mv ../db-plop/output/express/*Repository.ts ./repositories

# Grab routes from plop/output/express/routes.ts and place them in app routes.ts
echo "Run: place routes in routes.ts"
node ../add-crud-routes.js
rm ../db-plop/output/express/routes.ts

# Grab model from plop/output/prisma/model.ts and place them in app schema
echo "Run: place model in prisma/schema.prisma"
node ../add-crud-db-prisma.js
rm ../db-plop/output/prisma/model.ts

npx prisma generate

echo "Done! Head on over to ./prisma/schema.prisma to fill out that model :)"
