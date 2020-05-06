import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const GET_POKEMON = "pokemon/GET_POKEMON"
// const GET_ALL_POKEMON = "pokemon/GET_ALL_POKEMON"
// const ADD_TO_ARRAY = "pokemon/ADD_TO_ARRAY"

const initialState = {
  pokemon: {},
  allPokemon: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return { ...state, pokemon: action.payload }

    // case ADD_TO_ARRAY:
    //   return { ...state, allPokemon: action.payload }

    // case GET_ALL_POKEMON:
    //   return { ...state, getAllPokemon: action.payload}

    default:
      return state
  }
}

//grabs a new "pokemon" from the API
function getPokemon() {
  return dispatch => {
    axios.get("/api/newpokemon").then(resp => {
      console.log(resp)
      dispatch({
        type: GET_POKEMON,
        payload: resp.data
      })
    })
  }
}

// export function addPokemon(pokemon) {
//   return dispatch => {
//     axios.post("/api/addPokemon", { pokemon }).then(resp => {
//       dispatch({
//         type: ADD_TO_ARRAY,
//         payload: resp.data.length
//       })
//       dispatch(getPokemon())
//     })
//   }
// }

// //grabs all pokemon and throws them into an array
// function getAllPokemon() {
//   return dispatch => {
//     axios.get("/api/allpoke").then(resp => {
//       dispatch({
//         type: GET_ALL_POKEMON,
//         payload: resp.data
//       })
//     })
//   }
// }

//function for custom hook
export function usePokemon() {
  const dispatch = useDispatch()

  const pokeMon = useSelector(appState => appState.pokeState.pokemon)
  // console.log(pokeMon)

  // const allPoke = poke => dispatch(addPokemon(poke))
  // const getAllPoke = useSelector(appState => appState.pokeState.allPokemon)

  // const allPokemonArray = poke => dispatch(getAllPokemon(poke))


  useEffect(() => {
    dispatch(getPokemon())
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(getAllPokemon())
  // }, [dispatch])

  return {
    pokeMon, getPokemon
  }
}
