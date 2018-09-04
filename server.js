import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    helllo: String
  }
`;

const resolvers = {
  Query: {
    helllo: () => 'world'
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {console.log('server ready at ', url)});