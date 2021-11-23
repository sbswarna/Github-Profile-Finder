const github = new Github;
const ui = new UI;

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const userName = e.target.value;
  if (userName !== "") {
    github.getUser(userName).then((data) => {
      if (data.profile.message === "Not Found") {
        //Show an alert
        ui.showAlert('User Not Found...', 'alert alert-danger');
      } else {
        //Show profile
        ui.showProfile(data.profile);
        //console.log(data.profile);
        //show repositories
        ui.showRepositories(data.repositories);
      }
    });
  } else {
    //clear previously loaded profiles
    ui.clearProfile();
  }
});
