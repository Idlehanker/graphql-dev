// import { Prisma } from 'prisma-binding';
const {Prisma}  = require('prisma-binding')
const {GraphQLServer} = require('graphql-yoga')


const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const AuthPayload = require('./resolvers/AuthPayload')
const Subscription = require('./resolvers/Subscription')
const Feed  = require('./resolvers/Feed')

// 1 const typeDefs = ` ` 2
// let links = [
//     {
//         id: "link-0",
//         url: 'www.howtographql.com',
//         description: 'Fullstack tutorial for GraphQL'
//     }
// ]
// 1
// let idCount = links.length
/*
const resolvers = {
    Query: {
        // info: ()=> null
        info: () => 'This is the API of a Graphql-dmx Clone',
        feed: () => (root, args, context, info) => {
            return context.db.query.links({}, info)
        },
    },

    Mutation: {

        // 2
        post: (root, args, context, info) => {
            return context.db.mutation.createLink({
                data: {
                    url: args.url,
                    description: args.description,
                },
            }, info)
            // const link = {
            //     id: 'link-${idCount++}',
            //     url: args.url,
            //     description: args.description,
            // }

            // links.push(link)
            // return link
        },
        
    },
    // 3 Link: {     id: (root) => root.id,     url: (root) => root.url,
    // description: (root) => root.description, }
}
*/

const resolvers = {
    Query,
    Mutation,
    AuthPayload,
    Subscription,
    Feed,
}

// 3
// const server = new GraphQLServer({typeDefs: './src/schema.graphql', resolvers})
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: req => ({
        ...req,
        db: new Prisma({
            typeDefs: './src/generated/prisma.graphql',
            endpoint: 'http://localhost:4466/graphql-dmx/dev',
            secret: 'mysecret123',
            debug: true,
        }),
    }),
})


server.start(() => console.log('Server is running on  http://localhost:4000'))
