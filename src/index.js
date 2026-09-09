const {fetch_user_activity, fetch_push_commits} = require("./github.js")
const username = process.argv[2]

async function main() {
    if (username === undefined) {console.log("Error: username not provided."); return}
    try {
        const gevent_list = await fetch_user_activity(username)
        for (gevent of gevent_list) {
            switch(gevent.type) {
                case "CommitCommentEvent":
                    break;
                case "CreateEvent":
                    break;
                case "DeleteEvent":
                    break;
                case "DiscussionEvent":
                    break;
                case "ForkEvent":
                    break;
                case "GollumEvent":
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
                    console.log(`- Pushed ${total_commits} commits to ${gevent.repo.name}`)
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