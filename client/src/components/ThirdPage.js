import React, {useState} from "react"
import { Link } from "react-router-dom"

import Modal from "react-bootstrap/Modal"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { Col, Row } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/base.css';
import "../styles/home.css"

import { usePokemon } from "../hooks"

export default function Pokemons() {
  const { pokeMon3, pushName, pokeStats } = usePokemon()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  
  return (
    <div>
      <header>
        <h1>Pokemon Library</h1>
      </header>

      <div className="wrapper">
        { pokeMon3.map(animal => (
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
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ))}

        <div className="pagination">
            <Link to={"/"}>
                <span>1</span>
            </Link>
            <Link to={"/page2"}>
                <span>2</span>
            </Link>
            <span className="active">3</span>
            <Link to={"/page4"}>
              <span>4</span>
            </Link>
            <Link to={"/page5"}>
              <span>5</span>
            </Link>
            <Link to={"/page6"}>
              <span>6</span>
            </Link>
            <Link to={"/page7"}>
              <span>7</span>
            </Link>
            <Link to={"/page8"}>
              <span>8</span>
            </Link>
            <Link to={"/page9"}>
              <span>9</span>
            </Link>
            <Link to={"/page10"}>
              <span>10</span>
            </Link>
            <Link to={"/page11"}>
              <span>11</span>
            </Link>
            <Link to={"/page12"}>
              <span>12</span>
            </Link>
            <Link to={"/page13"}>
              <span>13</span>
            </Link>
        </div>
      </div>
    </div>
  )
}