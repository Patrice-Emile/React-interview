import { movies$ } from "../movies";

export function getMovies() {
    let arr = []
    movies$.then(movies => {
    // console.log(movies)
    movies.forEach(element => {
        arr.push(element)
    })
    }).catch(err=>console.log(err))
    return arr
}

