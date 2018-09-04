import { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Main from "./Main";
import Header from "./Header";

const todosQuery = gql`
  query {
    todos {
      id
      content
      completed
      createdAt
      updatedAt
    }
  }
`;

export default class App extends Component {
  render() {
    return (
      <Query query={todosQuery}>
        {result => {
          const { loading, error, data } = result;
          if(loading) return 'Loading...';
          return (
            <div>
              <Header />
              <Main data={data.todos} />
            </div>
          );
        }}
      </Query>
    );
  }
}