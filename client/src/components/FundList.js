import React, { useContext } from "react";
import FundCard from "./FundCard";
import { Context } from "..";
import '../styles/global.css'
import '../styles/Listing.css';
import '../styles/AllLinks.css';
import { observer } from "mobx-react-lite";


const FundList = observer (() => {
    const { fund } = useContext(Context);
    return (
        <div className="listing__list">
            {fund.fund.map(fund =>
                <FundCard key={fund.id} fund={fund} />
            )}
        </div>
    );
})


export default FundList;