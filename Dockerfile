FROM node:12.14

COPY entrypoint.sh /entrypoint.sh
COPY evaluator.js /evaluator.js
COPY package-lock.json /package-lock.json
COPY package.json /package.json

ENTRYPOINT ["/entrypoint.sh"]
