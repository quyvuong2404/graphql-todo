import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLSchema } from "graphql";

const TodoType = new GraphQLObjectType({
  name: "TodoType",
  fields: {
    id: { type: GraphQLInt },
    content: { type: GraphQLString },
    completed: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  }
})