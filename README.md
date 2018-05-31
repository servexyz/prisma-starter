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

#### Environment Variables

**Database**
`${env: MY_ENV_VARIABLE}`

**Service**

1.  Import in header
    `import { MY_ENV_VARIABLE } from 'babel-dotenv'

2.  Use anywhere (_without process.env_)
    `MY_ENV_VARIABLE`
