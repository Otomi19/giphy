// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
   let search = $("#search-term").val();
  fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&rating=pg&api_key=dc6zaTOxFJmzC`)
  .then(function(response) {
        return response.json();
      })
      .then(function(data) {
         $(".display").append(`<img src=${data.data[Math.floor(Math.random() * 10)].images['downsized'].url
}>`);
      });
});

