# Prisma Starter

> Run your prisma service as a docker container with the prisma engine and MySQL Database.

![travis test badge](https://travis-ci.org/servexyz/prisma-starter.svg?branch=master)

<!-- TOC -->

- [Prisma Starter](#prisma-starter)
  - [Getting Started](#getting-started)
    - [Where :: Code](#where--code)
    - [Where :: Servers](#where--servers)
    - [Build Scripts](#build-scripts)
    - [Gif Demo](#gif-demo)
      - [localhost:4466 vs prisma:4466](#localhost4466-vs-prisma4466)

<!-- /TOC -->

## Getting Started

- **Install**
  > cd src/ && yarn install
- **Start**
  > yarn start

See [Build Scripts](#build-scripts) for options.

---

### Where :: Code

| Directory      | Description                       |
| :------------- | :-------------------------------- |
| src/`service`  | Our service which utilizes Prisma |
| src/`database` | MySQL                             |

### Where :: Servers

| Purpose     | URI   | Port |
| :---------- | :---- | :--- |
| Our Service | local | 4000 |
| Prisma      | local | 4466 |
| Database    | local | 3306 |

---

### Build Scripts

**Terminal Scripts**

> These are scripts which are intended to be run from your terminal

- `start`

  > This is the default entry point to make your development easier. Replace this with "start:docker:db" or "start:docker:all" depending on your preferred development workflow.

- `build`

  > This is the default entry point for rebuilding. By default, it's set to "docker:rebuild:all" because start is set to "start:docker:all". Build and start should match. ...is there a cleaner way to do this? 🤔

- `dev`

  > This script will either be called when "start:docker:db" is called or you can call it manually. Not sure if there's any problem with it being set to dev:liveReload regardless of environmemnt... Hrm...

- `playground`
  > NPM script to open up GraphQL Playground

> **Start Options**

> Primary scripts should be called by "npm start" script

- `start:docker:db`

  > This runs Prisma Engine (:4466) and MySQL (:3306) in docker. Meanwhile, it runs your service locally. Use this option for local development.

- `start:docker:all`

  > This runs Prisma Engine (:4466), MySQL (:3306) and your Node service (:4000) in Docker containers

**Build Options**

> Helper scripts should be called by Primary scripts

- `docker:rebuild:db`

  > This rebuilds database/docker-compose.db.yml.

- `docker:rebuild:all`

  > This rebuilds docker-compose.all.yml

**Helper Scripts -- Ignore These**

- `start:docker:entrypoint`

  > This is what's called by the docker-compose.all.yml

- `start:vanilla`

  > This runs babel-node against your service's index file _without_ livereload enabled.

* `dev:liveReload`

  > Runs nodemon. Watches changes and reloads your server. Intended for use with start:docker:db

* `docker:compose:db`

  > Docker-compose script for _only_ Prisma Engine & MySQL

* `docker:compose:all`
  > Docker-compose script for Prisma Engine, MySQL & your Node service.

### Gif Demo

> In case you're wondering, the demo below was captured after running `npm run start:docker:db`.
> However, from the browser, this is functionally identical to running `npm run start:docker:all`

**open localhost:4000 && open localhost:4466**
![prstar_localhost_4000_4466](https://github.com/servexyz/prisma-starter/blob/master/docs/prstar_localhost_4000_4466.gif)

> More gifs and screenshots available here: [demo.md](./docs/demo.md)

---

#### localhost:4466 vs prisma:4466

You'll notice in [.env](./.env) that process.env.PRISMA_ENDPOINT is set to `http://localhost:4466`. However, in [index.js](./src/service/index.js) the Prisma server is initialized with `http://prisma:4466`

This is necessary when using docker-compose to containerize our prisma service (ie. src/service/...) along with the prisma engine (ORM layer which translates between prisma queries and mysql) & mysql database (persistent storage).

Why?
Short answer is because I'm not using Linux (I use Mac). The type of network you need to map Docker's localhost to your host's (ie. your laptop's) localhost is only available on Linux. I did find a [3rd party solution](https://github.com/mal/docker-for-mac-host-bridge) but decided to not go that route.

If you'd like to explore more, you can peruse my notes on the issue [here](./docs/Docker_Localhost_Access_Issue.pdf)
