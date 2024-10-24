!#/bin/bash

GIT_COMMIT_HASH=$(git rev-parse --short HEAD)
echo "Git commit hash: ${GIT_COMMIT_HASH}"

IMAGE_NAME="bpn2k4/libe-frontend"
docker build -t "${IMAGE_NAME}:${GIT_COMMIT_HASH}" .
echo "Built image: ${IMAGE_NAME}:${GIT_COMMIT_HASH}"