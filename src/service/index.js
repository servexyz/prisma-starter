import { GraphQLServer } from "graphql-yoga";
import { PRISMA_ENDPOINT } from "babel-dotenv";
import { Prisma } from "prisma-binding";

//TODO: Create resolvers directory with lazy loading index / spread
const resolvers = {
  Query: {
    allFoos: (parent, args, ctx, info) => {
      const where = args.name
        ? {
            name_contains: args.name
          }
        : {};
      return ctx.db.query.foos({ where }, info);
    }
  }
};

//TODO: Replace all endpoints with env variables
const server = new GraphQLServer({
  typeDefs: "service/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "service/generated/prisma.graphql", // the auto-generated GraphQL schema of the Prisma API
      endpoint: "http://prisma:4466", // the endpoint of the Prisma API
      debug: true // log all GraphQL queries & mutations sent to the Prisma API
      // secret: process.env.PRISMA_SECRET // only needed if specified in `database/prisma.yml`
    })
  })
});

server.start(() =>
  console.log(`Prisma-starter running => http://localhost:4000`)
);
