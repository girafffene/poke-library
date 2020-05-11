const axios = require("axios")
const express = require("express")
const router = express.Router()

data = {
    pokeName: ""
}


//calling API to get information
router.get("/pokemonone", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=12").then(resp => {
        const obj = resp.data.results
        
        res.json(obj)
    })
})

router.get("/pokemontwo", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=12&limit=12").then(resp => {
        const obj = resp.data.results
        
        res.json(obj)
    })
})

router.get("/pokemonthree", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=24&limit=12").then(resp => {
        const obj = resp.data.results
        
        res.json(obj)
    })
})

router.get("/pokemonfour", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=36&limit=12").then(resp => {
        const obj = resp.data.results
        
        res.json(obj)
    })
})

router.get("/pokemonfive", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=48&limit=12").then(resp => {
        const obj = resp.data.results
        
        res.json(obj)
    })
})

router.get("/pokemonsix", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=60&limit=12").then(resp => {
        const obj = resp.data.results
        
        res.json(obj)
    })
})

router.get("/pokemonseven", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=72&limit=12").then(resp => {
        const obj = resp.data.results
        
        res.json(obj)
    })
})

router.get("/pokemoneight", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=84&limit=12").then(resp => {
        const obj = resp.data.results
        
        res.json(obj)
    })
})

router.get("/pokemonnine", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=96&limit=12").then(resp => {
        const obj = resp.data.results
        
        res.json(obj)
    })
})

router.get("/pokemonten", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=108&limit=12").then(resp => {
        const obj = resp.data.results
        
        res.json(obj)
    })
})

router.get("/pokemoneleven", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=120&limit=12").then(resp => {
        const obj = resp.data.results
        
        res.json(obj)
    })
})

router.get("/pokemontwelve", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=132&limit=12").then(resp => {
        const obj = resp.data.results
        
        res.json(obj)
    })
})

router.get("/pokemonthirteen", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=144&limit=7").then(resp => {
        const obj = resp.data.results
        
        res.json(obj)
    })
})

//last call will be limit 7 as we only want to show first gen

router.post("/pokename", (req, res, next) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.pokeName}`).then(
        resp => {
            const stats = resp.data

            // bringing in stats
            const pokeStats = {
                height: stats.height,

                weight: stats.weight,

                name: stats.name,

                //checking whether the pokemon is the first in the evolution chain
                firstEvo: stats.is_default,

                //pulling in pokemon's abilities
                abilities: stats.abilities.map(ability => {
                    return ` ` +  `${ability.ability.name}`
                }).join(),

                //bringing in the type of the pokemon
                types: stats.types.map(type => {
                    return ` ` + `${type.type.name}`
                }).join(),

                img: stats.sprites.front_default,
            }
            

            res.json(pokeStats)
        }
    )
})

module.exports = router