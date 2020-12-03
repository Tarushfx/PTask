import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useSubscription, gql} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';

const link = new WebSocketLink({
    uri: `ws://localhost:4000/graphql`,
    options: {
        reconnect: true,
    },
})


const client = new ApolloClient({
    link,
    uri:'http://localhost:4000/',
    cache: new InMemoryCache(),
});

const GET_MESSAGES = gql`
subscription {
    messages{id user content}
}`;

const POST_MESSAGES =`
mutation {
    postMessage(user: "Atishek", content: "Hello there" )
}`;

const Messages = ({ user }) => {
    const {data} = useSubscription(GET_MESSAGES);

    if(!data){
        return null;
    }

    return JSON.stringify(data)
}

const Chat = (props) => {
    return (
        <div><Messages user = "Atishek"/></div>
    );
}

export default () => (
    <ApolloProvider client={client}>
        <Chat />
    </ApolloProvider>
);