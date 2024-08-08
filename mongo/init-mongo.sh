#!/bin/bash
set -e

echo "Waiting for MongoDB to start..."
while ! nc -z mongodb 27017; do
  sleep 1
done

# echo "MongoDB is up - cleaning up existing data..."

# Drop the existing collection if it exists
mongosh --host mongodb --eval "db.getSiblingDB('movie-api-db').dropDatabase()" --quiet

echo "Executing the imports..."

# Import the JSON data files
mongoimport --host mongodb --db movie-api-db --collection movies --type json --file /docker-entrypoint-initdb.d/movies.json --jsonArray

echo "Data import completed."
