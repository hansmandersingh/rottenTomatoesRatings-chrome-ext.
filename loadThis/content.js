const fetchRatings = () => {
  let mediaList = document.querySelectorAll('.media-lists__td-title');

  mediaList.forEach(movie => {
    let movieName = movie.innerText;

    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=e7468b07`)
    .then(data => data.json())
    .then(json => {
      movie.innerText = `${movieName} (${json.imdbRating})`;
    })
  })
}


fetchRatings();