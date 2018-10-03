module.exports = {
        typeDefs: /* GraphQL */ `type AggregateFoo {
  count: Int!
}

type AggregateSampleJson {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Foo {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  secretFoo: String
}

type FooConnection {
  pageInfo: PageInfo!
  edges: [FooEdge]!
  aggregate: AggregateFoo!
}

input FooCreateInput {
  name: String
  secretFoo: String
}

type FooEdge {
  node: Foo!
  cursor: String!
}

enum FooOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  secretFoo_ASC
  secretFoo_DESC
}

type FooPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  secretFoo: String
}

type FooSubscriptionPayload {
  mutation: MutationType!
  node: Foo
  updatedFields: [String!]
  previousValues: FooPreviousValues
}

input FooSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FooWhereInput
  AND: [FooSubscriptionWhereInput!]
  OR: [FooSubscriptionWhereInput!]
  NOT: [FooSubscriptionWhereInput!]
}

input FooUpdateInput {
  name: String
  secretFoo: String
}

input FooWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  secretFoo: String
  secretFoo_not: String
  secretFoo_in: [String!]
  secretFoo_not_in: [String!]
  secretFoo_lt: String
  secretFoo_lte: String
  secretFoo_gt: String
  secretFoo_gte: String
  secretFoo_contains: String
  secretFoo_not_contains: String
  secretFoo_starts_with: String
  secretFoo_not_starts_with: String
  secretFoo_ends_with: String
  secretFoo_not_ends_with: String
  AND: [FooWhereInput!]
  OR: [FooWhereInput!]
  NOT: [FooWhereInput!]
}

input FooWhereUniqueInput {
  id: ID
}

scalar Json

scalar Long

type Mutation {
  createFoo(data: FooCreateInput!): Foo!
  updateFoo(data: FooUpdateInput!, where: FooWhereUniqueInput!): Foo
  updateManyFoos(data: FooUpdateInput!, where: FooWhereInput): BatchPayload!
  upsertFoo(where: FooWhereUniqueInput!, create: FooCreateInput!, update: FooUpdateInput!): Foo!
  deleteFoo(where: FooWhereUniqueInput!): Foo
  deleteManyFoos(where: FooWhereInput): BatchPayload!
  createSampleJson(data: SampleJsonCreateInput!): SampleJson!
  updateSampleJson(data: SampleJsonUpdateInput!, where: SampleJsonWhereUniqueInput!): SampleJson
  updateManySampleJsons(data: SampleJsonUpdateInput!, where: SampleJsonWhereInput): BatchPayload!
  upsertSampleJson(where: SampleJsonWhereUniqueInput!, create: SampleJsonCreateInput!, update: SampleJsonUpdateInput!): SampleJson!
  deleteSampleJson(where: SampleJsonWhereUniqueInput!): SampleJson
  deleteManySampleJsons(where: SampleJsonWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  foo(where: FooWhereUniqueInput!): Foo
  foos(where: FooWhereInput, orderBy: FooOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Foo]!
  foosConnection(where: FooWhereInput, orderBy: FooOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FooConnection!
  sampleJson(where: SampleJsonWhereUniqueInput!): SampleJson
  sampleJsons(where: SampleJsonWhereInput, orderBy: SampleJsonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SampleJson]!
  sampleJsonsConnection(where: SampleJsonWhereInput, orderBy: SampleJsonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SampleJsonConnection!
  node(id: ID!): Node
}

type SampleJson {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  json: Json
  jsons: [Json!]!
}

type SampleJsonConnection {
  pageInfo: PageInfo!
  edges: [SampleJsonEdge]!
  aggregate: AggregateSampleJson!
}

input SampleJsonCreateInput {
  json: Json
  jsons: SampleJsonCreatejsonsInput
}

input SampleJsonCreatejsonsInput {
  set: [Json!]
}

type SampleJsonEdge {
  node: SampleJson!
  cursor: String!
}

enum SampleJsonOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  json_ASC
  json_DESC
}

type SampleJsonPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  json: Json
  jsons: [Json!]!
}

type SampleJsonSubscriptionPayload {
  mutation: MutationType!
  node: SampleJson
  updatedFields: [String!]
  previousValues: SampleJsonPreviousValues
}

input SampleJsonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SampleJsonWhereInput
  AND: [SampleJsonSubscriptionWhereInput!]
  OR: [SampleJsonSubscriptionWhereInput!]
  NOT: [SampleJsonSubscriptionWhereInput!]
}

input SampleJsonUpdateInput {
  json: Json
  jsons: SampleJsonUpdatejsonsInput
}

input SampleJsonUpdatejsonsInput {
  set: [Json!]
}

input SampleJsonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SampleJsonWhereInput!]
  OR: [SampleJsonWhereInput!]
  NOT: [SampleJsonWhereInput!]
}

input SampleJsonWhereUniqueInput {
  id: ID
}

type Subscription {
  foo(where: FooSubscriptionWhereInput): FooSubscriptionPayload
  sampleJson(where: SampleJsonSubscriptionWhereInput): SampleJsonSubscriptionPayload
}
`
      }
    