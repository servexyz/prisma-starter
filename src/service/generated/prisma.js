const { makePrismaBindingClass } = require('prisma-binding')


/**
 * Type Defs
*/

const typeDefs = `type AggregateFoo {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Foo implements Node {
  id: ID!
  name: String
  secretFoo: String
}

"""A connection to a list of items."""
type FooConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FooEdge]!
  aggregate: AggregateFoo!
}

input FooCreateInput {
  name: String
  secretFoo: String
}

"""An edge in a connection."""
type FooEdge {
  """The item at the end of the edge."""
  node: Foo!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FooOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  secretFoo_ASC
  secretFoo_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FooPreviousValues {
  id: ID!
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
  """Logical AND on all given filters."""
  AND: [FooSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FooSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FooSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FooWhereInput
}

input FooUpdateInput {
  name: String
  secretFoo: String
}

input FooWhereInput {
  """Logical AND on all given filters."""
  AND: [FooWhereInput!]

  """Logical OR on all given filters."""
  OR: [FooWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FooWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  secretFoo: String

  """All values that are not equal to given value."""
  secretFoo_not: String

  """All values that are contained in given list."""
  secretFoo_in: [String!]

  """All values that are not contained in given list."""
  secretFoo_not_in: [String!]

  """All values less than the given value."""
  secretFoo_lt: String

  """All values less than or equal the given value."""
  secretFoo_lte: String

  """All values greater than the given value."""
  secretFoo_gt: String

  """All values greater than or equal the given value."""
  secretFoo_gte: String

  """All values containing the given string."""
  secretFoo_contains: String

  """All values not containing the given string."""
  secretFoo_not_contains: String

  """All values starting with the given string."""
  secretFoo_starts_with: String

  """All values not starting with the given string."""
  secretFoo_not_starts_with: String

  """All values ending with the given string."""
  secretFoo_ends_with: String

  """All values not ending with the given string."""
  secretFoo_not_ends_with: String
}

input FooWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createFoo(data: FooCreateInput!): Foo!
  updateFoo(data: FooUpdateInput!, where: FooWhereUniqueInput!): Foo
  deleteFoo(where: FooWhereUniqueInput!): Foo
  upsertFoo(where: FooWhereUniqueInput!, create: FooCreateInput!, update: FooUpdateInput!): Foo!
  updateManyFoos(data: FooUpdateInput!, where: FooWhereInput): BatchPayload!
  deleteManyFoos(where: FooWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  foos(where: FooWhereInput, orderBy: FooOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Foo]!
  foo(where: FooWhereUniqueInput!): Foo
  foosConnection(where: FooWhereInput, orderBy: FooOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FooConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  foo(where: FooSubscriptionWhereInput): FooSubscriptionPayload
}
`

const Prisma = makePrismaBindingClass({ typeDefs })
module.exports = { Prisma }
