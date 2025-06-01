const username = process.argv[2];
const eventTypeArg = process.argv[3];

// Validate input
if (!username) {
  console.error("Please provide a GitHub username as the first argument.");
  console.error("Usage: node index.js <username> [eventType]");
  console.error("Example: node index.js octocat PushEvent");
  process.exit(1);
}

// List of valid event types
const VALID_EVENT_TYPES = [
  "CommitCommentEvent",
  "CreateEvent",
  "DeleteEvent",
  "DeploymentEvent",
  "DeploymentStatusEvent",
  "ForkEvent",
  "GollumEvent",
  "IssueCommentEvent",
  "IssuesEvent",
  "MemberEvent",
  "PublicEvent",
  "PullRequestEvent",
  "PullRequestReviewCommentEvent",
  "PushEvent",
  "ReleaseEvent",
  "StatusEvent",
  "WatchEvent",
];

// Validate event type if provided
if (eventTypeArg && !VALID_EVENT_TYPES.includes(eventTypeArg)) {
  console.error(`Invalid event type: ${eventTypeArg}`);
  console.error("Available event types:\n" + VALID_EVENT_TYPES.join(", "));
  process.exit(1);
}

// Fetch GitHub events
async function fetchGitHubEvents(username) {
  const url = `https://api.github.com/users/${username}/events`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  return await response.json();
}

// Format and display events
function displayEvents(events, username, filterType = null) {
  if (events.length === 0) {
    console.log(
      filterType
        ? `No events of type ${filterType} found for user ${username}.`
        : `No events found for user ${username}.`
    );
    return;
  }

  // Filter events if type is specified
  const filteredEvents = filterType
    ? events.filter((event) => event.type === filterType)
    : events;

  if (filteredEvents.length === 0) {
    console.log(`No events of type ${filterType} found for user ${username}.`);
    return;
  }

  // Display header
  console.log(`Events for user: ${username}`);
  if (filterType) console.log(`Filtered by event type: ${filterType}`);
  console.log("=".repeat(80));
  console.log(
    `${"Event Type".padEnd(20)} ${"Repo Name".padEnd(40)} ${"At".padEnd(20)}`
  );
  console.log("-".repeat(80));

  // Display events
  filteredEvents.forEach((event) => {
    console.log(
      `${event.type.padEnd(20)} ${event.repo.padEnd(
        40
      )} ${event.created_at.padEnd(20)}`
    );
  });
}

// Main execution
(async () => {
  try {
    // Show help message about event types
    console.log(
      "Tip: You can filter by event type (e.g., 'PushEvent', 'CreateEvent') as the second argument."
    );
    console.log(`Available event types: ${VALID_EVENT_TYPES.join(", ")}\n`);

    const data = await fetchGitHubEvents(username);

    // Transform the data
    const events = data.map((event) => ({
      type: event.type,
      repo: event.repo.name,
      created_at: new Date(event.created_at).toLocaleString(),
    }));

    displayEvents(events, username, eventTypeArg);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
})();
