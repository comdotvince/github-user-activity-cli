const username = process.argv[2];

const url = `https://api.github.com/users/${username}/events`

async function fetchGithubUserActivity() {
  fetch(url)
}

fetch(url).then(response => {
  return response.json();
}).then(data => {
  
  data.forEach(event => {
    let message;
    let pushMessage = [{
      repo: "",
      commits: 0
    }];
    switch(event.type) {
      case "PushEvent":
          if (event.repo.name == pushMess)
          message = `Pushed ${event.payload.size} commits to ${event.repo.name}`;
          break;
      case "CreateEvent":
        message = `Created ${event.payload.ref} ${event.payload.ref} in ${event.repo.name}`;
        break;
      case "ForkEvent":
        message = `Forked ${event.payload.forkee.full_name} to ${event.repo.name}`;
        break;
      case "DeleteEvent":
        message = `Deleted ${event.payload.ref_type} ${event.payload.ref} in ${event.repo.name}`;
        break;
      case "WatchEvent":
        message = `Starred ${event.repo.name} repository`;
        break;
      case "PublicEvent":
        break;
    }
    console.log(`${message}`);

  });

})
