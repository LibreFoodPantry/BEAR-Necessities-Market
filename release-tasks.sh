#!/bin/bash

# Apply database migrations
echo "Apply database migrations"
flask db upgrade

# Build the production react app
echo "Create react production build"
ls
pwd
cd frontend
npm i
npm run build
