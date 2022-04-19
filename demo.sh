#!/usr/bin/env bash

GH_TOKEN=""

# chech if variable is set
if [ -z "${GH_TOKEN}" ]; then
  echo "GH_TOKEN is not set"
else
  echo "GH_TOKEN is set"
fi