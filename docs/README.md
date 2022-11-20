# Code Generator Docs

## Basic Instructions

- All apps are store in ~Code/apps/ currently
- Make a dir to house both your BE and FE
- FE will always be called client and BE called server
- cd into app dir
- Run: `node ~/Code/db-plop/scripts/runJobFromFile.js <job_name> <app_dir> <template_num>`
  - job in ~/Code/db-plop/jobs to run
  - app dir in ~/Code/apps
  - number for template to build from

## Basic Setup

- Write your base schema
- Choose a BE (currently only node is supported)
- Run relevant jobs to setup app basics: auth, collection endpoints, db repositories (currently only prisma is supported)
- Choose a FE Template
- Run relevant jobs to setup app basics: auth, nav, collection crud ops

## React

### Auth

- Once you get a certain stage as you're building your app you may need authentication for users.
- When you do here's the job to run and you'll see it mentioned below: `react-auth-setup.js job in db-plop/jobs`
- What it does:
  - Generate files for the auth context and provider
  - mkdir for auth context and provider
  - move auth context and provider into auth dir
  - Generate components for login, logout, register, etc
  - move component into respective directories in pages
  - add imports and links to nav component
  - add imports and child routes for auth page components in main.tsx
  - add imports and vars for auth page components in App.tsx
  - add auth provider tag to wrap app in main.tsx
  - Run prettier

### Templates

1. Nav sidebar with top banner; pages in main content area

_Jobs reside in /jobs dir_

### 1. react-vite-setup

- Updates main.tsx/css and App.tsx/css
  - Includes bootstrap, react-bootstrap, bootstrap icons imports
- Adds the following dirs to src: pages, components, services, utils, interfaces
- Installs react-bootstrap and bootstrap, and icons
- Run prettier

### 2. react-add-react-router

- npm i react-router-dom
- Add imports and code to App.tsx (createRouterBrowser, etc)
- Add imports and code to main.tsx
- Run prettier

### 3a. react-add-nav-page

- generate a new react component for the page
- mkdir for the component tsx and css
- move page to the component dir
- add corresponding link to the nav component
- update main.tsx with the child router and component import
- Run prettier

### 3b. react-add-nav-collection

i. Add auth if you haven't already if your collection needs to be directly related to users.

ii. react-add-nav-collection

- mkdir for the component in pages dir
- generate files for the collection
- move files into the to the component dir in pages
- add corresponding link to the nav component
- add child route to router with corresponding import
- add link to navbar
- add resource interface
- generate and add CRUD necessities for component (form, crud api functions)
- Run prettier
