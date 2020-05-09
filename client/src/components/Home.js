import React, {useState} from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Container from "react-bootstrap/Container"
import { Col, Row } from "react-bootstrap"
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
              {animal.name}
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                  {animal.name}
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Container>
                  <Row className="show-grid">
                    <Col>
                      <img src={pokeStats.img} alt="pokemon" className="pokeImg"/>
                    </Col>

                    <Col>
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
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>

              <div className="pokeStatsCard">
              </div>
        
          </div>
        ))}
      </div>
    </div>
  )
}