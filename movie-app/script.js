// API_URL_SOURCE //
// https://github.com/mihaiandrei97/movie-list-app-react-hooks/blob/master/src/components/Discover.js

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280/";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Initially get Favorite Movies
getMovies(APIURL);
  
async function getMovies(url) {
        const resp = await fetch(url);
        const respData = await resp.json();

        console.log(respData);

        showMovies(respData.results);
}

function showMovies(movies) {
    // clear main
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie;
        
        const movieEl = document.createElement('div');
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img 
                src="${IMGPATH + poster_path}"
                alt="${title}"
            >
            <div class="movie-info">
                <h1>${title}</h1>
                <span class="${getClassByRate(
                    vote_average
                )}">${vote_average}
                </span>
            </div>
            <div class="overview">
                <h4>Overview:</h4>
                ${overview}
            </div>
        `;
    
        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);
        
        search.value = '';
    }
});