const APIURL = "https://api.github.com/users/";

const mainElem = document.getElementById("main");
const formElem = document.getElementById("form");
const searchElem = document.getElementById("search");

async function getUser(username) {
  const response = await fetch(APIURL + username);
  const data = await response.json();

  createUserCard(data);
  getRepos(username);
}

async function getRepos(username) {
  const response = await fetch(APIURL + username + "/repos");
  const data = await response.json();
  addReposToCard(data);
}

getUser("florinpop17");
function createUserCard(user) {
  const cardHTML = `
    <div class='card'>
        <div>
            <img class='avatar' src='${user.avatar_url}' alt='${user.name}'/>
        </div>
        <div class='user-info'>
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul class='info'>
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>
        
        
        <div id='repos'></div>
        </div>

    </div>    
        `;
  mainElem.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposElem = document.getElementById("repos");

  repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach((repo) => {
      const repoEl = document.createElement("a");
      repoEl.classList.add("repo");

      repoEl.href = repo.html_url;
      repoEl.target = "_blank";
      repoEl.innerText = repo.name;
      //console.log(repo);

      reposElem.appendChild(repoEl);
    });
}

formElem.onsubmit = (e) => {
  e.preventDefault();

  const user = searchElem.value;

  if (user) {
    getUser(user);

    searchElem.value = "";
  }
};
