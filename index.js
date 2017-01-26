$(document).ready(function() {
 $("#clear").click(function() {
  $("#weather-results").empty();
 });
 $("#search").click(function() {
  var searchVal = $("#name").val();
  var part1 = "https://api.apixu.com/v1/current.json?";
  var part2 = "key=a90bf5c92af543218bd212238170801&q=";
  var url = part1 + part2 + searchVal;
  $.getJSON(url, function(response) {
   var weatherUrl = response.current.temp_f + "<br></br> " + response.current.humidity + "<br></br> " + response.current.wind_mph;
   var weather = "<p>" + weatherUrl + "</>";
   $("#weather-results").append(weather);
  });
  var searchVal = $("#name").val();
  var part1 = "https://api.giphy.com/v1/gifs/search?q=";
  var part2 = "&api_key=dc6zaTOxFJmzC";
  var url = part1 + searchVal + part2;

  $.getJSON(url, function(response) {
   var imgUrl = response.data[0].images.downsized.url;
   var img = "<img src ='" + imgUrl + "'/>";
   $("body").append(img);


  });
 });
});
