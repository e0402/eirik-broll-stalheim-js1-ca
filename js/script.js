const resultsContainer = document.querySelector(".results");

const url = "https://api.tvmaze.com/shows/11/seasons";

async function fetchSeasons() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    resultsContainer.innerHTML = "";

    const seasons = json;

    seasons.forEach(function (season) {
      resultsContainer.innerHTML += `<a href="details.html?id=${season.id}" class="">
                                          <div><ul class="styling">
                                              <h3 class="">Season: ${season.number}</h3>
                                              <li class=""><span>Number of episodes: </span>${season.episodeOrder}</li>
                                              <li class=""><span>Premiere date: </span>${season.premiereDate}</li>
                                              <li class=""><span>Network: </span>${season.network.name}</li>
                                          </ul></div>
                                     </a>`;
    });
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchSeasons();
