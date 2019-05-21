//Init Github
const github = new GitHub
//Init UI
const ui = new UI
//Search input 
const searchUser = document.getElementById('searchUser');
//Search input event listener
searchUser.addEventListener('keyup', (e) =>{
//Get input text
const userText = e.target.value;

if(userText !== ''){
// console.log(userText);
github.getUser(userText)
.then(data => {
    // console.log(data);
    if(data.profile.message === 'Not Found'){
        //Show Alert
        ui.showAlert('User not Found', 'alert alert-danger');
    } else{
        //Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
    }
});

} else {
    //clear profile
    ui.clearProfile();
}
});

