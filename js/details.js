const detailsContainer = document.querySelector(".show-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.tvmaze.com/seasons/" + id;

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

console.log(corsFix);
async function fetchSeasonDetails() {
  try {
    const response = await fetch(corsFix);
    const details = await response.json();

    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = message("error", error);
  }
}

fetchSeasonDetails();

function createHtml(details) {
  detailsContainer.innerHTML = `<h2>Season: ${details.number}</h2>
                                    <ul>
                                        <li><span>Number of episodes: </span>${details.episodeOrder}</li>
                                        <li><span>Premiere date: </span>${details.premiereDate}</li>
                                        <li><span>End date: </span>${details.endDate}</li>
                                        <li><span>Network: </span>${details.network.name}</li>
                                        <li><span>Country: </span>${details.network.country.name}</li>
                                    </ul>    
                                        <h3>Summary:</h3>
                                        <p>${details.summary}</p>`;
}
