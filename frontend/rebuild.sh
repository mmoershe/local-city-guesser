#!/bin/bash

echo "Rebuilding Container:"

echo "Stopping Container..."
docker container stop bgl-guesser-container

echo "Deleting Container..."
docker container rm bgl-guesser-container

echo "Deleting unused Images..."
docker system prune -af

echo "Building Image..."
docker build -t bgl-guesser .

echo "Starting Container..."
docker run -d --name bgl-guesser-container -p 2888:3000 bgl-guesser

echo "Done."
