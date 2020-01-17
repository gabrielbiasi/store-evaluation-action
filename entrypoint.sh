#!/bin/sh -l

cp /store.js /github/workspace
cp /package-lock.json /github/workspace
cp /package.json /github/workspace

npm install
node store.js $1 $2 $3

if [ $? != 0 ]; then
  echo "Execution error"
  exit 1
fi
