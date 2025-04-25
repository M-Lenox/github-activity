# GitHub Activity CLI

A simple command-line application to fetch and display recent GitHub activity of any user. This is built without external libraries and uses only the fetch method to interact with the GitHub API. Project idea came from: https://roadmap.sh/projects/github-user-activity

## Features

- Fetch recent events for any public GitHub user

- Display readable activity like commits, issues, stars, and forks

- Handle errors with status code

## Getting Started

### Prerequisites

- Node.js installed on your system

### Running the CLI

`node github-activity.js <username>`

### Example

`github-activity m-lenox`

Sample Output

```bash
m-lenox recent activity:
- Pushed 3 commits to M-Lenox/task-tracker-cli
- Opened a new issue in M-Lenox/task-tracker-cli
- Starred M-Lenox/task-tracker-cli
```

## Notes

- Data is fetched using this endpoint:
  `https://api.github.com/users/<username>/events`

- Built using only Node.js standard modules (no external packages)
