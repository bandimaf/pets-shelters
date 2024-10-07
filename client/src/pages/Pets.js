import React, { useContext, useEffect } from "react";
import PetsList from "../components/PetsList";
import '../styles/global.css'
import { Context } from "..";
import { fetchPets } from "../http/petsApi";
import {observer} from "mobx-react-lite";


const Pets = observer(() => {

    const {pet} = useContext(Context)

    useEffect(() => {
        fetchPets().then(data => {
            pet.setPet(data.rows)
        })
    }, [ ])
    console.log(pet)

    return (
        <main className="Pets">
            <div className="pets-listing__container">
                <h2 className="pets-listing__title title">Наши подопечные</h2>
                <PetsList />
            </div>
        </main>
    );
});


export default Pets;