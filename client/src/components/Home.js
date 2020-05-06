import React from "react"
// import axios from "axios"
import '../styles/base.css';

import { usePokemon } from "../redux/ducks/poke_ducks"

export default function Pokemons() {
  const { getPokemon } = usePokemon()

  getPokemon()

  return (
    <div>
      <header>
        <h1>Pokemon Library</h1>
      </header>
      <div className="wrapper">
        {/* { getPokemon.map(animal => (
          <div>
            <ul key={"pokemon" + animal.name}>
              <li>
                <div>
                  <img src={person.img} />
                </div>
              </li>

              <li>
                <p>
                  <strong>Name:</strong> {animal.name}
                </p>
              </li> 
              <li>
                <p>
                  <strong>Height:</strong> {animal.height}
                </p>
              </li>
              <li>
                <p>
                  <strong>Weight:</strong> {animal.weight}
                </p>
              </li>
              <li>
                <p>
                  <strong>Types:</strong> {animal.types}
                </p>
              </li>
              <li>
                <p>
                  <strong>Abilities:</strong> {animal.abilities}
                </p>
              </li>
            </ul>
          </div>
        ))} */}
      </div>
    </div>
  )
}
