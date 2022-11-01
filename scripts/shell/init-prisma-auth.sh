# Install auth dependencies
echo "Run: npm install(s)"
npm install jsonwebtoken bcryptjs cookie-parser
npm i --save-dev @types/jsonwebtoken @types/bcryptjs @types/cookie-parser

# Add models to Prisma schema
echo "Run: Add models to Prisma schema..."
node ../add-auth-db-prisma.js

# Update db
echo "Run: npx prisma db push"
npx prisma db push

# Refresh prisma client
echo "Run: npx prisma generate"
npx prisma generate

# Updates in index.ts
echo "Run: update index.ts"
node ../add-server-auth.js
node ../add-server-routing.js

# Add routes
echo "Run: update route.ts with auth api routes"
node ../add-auth-routes.js

# Add environment.d.ts for ENV vars or add TOKEN_SECRET to it
echo "Run: update route.ts with auth api routes"
touch environment.d.ts
node ../add-auth-environment-file.js

# Create TOKEN_SECRET
echo "Run: Add TOKEN_SECRET to .env"
node ../add-auth-secret.js

# Constants
echo "Run: add-auth-constants"
node ../add-auth-constants.js

# Generate files
echo "Run: plop --plopfile ./generators/express-auth-prisma.js"
plop --plopfile ../db-plop/generators/express-auth-prisma.js

# Move files
echo "Run: move generated files into place"
mv ../db-plop/output/express/AuthController.ts ./controllers
mv ../db-plop/output/express/AuthService.ts ./services
mv ../db-plop/output/express/EmailService.ts ./services
mv ../db-plop/output/express/TokenPayload.ts ./interfaces
mv ../db-plop/output/express/UserRepository.ts ./repositories
