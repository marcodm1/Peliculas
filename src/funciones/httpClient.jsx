const API = 'https://api.themoviedb.org/3';
export function get(search) {
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

export function getSponsors() {
  return (
    fetch("/API/test.php")
      .then((result) => result.json())
  )
}

// export function enviarFormulario(objJson) {

//   return (

//     fetch('http://marcodm.atwebpages.com/API/test2.php?x=' + objJson)
//       // hacer que la peticion dea POST
//       .then((result) => result.json())
//   )
// }

// export function enviarFormulario2(objJson) {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ title: 'React POST Request Example' })
// };
//   return (
//     fetch('https://reqres.in/api/posts', requestOptions)
//     .then(response => response.json())
//     .then(data => this.setState({ postId: data.id }))
//   )
// }

// async componentDidMount() {
//   // POST request using fetch with async/await
//   const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title: 'React POST Request Example' })
//   };
//   const response = await fetch('https://reqres.in/api/posts', requestOptions);
//   const data = await response.json();
//   this.setState({ postId: data.id });
// }