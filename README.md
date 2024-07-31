# PROTO 

This is a prototype repo for team Bosque (name can potentially change).

## Getting started

```bash
docker compose up --build
```

or if already built

```bash
docker compose up  
```

## Getting latest database changes

```bash
docker compose exec -it appserver yarn knex migrate:latest
```

## Installing new packages

```bash
docker compose exec -it appserver yarn install
```

 
## ENV Vars

Auth0: Creating scafolding but not in use

```bash
AUTH0_SECRET= 
AUTH0_CLIENT_ID= 
AUTH0_ISSUER_BASE_URL= 
AUTH0_CLIENT_SECRET= 
AUTH0_BASE_URL='http://localhost:3000'
```

Github: Not currently in use

```bash
GITHUB_TOKEN=
```

OpenAI: Needed to for any AI interaciton

```bash
OPENAI_API_KEY= 
ASSISTANT_ID= 
```