function newLinkSubscribe(parent, args, context, info){
    return context.db.subscription.link(
        {},
        info,
    )
}

const newLink = {
    subscribe: newLinkSubscribe
}

function newVoteSubscribe(parent, args, context, info){
    return context.db.subscribe.vote(
        {},
        info,
    )
}

const newVote = {
    subscribe: newVoteSubscribe
}

module.exports = {
    newLink,
    newVote,
}