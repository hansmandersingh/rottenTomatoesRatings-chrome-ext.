const fetchRatings = () => {
  let mediaList = document.querySelectorAll('.media-lists__td-title');

  mediaList.forEach(movie => {
    let actualMovieNAme = movie.querySelector('a');
    let movieName = actualMovieNAme.innerText;

    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=e7468b07`)
    .then(data => data.json())
    .then(json => {
      actualMovieNAme.innerText = `${movieName} (${json.imdbRating})`;
    })
  })
}


fetchRatings();