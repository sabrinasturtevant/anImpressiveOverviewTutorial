
var movies = [
  {
  title:"avengers1",
  time: '12pm',
  status:"avavaibale"
},
{
title:"avengers2",
time: '12pm',
status:"avavaibale"
},
{
  title:"avengers3",
  time: '12pm',
  status:"unavavaibale"
},
{
  title:"avengers4",
  time: '12pm',
  status:"avavaibale"
},
{
  title:"avengers5",
  time: '12pm',
  status:"unavavaibale"
}
];

for (var movie of movies) {
  if (movie.status === "avavaibale") {
    console.log(`The movie ${movie.title} plays at ${movie.time}`);
  } else {
    console.log(`Sorry the movie ${movie.title} is sold out`);
  }
}




// var movie = {
//   title:"wonder woman",
//   time:"2pm"
// };
//
// movie.status = "unavaiable"
// console.log(movie);
// //alert( movie.title );


// var movies = [ "avengers", "wonder woman", "black panther", "the last jedi"];
//
// for (var movie of movies) {
//   console.log(movie);
// }
// //movies.forEach(movie => { alert(movie); });




// var movies = [ "avengers", "wonder woman", "black panther", "the last jedi"];
// console.log( movies[0] );
//
// movies.pop
// movies.push("Lady Bird");
// console.log(movies);


// function multiply(a, b) {
//   return a * b;
// }
// console.log( multiply(6, 8) );



// function sayGreeting(greeting) {
//   var response = prompt("What is your name?");
//   alert(greeting + ", " + response + "!");
// }
// sayGreeting("Good morning");
