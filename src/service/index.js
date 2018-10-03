require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import { Prisma, forwardTo } from "prisma-binding";
import path from "path";

const resolvers = {
  Query: {
    allFoos: (parent, args, ctx, info) => {
      const where = args.name
        ? {
            name_contains: args.name
          }
        : {};
      return ctx.db.query.foos({ where }, info);
    },
    sampleJsons: forwardTo("db")
  },
  Mutation: {
    createSampleJson: forwardTo("db")
  }
};

let typeDefs = path.join(__dirname, "schema.graphql");
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "src/service/generated/prisma.graphql", // the auto-generated GraphQL schema of the Prisma API
      // endpoint: "http://prisma:4466", // the endpoint of the Prisma API
      endpoint: process.env.PRISMA_ENDPOINT,
      debug: true // log all GraphQL queries & mutations sent to the Prisma API
      // secret: process.env.PRISMA_SECRET // only needed if specified in `database/prisma.yml`
    })
  })
});

server.start(() =>
  console.log(`Prisma-starter running => http://localhost:4000`)
);
