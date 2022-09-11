const tvshowSeasons = document.querySelector(".results");

const url = "https://api.tvmaze.com/shows/11/seasons";

async function fetchSeasons() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    tvshowSeasons.innerHTML = "";

    const seasons = json;

    seasons.forEach(function (season) {
      tvshowSeasons.innerHTML += `<a href="details.html?id=${season.id}">
                                      <div>
                                        <ul class="styling">
                                              <h3>Season: ${season.number}</h3>
                                              <li><span>Number of episodes: </span>${season.episodeOrder}</li>
                                              <li><span>Premiere date: </span>${season.premiereDate}</li>
                                              <li><span>Network: </span>${season.network.name}</li>
                                            </ul>
                                      </div>      
                                     </a>`;
    });
  } catch (error) {
    console.log(error);
    tvshowSeasons.innerHTML = message("error", error);
  }
}

fetchSeasons();
