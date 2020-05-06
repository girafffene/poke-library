const express = require("express")
const pokeRoutes = require("./routes/pokemon")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", pokeRoutes)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
