const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");

//TODO: Create resolvers directory with lazy loading index / spread
const resolvers = {
  Query: {
    supFoo: async (parent, { name }, ctx, info) => {
      console.log(`\n name value: ${name}`);
      return ctx.db.query.foo({ where: { name } }, info);
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
      endpoint: "http://localhost:4000", // the endpoint of the Prisma API
      debug: true // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    })
  })
});

server.start(() => console.log("Server is running on http://localhost:4000"));
