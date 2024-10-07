import React, { useContext } from "react";
import ShelterCard from "./ShelterCard";
import { Context } from "..";
import '../styles/global.css'
import '../styles/Listing.css';
import '../styles/AllLinks.css';


const ShelterList = () => {
    const { shelter } = useContext(Context);
    return (
        <div className="listing__list">
            {shelter.shelter.map(shelter =>
                <ShelterCard key={shelter.id} shelter={shelter} />
            )}
        </div>
    );
}


export default ShelterList;