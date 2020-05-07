import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const GET_POKEMON = "pokemon/GET_POKEMON"
const GET_STATS = "pokemon/GET_STATS"
const SET_POKESTATS = "pokemon/SET_POKESTATS"

const initialState = {
  allPokemon: [],
  stats: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return { ...state, allPokemon: action.payload }

    case SET_POKESTATS:
      return { ...state, stats: action.payload}

    case GET_STATS:
      return { ...state, stats: action.payload}

    default:
      return state
  }
}

//grabs a new "pokemon" from the API
function getPokemon() {
  return dispatch => {
    axios.get("/api/newpokemon").then(resp => {
      dispatch({
        type: GET_POKEMON,
        payload: resp.data
      })
    })
  }
}

function pushPokeName(pokeName) {
  return dispatch => {
    axios.post("/api/pokename", { pokeName }).then(resp => {
      dispatch({
        type: SET_POKESTATS,
        payload: resp.data
      })
    })
  }
}


//function for custom hook
export function usePokemon() {
  const dispatch = useDispatch()

  const pokeMon = useSelector(appState => appState.pokeState.allPokemon)

  const pokeStats = useSelector(appState => appState.pokeState.stats)

  const pushName = pokeName => dispatch(pushPokeName(pokeName))


  useEffect(() => {
    dispatch(getPokemon())
  }, [dispatch])

  return {
    pokeMon,
    pokeStats,
    pushName
  }
}
