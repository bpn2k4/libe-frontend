#!/bin/bash

GIT_COMMIT_HASH=$(git rev-parse --short HEAD)
echo "Git commit hash: ${GIT_COMMIT_HASH}"

IMAGE_NAME="bpn2k4/libe-frontend"
docker build -t "${IMAGE_NAME}:${GIT_COMMIT_HASH}" .
echo "Built image: ${IMAGE_NAME}:${GIT_COMMIT_HASH}"

echo "To push image run: docker push ${IMAGE_NAME}:${GIT_COMMIT_HASH}"
echo "To start container run: docker run -d -p 8080:80 ${IMAGE_NAME}:${GIT_COMMIT_HASH} --name libe"
echo "To stop container run: docker stop libe"
echo "To remove container run: docker rm libe"
echo "To remove image run: docker rmi ${IMAGE_NAME}:${GIT_COMMIT_HASH}"