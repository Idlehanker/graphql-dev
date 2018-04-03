import React, {Component} from 'react' 
import Link from './Link'

import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

/*
class LinkList extends Component {
    render() {
        const linkRoRender = [
            {
                id: '1',
                description: 'Prisma turns your database into a GraphQL API 😎 😎',
                url: 'https://www.prismagraphql.com'
            }, {
                id: '2',
                description: 'The best GraphQL client',
                url: 'https://www.apollographql.com/docs/react/'
            }
        ]
        return (
            <div>{linkRoRender.map(link =>< Link key = {
                    link.id
                }
                link = {
                    link
                } />)}</div>
        )
    }
}

export default LinkList
*/
//================================================================ 1
const FEED_QUERY = gql `
#2
query FeedQuery{
    feed{
        links{
            id
            createdAt
            url
            description
        }
    }
}
`

// 3

//================================================================

class LinkList extends Component {
    render() {
        if (this.props.feedQuery && this.props.feedQuery.loading) {
            return <div>Loading</div>
        }
        if (this.props.feedQuery && this.props.feedQuery.error) {
            return <div>Error</div>
        }

        const linkToRender = this.props.feedQuery.feed.links
        return (
            <div>{linkToRender.map(link => <Link key={link.id} link={link}/>)}</div>
        )
    }
}

export default graphql(FEED_QUERY, {name: 'feedQuery'})(LinkList)