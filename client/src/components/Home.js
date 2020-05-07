import React from "react"
import Popup from "reactjs-popup"
import '../styles/base.css';
import "../styles/home.css"

import { usePokemon } from "../hooks"

export default function Pokemons() {
  const { pokeMon, pushName, pokeStats } = usePokemon()

  return (
    <div>
      <header>
        <h1>Pokemon Library</h1>
      </header>
      <div className="wrapper">
        { pokeMon.map(animal => (
          <div onClick={e => pushName(animal.name)} id={animal.name} key={`animal + ${animal.name}`}>

            <Popup trigger={
            <button className="pokemonButton">
              <p>{animal.name}</p>
            </button>} position="right center">

              <div className="pokeStatsCard">

                <img src={pokeStats.img} alt="pokemon" className="pokeImg"/>

                <p>
                  <strong>
                    Height:&nbsp;
                  </strong>
                  {pokeStats.height}
                </p>

                <p>
                  <strong>
                    Weight:&nbsp;
                  </strong>
                  {pokeStats.weight}
                </p>

                <p>
                  <strong>
                    Abilities:&nbsp;
                  </strong>
                  {pokeStats.abilities}
                </p>

                <p>
                  <strong>
                    Type(s):&nbsp;
                  </strong>
                  {pokeStats.types}
                </p>
              </div>
            </Popup>
          </div>
        ))}
      </div>
    </div>
  )
}