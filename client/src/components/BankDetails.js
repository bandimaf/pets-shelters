import React, { useContext } from "react";
import FundCard from "./FundCard";
import { Context } from "..";
import '../styles/global.css'
import '../styles/Listing.css';
import '../styles/AllLinks.css';


const BankDetails = ({details}) => {
    const blabla = 123;

    return (
        <>
        <section>
        <section>
            {checkData(details.checking_account, 'Расчетный счет:')}
            {checkData(details.department, 'Зарегистрирован ')}
            {checkData(details.BIK, 'БИК: ')}
            {checkData(details.correspondent_account, 'Корреспондентский счет:')}
            {checkData(details.INN, 'ИНН: ')}
            {checkData(details.OKPO, 'ОКПО: ')}
            {checkData(details.KPP, 'КПП: ')}
            {checkData(details.OGRN, 'ОГРН: ')}
            {checkData(details.OKVED, 'ОКВЭД: ')}
            {checkData(details.additionally, '')}
        </section>
            <img src={details.QR} />
        </section>
        </>
    );
}

const checkData = (value, label) => {
    if (value) return <div>{label}{value}</div>;
}


export default BankDetails;