# Use the official MongoDB image from the Docker Hub
FROM mongo:latest

# Install netcat for checking MongoDB readiness
RUN apt-get update && apt-get install -y netcat

# Create a directory in the container to hold initialization scripts
RUN mkdir -p /docker-entrypoint-initdb.d

# Copy the JSON data file and the initialization script into the container
COPY initdb/ /docker-entrypoint-initdb.d/
COPY init-mongo.sh /docker-entrypoint-initdb.d/init-mongo.sh

# Make the initialization script executable
RUN chmod +x /docker-entrypoint-initdb.d/init-mongo.sh
