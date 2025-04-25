const capitalizeFirstLetter = (val) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};

async function getActivity(username) {
  const url = `https://api.github.com/users/${username}/events`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const recentActivity = json.slice(-10);
    console.log(recentActivity.length);

    recentActivity.forEach((activity) => {
      let action;
      const eventType = activity.type;
      //   console.log(eventType);
      switch (eventType) {
        case "CreateEvent":
          action = `- Created a ${activity.payload.ref_type} in ${activity.repo.name}`;
          break;
        case "PushEvent":
          action = `- Pushed ${activity.payload.size} to ${activity.repo.name}`;
          break;
        case "ForkEvent":
          action = `- Forked a ${activity.payload.forkee} from ${activity.repo.forkee}`;
          break;
        case "WatchEvent":
          action = `- Starred a ${activity.repo.name}`;
          break;
        case "IssuesEvent":
          action = `- ${capitalizeFirstLetter(
            activity.payload.action
          )} an issue in ${activity.repo.name}`;
          break;
        case "PullRequestEvent":
          action = `- ${capitalizeFirstLetter(
            activity.payload.action
          )} a pull request in ${activity.repo.name}.`;
          break;
        default:
          action = `${eventType} in ${activity.repo.name}`;
      }
      console.log(action);
    });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { getActivity };
