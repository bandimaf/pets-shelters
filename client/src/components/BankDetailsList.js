import React from "react";
import '../styles/global.css'
import '../styles/NavBar.css'
import { useContext } from "react";
import { Context } from "..";
import BankDetails from "./BankDetails";
import { observer } from "mobx-react-lite";

const BankDetailsList = observer (() => {
    const { details } = useContext(Context);
    return (
        <>
            <h3>Банковские реквизиты</h3>
            <section>
                {details.details.map(details =>
                    <BankDetails key={details.id} details={details} />
                )}
            </section>
        </>
    );
})


export default BankDetailsList;