fetch from two resource
<script>
  // recs = fetch('http://localhost:3000/phonebook/list')
  // recs
  // .then((res) => res.json())
  // .then((recs) => {
  //     for(let x of recs){
  //         console.log(x.username, x.password)
  //     }
  // })
  // .catch((err) => console.log("llll", err.message))
  // .finally(console.log('finally'))

//   async function retval() {
//     let recs = await fetch("http://localhost:3000/phonebook/list");
//     if(!recs.ok){
//         throw new Error('err...')
//     }

//     let resp = await recs.json()
//     return resp;
//   }
//   retval().then(res => {
//       console.log(res)
//   }).catch(err => {
//       console.log(err.message)
//   })

async function fetchMoviesAndCategories() {
  const [moviesResponse, categoriesResponse] = await Promise.all([
    fetch('http://localhost:3000/phonebook/list'),
    fetch('http://localhost:3000/phonebook/list/11')
  ]);

  const movies = await moviesResponse.json();
  const categories = await categoriesResponse.json();

  return [movies, categories];
}
fetchMoviesAndCategories().then(([movies, categories]) => {
  console.log(movies);     // fetched movies
  console.log(categories); // fetched categories
}).catch(error => {
  // /movies or /categories request failed
});
</script>
-----------------------------------------------------------------------------
