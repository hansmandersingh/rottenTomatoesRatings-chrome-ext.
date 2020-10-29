function fetchRatings() {
  let mediaList = document.querySelectorAll('.dynamic-text-list__item-title');
  let smallTitles = document.querySelectorAll('.p--small');
  
  mediaList.forEach(movie => {
    
    let movieName = movie.innerText;
    
    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=e7468b07`)
    .then(data => data.json())
    .then(json => {
      if(json.imdbRating !== undefined) {
        movie.innerText = `${movieName} (${json.imdbRating})`;
      }
    })
  })

  smallTitles.forEach(movie => {
    let movieName = movie.innerText;
    
    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=e7468b07`)
    .then(data => data.json())
    .then(json => {
      if(json.imdbRating !== undefined) {
        movie.innerText = `${movieName} (${json.imdbRating})`;
      }
    })
  })
  
}


fetchRatings();
