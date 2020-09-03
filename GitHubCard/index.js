/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios';

//Parent Element to append children to the DOM
const cards = document.querySelector(".cards");

axios.get('https://api.github.com/users/sophiethedeveloper')
.then(response => {
  //console log to study the information returned by the api
  console.log('API RESPONSE', response)

  //pass information received and apend to the DOM
  cards.appendChild(githubComponent(response.data));
})

// when a GET request is rejected, a .catch on the chain allows us to capture errors returned from the API
.catch(err => {
  console.log('something happened! ', err)
})

// a final .then will be called regardless of state (fulfilled or rejected). it will be called after either the .then or the .catch.
.then(() => {
  console.log('yahoo!')
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/bigknell'
];

followersArray.forEach(url => {
  axios.get(url).then(response => {
    //console log to study the information returned by the api
    console.log('API RESPONSE', response)
  
    //pass information received and apend to the DOM
    cards.appendChild(githubComponent(response.data));
  })
  
  // when a GET request is rejected, a .catch on the chain allows us to capture errors returned from the API
  .catch(err => {
    console.log('something happened! ', err)
  })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const githubComponent = (githubCard) => {
  
  // 1- create elements
  const newCard = document.createElement('div');
  const newImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userFullName = document.createElement('h3');
  const githubUsername = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileUrl = document.createElement('a');
  const link = document.createTextNode('Visit my Github Profile')
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

   // 2 - Add Content to Elements
   newImage.src = (`${githubCard.avatar_url}`);
   userFullName.textContent = (`Name: ${githubCard.name}`);
   githubUsername.textContent = (`${githubCard.login}`);
   location.textContent = (`Location: ${githubCard.location}`);
   profile.textContent = 'Profile: '
   profileUrl.title = "Visit My Github Profile";
   profileUrl.href = (`${githubCard.html_url}`)
   followers.textContent = (`Followers: ${githubCard.followers}`);
   following.textContent = (`Following: ${githubCard.following}`);
   bio.textContent = (`Bio: ${githubCard.bio}`);
  
  // 3- Append children to parent elements
  newCard.appendChild(newImage);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(userFullName);
  cardInfo.appendChild(githubUsername);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.append(profileUrl);
  profileUrl.appendChild(link);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // 3 - Add Classes to the Elements
  newCard.classList.add('card');
  cardInfo.classList.add('card-info');
  userFullName.classList.add('name');
  githubUsername.classList.add('username');


  // return parent component
  return newCard
}
