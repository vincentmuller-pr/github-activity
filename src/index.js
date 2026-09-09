const {fetch_user_activity, fetch_push_commits} = require("./github.js")
const username = process.argv[2]

async function main() {
    if (username === undefined) {console.log("Error: username not provided."); return}
    try {
        const gevent_list = await fetch_user_activity(username)
        for (gevent of gevent_list) {
            switch(gevent.type) {
                case "CommitCommentEvent":
                    console.log(`- commit comment ${gevent.payload.action} in ${gevent.repo.name}`)
                    break;
                case "CreateEvent":
                    console.log(`- ${gevent.payload.ref_type} created in ${gevent.repo.name} `)
                    break;
                case "DeleteEvent":
                    console.log(`- ${gevent.payload.ref_type} deleted in ${gevent.repo.name} `)
                    break;
                case "DiscussionEvent":
                    console.log(`- discussion ${gevent.payload.action} in ${gevent.repo.name}`)
                    break;
                case "ForkEvent":
                    console.log(`- forked ${gevent.repo.name}`)
                    break;
                case "GollumEvent":
                    console.log(`- ${gevent.payload.pages.length} pages created/updated in ${gevent.repo.name}`)
                    break;
                case "IssueCommentEvent":
                    break;
                case "IssuesEvent":
                    break;
                case "MemberEvent":
                    break;
                case "PublicEvent":
                    break;
                case "PullRequestEvent":
                    break;
                case "PullRequestReviewEvent":
                    break;
                case "PullRequestReviewCommentEvent":
                    break;
                case "PushEvent":
                    const total_commits = await fetch_push_commits(gevent.repo.url, gevent.payload.head, gevent.payload.before);
                    console.log(`- pushed ${total_commits} commits to ${gevent.repo.name}`)
                    break;
                case "ReleaseEvent":
                    break;
                case "WatchEvent":
                    break;
            }
        }
    } catch (err) {
        console.log(err.message)
    }
}

main()