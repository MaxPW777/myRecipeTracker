FROM node:21-alpine
LABEL authors="maxpi"

WORKDIR /src

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

CMD ["npm","run","start:dev"]
