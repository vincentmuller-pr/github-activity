
async function fetch_user_activity(username) {
    const response = await fetch(`https://api.github.com/users/${username}/events`)
    if (!response.ok) {
        throw new Error(`user: ${username} not found`)
    }
    return await response.json();
}

async function fetch_push_commits(repo_url, head, before) {
    const response = await fetch(repo_url + `/compare/${before}...${head}`);
    if (!response.ok) {
        throw new Error(`error in finding push commits`)
    }
    const compare = await response.json();
    return compare.total_commits
}

module.exports = {fetch_user_activity, fetch_push_commits}