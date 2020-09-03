//imported dependecies
import React, { useState } from "react"
import { Link } from "react-router-dom"

//imported dependecies for Bootstrap Modal
import Modal from "react-bootstrap/Modal"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { Col, Row } from "react-bootstrap"

//imported stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/base.css';
import "../styles/home.css"

//imported hook
import { usePokemon } from "../hooks"

export default function Pokemons() {
  const { pokeMon, pushName, pokeStats } = usePokemon()

  //show & set show are set to false for initial state, 
  const [show, setShow] = useState(false);
  //when you click on the "Button" state is changed to TRUE to show modal
  const handleShow = () => setShow(true);
  //when you click "close" button inside of Modal, state is changed back to FALSE to hide modal
  const handleClose = () => setShow(false);
  
  return (
    <div>
      <header>
        <h1>Pokemon Library</h1>
        <p>First Generation</p>
      </header>

      <div className="wrapper">
        {pokeMon.map(animal => (
          //onClick function is taking the pokemon name and calling the api to pull in its stats for display
          <div onClick={e => pushName(animal.name)} id={animal.name} key={`${animal.name}`}>

            {/* button to show modal */}
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
                        <img src={pokeStats.img} alt={`${pokeStats.name}`} className="pokeImg"/>

                        <ul>
                          <li>
                            <strong>Height: </strong> {pokeStats.height}
                          </li>

                          <li>
                            <strong>Weight: </strong> {pokeStats.weight}
                          </li>

                          <li>
                            <strong>Type(s): </strong> {pokeStats.types}
                          </li>

                          <li>
                            <strong>Abilities: </strong> {pokeStats.abilities}
                          </li>
                        </ul>
                      </code>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>

              <Modal.Footer>
                {/* button to close modal */}
                <Button variant="secondary" onClick={handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        ))}

        <div className="pagination">
          <span className="active">1</span>

          <Link to={"/page2"}>
            <span>2</span>
          </Link>

          <Link to={"/page3"}>
            <span>3</span>
          </Link>

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