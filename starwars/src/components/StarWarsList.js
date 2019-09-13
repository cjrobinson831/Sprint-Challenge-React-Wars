import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard.js";

function StarWarsList() {
    const [filmInfo, setFilmInfo] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
                const filmInfo = response.data.results;
                console.log(filmInfo)
                setFilmInfo(filmInfo)
            })
            .catch(error => {
                console.log("Lets go to WaKanda!", error);
            })

    }, [])


    return (
        <div className="film">
            {
                filmInfo.map((filmInfo) => {
                    return (
                        <StarWarsCard
                            key={filmInfo.id}
                            name={filmInfo.name}
                            height={filmInfo.height}
                            mass={filmInfo.mass}
                            gender={filmInfo.gender}
                            homeworld={filmInfo.homeworld}
                        />
                    )
                })
            }
        </div>
    )
};




export default StarWarsList;