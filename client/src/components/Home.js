import React, {useState} from "react"

import Modal from "react-bootstrap/Modal"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { Col, Row } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/base.css';
import "../styles/home.css"

import { usePokemon } from "../hooks"

export default function Pokemons() {
  const { pokeMon, pushName, pokeStats } = usePokemon()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <header>
        <h1>Pokemon Library</h1>
      </header>

      <div className="wrapper">
        { pokeMon.map(animal => (
          <div onClick={e => pushName(animal.name)} id={animal.name} key={`animal + ${animal.name}`}>

            <Button className="pokemonButton" variant="primary" onClick={handleShow}>
              <p>
                {animal.name}
              </p>
            </Button>

            <Modal show={show} onHide={handleClose} centered={true} size="sm">
              <Modal.Header className="pokename-title">
                <Modal.Title id="contained-modal-title-vcenter">
                  {pokeStats.name}
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Container>
                  <Row className="show-grid">
                    <Col md={12} className="modal-column">
                      <code>
                        <img src={pokeStats.img} alt="pokemon" className="pokeImg"/>

                        <ul>
                          <li>
                            <strong>Height: </strong> {pokeStats.height}
                          </li>

                          <li>
                            <strong>Weight: </strong> {pokeStats.weight}
                          </li>

                          <li>
                            <strong>Abilities: </strong> {pokeStats.abilities}
                          </li>

                          <li>
                            <strong>Type(s): </strong> {pokeStats.types}
                          </li>
                        </ul>
                      </code>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  )
}