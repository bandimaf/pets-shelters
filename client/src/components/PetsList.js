import React, { useContext } from "react";
import { Context } from "..";
import PetCard from "./PetCard";
import '../styles/global.css'
import '../styles/PetsListing.css'
import { observer } from "mobx-react-lite";

import '../styles/global.css'
import '../styles/Listing.css';
import '../styles/AllLinks.css';


const PetList = observer (() => {
    const { pet } = useContext(Context);
    console.log(pet)
    return (
        <div className="pets-listing__list">
            {pet.pet.map(pet =>
                <PetCard key={pet.id} pet={pet} />
            )}
        </div>
    );
});


export default PetList;