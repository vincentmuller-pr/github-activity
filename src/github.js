
async function fetch_user_activity(username) {
    const response = await fetch(`https://api.github.com/users/${username}/events`)
    if (!response.ok) {
        throw new Error(`user: ${username} not found`)
    }
    return await response.json();
}

module.exports = {fetch_user_activity}