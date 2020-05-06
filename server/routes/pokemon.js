const express = require("express")
const router = express.Router()
const axios = require("axios")

// const data = {
//     pokemon: [],
//     allPokemon: []
// }

//calling API to get information
router.get("/newpokemon", (req, res, next) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(resp => {
        const obj = resp.data
        
        const pokedata = {
            name: obj.results.name,

            // height: obj.height,
            // weight: obj.weight,
            // abilities: obj.abilities,
            // stats: obj.stats,
            // types: obj.types
        }
        console.log(pokedata)
        res.json(pokedata)
    })
})

// router.post("/allPokemon", (req, res, next) => {
//     data.allPokemon.push(req.body.pokedata)
//     console.log(allPokemon)
  
//     res.json(data.allPokemon)
// })

// router.get("/allpoke", (req, res, next) => {
//     res.json(data.allPokemon)
//   })

module.exports = router