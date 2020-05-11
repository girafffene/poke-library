import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const GET_POKEMON = "pokemon/GET_POKEMON"
const GET_POKEMON_2 = "pokemon/GET_POKEMON_2"
const GET_POKEMON_3 = "pokemon/GET_POKEMON_3"
const GET_POKEMON_4 = "pokemon/GET_POKEMON_4"
const GET_POKEMON_5 = "pokemon/GET_POKEMON_5"
const GET_POKEMON_6 = "pokemon/GET_POKEMON_6"
const GET_POKEMON_7 = "pokemon/GET_POKEMON_7"
const GET_POKEMON_8 = "pokemon/GET_POKEMON_8"
const GET_POKEMON_9 = "pokemon/GET_POKEMON_9"
const GET_POKEMON_10 = "pokemon/GET_POKEMON_10"
const GET_POKEMON_11 = "pokemon/GET_POKEMON_11"
const GET_POKEMON_12 = "pokemon/GET_POKEMON_12"
const GET_POKEMON_13 = "pokemon/GET_POKEMON_13"

const GET_STATS = "pokemon/GET_STATS"
const SET_POKESTATS = "pokemon/SET_POKESTATS"

const initialState = {
  allPokemon: [],
  secondSet: [],
  thirdSet: [],
  fourthSet: [],
  fifthSet: [],
  sixthSet: [],
  seventhSet: [],
  eighthSet: [],
  ninthSet: [],
  tenthSet: [],
  eleventhSet: [],
  twelfthSet: [],
  thirteenthSet: [],
  stats: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return { ...state, allPokemon: action.payload }

    case GET_POKEMON_2:
      return { ...state, secondSet: action.payload }

    case GET_POKEMON_3:
      return { ...state, thirdSet: action.payload }

    case GET_POKEMON_4:
      return { ...state, fourthSet: action.payload }

    case GET_POKEMON_5:
      return { ...state, fifthSet: action.payload }
    
    case GET_POKEMON_6:
      return { ...state, sixthSet: action.payload }

    case GET_POKEMON_7:
      return { ...state, seventhSet: action.payload }

    case GET_POKEMON_8:
      return { ...state, eighthSet: action.payload }

    case GET_POKEMON_9:
      return { ...state, ninthSet: action.payload }

    case GET_POKEMON_10:
      return { ...state, tenthSet: action.payload }

    case GET_POKEMON_11:
      return { ...state, eleventhSet: action.payload }

    case GET_POKEMON_12:
      return { ...state, twelfthSet: action.payload }

    case GET_POKEMON_13:
      return { ...state, thirteenthSet: action.payload }

    case SET_POKESTATS:
      return { ...state, stats: action.payload}

    case GET_STATS:
      return { ...state, stats: action.payload}

    default:
      return state
  }
}

//grabs first set of pokemon from the API
function getPokemon() {
  return dispatch => {
    axios.get("/api/pokemonone").then(resp => {
      dispatch({
        type: GET_POKEMON,
        payload: resp.data
      })
    })
  }
}

//grabs second set of pokemon from the API
function getPokemonTwo() {
  return dispatch => {
    axios.get("/api/pokemontwo").then(resp => {
      dispatch({
        type: GET_POKEMON_2,
        payload: resp.data
      })
    })
  }
}

//grabs third set of pokemon from the API
function getPokemonThree() {
  return dispatch => {
    axios.get("/api/pokemonthree").then(resp => {
      dispatch({
        type: GET_POKEMON_3,
        payload: resp.data
      })
    })
  }
}

//grabs fourth set of pokemon from the API
function getPokemonFour() {
  return dispatch => {
    axios.get("/api/pokemonfour").then(resp => {
      dispatch({
        type: GET_POKEMON_4,
        payload: resp.data
      })
    })
  }
}

//grabs fifth set of pokemon from the API
function getPokemonFive() {
  return dispatch => {
    axios.get("/api/pokemonfive").then(resp => {
      dispatch({
        type: GET_POKEMON_5,
        payload: resp.data
      })
    })
  }
}

//grabs sixth set of pokemon from the API
function getPokemonSix() {
  return dispatch => {
    axios.get("/api/pokemonsix").then(resp => {
      dispatch({
        type: GET_POKEMON_6,
        payload: resp.data
      })
    })
  }
}

//grabs seventh set of pokemon from the API
function getPokemonSeven() {
  return dispatch => {
    axios.get("/api/pokemonseven").then(resp => {
      dispatch({
        type: GET_POKEMON_7,
        payload: resp.data
      })
    })
  }
}

//grabs eighth set of pokemon from the API
function getPokemonEight() {
  return dispatch => {
    axios.get("/api/pokemoneight").then(resp => {
      dispatch({
        type: GET_POKEMON_8,
        payload: resp.data
      })
    })
  }
}

//grabs ninth set of pokemon from the API
function getPokemonNine() {
  return dispatch => {
    axios.get("/api/pokemonnine").then(resp => {
      dispatch({
        type: GET_POKEMON_9,
        payload: resp.data
      })
    })
  }
}

//grabs tenth set of pokemon from the API
function getPokemonTen() {
  return dispatch => {
    axios.get("/api/pokemonten").then(resp => {
      dispatch({
        type: GET_POKEMON_10,
        payload: resp.data
      })
    })
  }
}

//grabs eleventh set of pokemon from the API
function getPokemonEleven() {
  return dispatch => {
    axios.get("/api/pokemoneleven").then(resp => {
      dispatch({
        type: GET_POKEMON_11,
        payload: resp.data
      })
    })
  }
}

//grabs twelfth set of pokemon from the API
function getPokemonTwelve() {
  return dispatch => {
    axios.get("/api/pokemontwelve").then(resp => {
      dispatch({
        type: GET_POKEMON_12,
        payload: resp.data
      })
    })
  }
}

//grabs twelfth set of pokemon from the API
function getPokemonThirteen() {
  return dispatch => {
    axios.get("/api/pokemonthirteen").then(resp => {
      dispatch({
        type: GET_POKEMON_13,
        payload: resp.data
      })
    })
  }
}

//function grabs pokemon and pushes it to the backend to pull in specific stats for a pokemon
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

  const pokeMon2 = useSelector(appState => appState.pokeState.secondSet)

  const pokeMon3 = useSelector(appState => appState.pokeState.thirdSet)

  const pokeMon4 = useSelector(appState => appState.pokeState.fourthSet)

  const pokeMon5 = useSelector(appState => appState.pokeState.fifthSet)

  const pokeMon6 = useSelector(appState => appState.pokeState.sixthSet)

  const pokeMon7 = useSelector(appState => appState.pokeState.seventhSet)

  const pokeMon8 = useSelector(appState => appState.pokeState.eighthSet)

  const pokeMon9 = useSelector(appState => appState.pokeState.ninthSet)

  const pokeMon10 = useSelector(appState => appState.pokeState.tenthSet)

  const pokeMon11 = useSelector(appState => appState.pokeState.eleventhSet)

  const pokeMon12 = useSelector(appState => appState.pokeState.twelfthSet)

  const pokeMon13 = useSelector(appState => appState.pokeState.thirteenthSet)

  const pokeStats = useSelector(appState => appState.pokeState.stats)

  const pushName = pokeName => dispatch(pushPokeName(pokeName))


  useEffect(() => {
    dispatch(getPokemon())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPokemonTwo())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPokemonThree())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPokemonFour())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPokemonFive())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPokemonSix())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPokemonSeven())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPokemonEight())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPokemonNine())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPokemonTen())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPokemonEleven())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPokemonTwelve())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPokemonThirteen())
  }, [dispatch])

  return {
    pokeMon,
    pokeMon2,
    pokeMon3,
    pokeMon4,
    pokeMon5,
    pokeMon6,
    pokeMon7,
    pokeMon8,
    pokeMon9,
    pokeMon10,
    pokeMon11,
    pokeMon12,
    pokeMon13,
    pokeStats,
    pushName
  }
}
