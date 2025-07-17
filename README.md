# GitHub User Activity CLI

A command-line tool to fetch and display recent GitHub events for any user.

**🔗 Project Link:** [roadmap.sh project](https://roadmap.sh/projects/github-user-activity)

## 🚀 Features

- Fetch recent GitHub events from the command line
- Filter events by specific event types
- Clean, formatted output with event details
- Built with Node.js and GitHub API
- No external dependencies (uses native `fetch()`)

## 📋 Prerequisites

- Node.js 18+ (for native `fetch()` support)
- Internet connection to access GitHub API

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/comdotvince/github-user-activity-cli.git
cd github-user-activity-cli
```

2. Install dependencies (optional, for development):

```bash
npm install
```

## 📖 Usage

### Basic Usage

```bash
node index.js <username>
```

### Filter by Event Type

```bash
node index.js <username> <eventType>
```

### Examples

```bash
# Show all recent events for a user
node index.js octocat

# Show only push events
node index.js octocat PushEvent

# Show only pull request events
node index.js octocat PullRequestEvent
```

## 🎯 Supported Event Types

The CLI supports filtering by the following GitHub event types:

- `CommitCommentEvent` - Comments on commits
- `CreateEvent` - Repository/branch/tag creation
- `DeleteEvent` - Repository/branch/tag deletion
- `ForkEvent` - Repository forks
- `IssuesEvent` - Issue actions (opened, closed, etc.)
- `PullRequestEvent` - Pull request actions
- `PushEvent` - Code pushes
- `ReleaseEvent` - Repository releases
- `WatchEvent` - Repository stars/watches
- And more...

## 📊 Output Format

The CLI displays events in a clean table format:

```
Events for user: octocat
Filtered by event type: PushEvent
================================================================================
Event Type           Repo Name                                At
--------------------------------------------------------------------------------
PushEvent            octocat/Hello-World                      7/17/2025, 10:30:00 AM
PushEvent            octocat/git-consortium                   7/16/2025, 2:15:00 PM
```

## 🔧 Development

### Run with auto-reload:

```bash
npm run dev
```

### Available Scripts:

- `npm run dev` - Start with nodemon for development
- `npm test` - Run tests (not implemented yet)

## 🎓 What I Learned

- Using `.includes()` to check array contents
- Configuring and passing parameters to `fetch()`
- Writing `async` functions with `await` for better readability
- Arrow functions and anonymous function usage
- Command-line argument parsing with `process.argv`
- Error handling for API requests
- Git config: `git config pull.rebase false` for merge behavior

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

ISC License - see the LICENSE file for details.

## 🐛 Issues

If you encounter any issues, please report them at: [GitHub Issues](https://github.com/comdotvince/github-user-activity-cli/issues)

---

**Tech Stack:** JavaScript (Node.js) | **API:** GitHub REST API v3
