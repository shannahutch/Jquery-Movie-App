"use strict";

$(function() {
    console.log( "ready!" );

  $('#searchButton').on('click', function(e){
    e.preventDefault();
    $(".results").empty();
    $(".poster").empty()
    var userInput = $("#searchTerm").val();
      // console.log(userInput);
      // var menuId = $("ul.nav").first().attr("id");

      var request = $.ajax({
        url: "http://www.omdbapi.com",
        type: "get",
        data: {s: userInput},
        dataType: "json"
      });
  // console.log(request);
   
  request.done(function(data){
    //console.log(data);  


   // var movieId = movie["imdbID"]

   //  console.log(movieId);

    $.each(data["Search"],function(index, movie){
      $( ".results" ).append("<li data-imdbid= "+ movie["imdbID"] + ">" + movie["Title"]+ ":  " + movie["Year"] +"</li>");
      // console.log(Search);
      // console.log(movie["imdbID"]);
      });

    });

});

  $('.results').delegate(
    'li', 'click', function(event){
      event.preventDefault();
      $(".poster").empty()
     var posterId = $(event.target).data("imdbid");
      //console.log(posterId);
          
  // });

  // var ID = $("imdbid");

  //  console.log(ID);

      var poster = $.ajax({
        url: "http://www.omdbapi.com",
        type: "get",
        data: {i: posterId},
        dataType: 'json'
      });
        // console.log(poster);


   poster.done(function(data){
    $(".poster").append("<img src= '"+ data["Poster"]+ "'>");
    })


  })
 });