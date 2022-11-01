# Install auth dependencies
echo "Run: npm install(s)"
npm install jsonwebtoken bcryptjs cookie-parser
npm i --save-dev @types/jsonwebtoken @types/bcryptjs @types/cookie-parser

# Add models to Prisma schema
echo "Run: Add models to Prisma schema..."
node ~/Code/db-plop/scripts/node/add-auth-db-prisma.js

# Update db
echo "Run: npx prisma db push"
npx prisma db push

# Updates in index.ts
echo "Run: update index.ts"
node ~/Code/db-plop/scripts/node/add-server-auth.js
node ~/Code/db-plop/scripts/node/add-server-routing.js

# Add routes
echo "Run: update route.ts with auth api routes"
node ~/Code/db-plop/scripts/node/add-auth-routes.js

# Add environment.d.ts for ENV vars or add TOKEN_SECRET to it
echo "Run: update route.ts with auth api routes"
touch environment.d.ts
node ~/Code/db-plop/scripts/node/add-auth-environment-file.js

# Create TOKEN_SECRET
echo "Run: Add TOKEN_SECRET to .env"
node ~/Code/db-plop/scripts/node/add-auth-secret.js

# Constants
echo "Run: add-auth-constants"
node ~/Code/db-plop/scripts/node/add-auth-constants.js

# Generate files
echo "Run: plop --plopfile ./generators/express/express-auth-prisma.js"
plop --plopfile ../db-plop/generators/express/express-auth-prisma.js

# Move files
echo "Run: move generated files into place"
mv ~/Code/db-plop/output/express/AuthController.ts ./controllers
mv ~/Code/db-plop/output/express/AuthService.ts ./services
mv ~/Code/db-plop/output/express/EmailService.ts ./services
mv ~/Code/db-plop/output/express/TokenPayload.ts ./interfaces
mv ~/Code/db-plop/output/express/UserRepository.ts ./repositories

# Refresh prisma client
echo "Run: npx prisma generate"
npx prisma generate
