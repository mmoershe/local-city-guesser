#!/bin/bash

echo "Pulling from Git Repository..."

output=$(git pull 2>&1)
status=$?

# Check the exit status and output of git pull
if [ $status -ne 0 ]; then
    echo "Error: Failed to pull from the repository."
    echo "$output"
    exit 1
fi


if echo "$output" | grep -q "Already up to date."; then
    echo "The repository is already up to date."
    exit 1
fi


echo "$output"
echo
echo "Successfully pulled changes from the repository."

sh rebuild.sh
