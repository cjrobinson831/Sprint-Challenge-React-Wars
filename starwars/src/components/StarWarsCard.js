import React from "react";
import { CardBody, Col } from "reactstrap";



const StarWarsCard = props => {
    return (
        <CardBody xs="6" sm="4" key={props.id}>
            <div className="film-list" key={props.id}>
                <h2>Character Name: {props.name} </h2>
                <p>Height: {props.height}</p>
                <p>  Mass: {props.mass}</p>
                <p>Gender: {props.gender}</p>
                <p>Homeworld: {props.homeworld}</p>
                <p>Birth Year: {props.birth_year}</p>

            </div>
        </CardBody>
    )
}



export default StarWarsCard;