const axios = require("axios")
const express = require("express")
const router = express.Router()

data = {
    pokeName: ""
}


//calling API to get information
router.get("/newpokemon", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=6").then(resp => {
        const obj = resp.data.results
        
        res.json(obj)
    })
})

router.post("/pokename", (req, res, next) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.pokeName}`).then(
        resp => {
            const stats = resp.data

            // bringing in stats
            const pokeStats = {
                height: stats.height,

                weight: stats.weight,

                //checking whether the pokemon is the first in the evolution chain
                firstEvo: stats.is_default,

                //pulling in pokemon's abilities
                abilities: stats.abilities.map(ability => {
                    if (stats.abilities.length > 1) {
                        return `${ability.ability.name}, `
                    } else {
                        return ability.ability.name
                    }
                }),

                //bringing in the type of the pokemon
                types: stats.types.map(type => {
                    if (stats.types.length > 1) {
                        return `${type.type.name}` + `, `
                    } else {
                        return type.type.name
                    }
                }),

                img: stats.sprites.front_default,
            }
            

            res.json(pokeStats)
        }
    )
})

module.exports = router