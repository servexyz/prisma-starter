# Prisma Starter

> Run your prisma service as a docker container with the prisma engine and MySQL Database.

![travis test badge](https://travis-ci.org/servexyz/prisma-starter.svg?branch=master)

<!-- TOC -->

- [Prisma Starter](#prisma-starter)
  - [Getting Started](#getting-started)
    - [Where :: Code](#where--code)
    - [Where :: Servers](#where--servers)
    - [Build Scripts](#build-scripts)
      - [Terminal Scripts](#terminal-scripts)
      - [Start Options](#start-options)
      - [Build Options](#build-options)
    - [localhost:4466 vs prisma:4466](#localhost4466-vs-prisma4466)
    - [Gif Demo](#gif-demo)

<!-- /TOC -->

## Getting Started

> yarn install && yarn start

See [Build Scripts](#build-scripts) for options.

---

### Where :: Code

| Directory      | Description                       |
| :------------- | :-------------------------------- |
| src/`service`  | Our service which utilizes Prisma |
| src/`database` | MySQL                             |

### Where :: Servers

| Purpose           | URI   | Port |
| :---------------- | :---- | :--- |
| Prisma Service    | local | 4000 |
| Prisma ORM Engine | local | 4466 |
| Database          | local | 3306 |

---

### Build Scripts

##### Terminal Scripts

> These are scripts which are intended to be run from your terminal

- `start`

  > This is the default entry point to make your development easier. Replace this with "start:docker:db" or "start:docker:all" depending on your preferred development workflow.

  [Jump to Start Options](#start-options)

- `build`

  > This is the default entry point for rebuilding. By default, it's set to "docker:rebuild:all" because start is set to "start:docker:all". Build and start should match. ...is there a cleaner way to do this? 🤔

  [Jump to Build Options](#build-options)

- `clean`

  > This removes all containers' with "prisma" in its name (ie. all prisma_starter containers are destroyed).

- `test`

  > This runs docker-compose all & runs ava in --watch mode. Useful when you want to update your tests, but useful when you want to update your tests. Unfortunately, no docker HMR right now so updating source won't work as expected.

##### Start Options

> Start Options are called by [start -- Terminal Scripts](#terminal-scripts)

- `start:docker:db`

  > This runs Prisma Engine (:4466) and MySQL (:3306) in docker. Meanwhile, it runs your service locally. Use this option for local development.

- `start:docker:all`

  > This runs Prisma Engine (:4466), MySQL (:3306) and your Node service (:4000) in Docker containers

  [Jump back to Terminal Scripts](#terminal-scripts)

##### Build Options

> Build Options are called by [build -- Terminal Scripts](#terminal-scripts)

>

- `docker:rebuild:db`

  > This rebuilds database/docker-compose.db.yml.

- `docker:rebuild:all`

  > This rebuilds docker-compose.all.yml

---

### localhost:4466 vs prisma:4466

You'll notice in [.env](./.env) that process.env.PRISMA_ENDPOINT is set to `http://localhost:4466`. However, in [index.js](./src/service/index.js) the Prisma server is initialized with `http://prisma:4466`

This is necessary when using docker-compose to containerize our prisma service (ie. src/service/...) along with the prisma engine (ORM layer which translates between prisma queries and mysql) & mysql database (persistent storage).

Why?
Short answer is because I'm not using Linux (I use Mac). The type of network you need to map Docker's localhost to your host's (ie. your laptop's) localhost is only available on Linux. I did find a [3rd party solution](https://github.com/mal/docker-for-mac-host-bridge) but decided to not go that route.

If you'd like to explore more, you can peruse my notes on the issue [here](./docs/Docker_Localhost_Access_Issue.pdf)

### Gif Demo

> In case you're wondering, the demo below was captured after running `npm run start:docker:db`.
> However, from the browser, this is functionally identical to running `npm run start:docker:all`

**open localhost:4000 && open localhost:4466**
![prstar_localhost_4000_4466](https://github.com/servexyz/prisma-starter/blob/master/docs/prstar_localhost_4000_4466.gif)

> More gifs and screenshots available here: [demo.md](./docs/demo.md)
