# Prisma Starter

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

#### localhost:4466 vs prisma:4466

You'll notice in [.env](./.env) that process.env.PRISMA_ENDPOINT is set to `http://localhost:4466`. However, in [index.js](./src/service/index.js) the Prisma server is initialized with `http://prisma:4466`

This is necessary when using docker-compose to containerize our prisma service (ie. src/service/...) along with the prisma engine (ORM layer which translates between prisma queries and mysql) & mysql database (persistent storage).

Why?
Short answer is because I'm not using Linux (I use Mac). The type of network you need to map Docker's localhost to your host's (ie. your laptop's) localhost is only available on Linux. I did find a [3rd party solution](https://github.com/mal/docker-for-mac-host-bridge) but decided to not go that route. I haven't tested this, so it could work. Just wanted to do it the vanilla way if possible (fortunately it was!)

If you'd like to explore more, you can peruse my notes on the issue [here](./docs/Docker_Localhost_Access_Issue.pdf)
