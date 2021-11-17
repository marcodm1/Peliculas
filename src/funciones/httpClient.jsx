const API = 'https://api.themoviedb.org/3';
export function get(search)  {
  return (
    fetch(API + search, {
      headers: {
        Authorization:  
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzAzOGE4YzExYjMyZWQ3ZmZiNGY3OTM0MWIyNzdjZCIsInN1YiI6IjYwZWJmYjlkMTk0MTg2MDA1ZGU0ZGJjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EOTZUcbldfeMkcSuR6jcvIrbyZiLlB0Yat1M3AjwgLg",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((result) => result.json())
  )
}

export function getSponsors()  {
  return (
    fetch("/API/test.php")
    .then((result) => result.json())
  )
}