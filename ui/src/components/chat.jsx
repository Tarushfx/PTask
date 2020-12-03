import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useSubscription,
  gql,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import MessageArea from "./messageArea.jsx";

const link = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  link,
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const GET_MESSAGES = gql`
  subscription {
    messages { _id user content email date}
  }
`;

// const POST_MESSAGES = `
// mutation {
//     postMessage( )
// }`;

export const Messages = () => {
  const { data } = useSubscription(GET_MESSAGES);

  if (!data) {
    return null;
  }

  return data;
};

// const Chat = (props) => {
//   return (
//     <div>
//       <Messages user="Atishek" />
//     </div>
//   );
// };

export const Chat = (props) => (
  <ApolloProvider client={client}>
    <MessageArea user={props.user} />
  </ApolloProvider>
);
