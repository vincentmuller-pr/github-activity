# GitHub Activity CLI

A simple command-line application that fetches a GitHub user's recent activity using the GitHub API and displays it in the terminal.
Made as a project:
https://roadmap.sh/projects/github-user-activity

## Features

* Fetches a user's recent GitHub activity.
* Displays different messages depending on the event type.
* Supports GitHub usernames as a command-line argument.
* Uses the GitHub API and JavaScript's built-in `fetch`.

## Requirements

* Node.js 18 or higher
* Internet connection

## Installation

Clone the repository:

```bash
git clone https://github.com/vincentmuller-pr/github-activity.git
cd github-activity
```

## Usage

Run the application by providing a GitHub username:

```bash
node src/index.js <username>
```

For example:

```bash
node src/index.js octocat
```

The application will fetch the user's recent activity and display it in the terminal.

Example:

```text
- pushed 2 commits to octocat/Hello-World
- opened an issue in octodog/Hello-World
- branch created in octobird/Hello-World
- starred octodoplhin/Spoon-Knife
```