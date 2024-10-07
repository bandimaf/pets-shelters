import React from "react";
import '../styles/global.css'
import '../styles/NavBar.css'
import { useContext } from "react";
import { Context } from "..";
import logo from '../assets/svg-sprite/paws.svg'
import { FUNDS_ROUTE, MAIN_PAGE, NEWS_ROUTE, PETS_ROUTE, SHELTERS_ROUTE, VOLUNTEERS_ROUTE} from "../utils/consts"
import NavLogo from "./svg/NavLogo";
import ReportRow from "./ReportRow";
import { observer } from "mobx-react-lite";

const ReportTable = observer(() => {
    const { details } = useContext(Context);
    return (
        <table>
        <thead>
            <tr>
                <th>Дата</th>
                <th>Сумма</th>
                <th>Отправитель</th>
            </tr>
        </thead>
        <tbody>
        {details.details.map(details =>
            <ReportRow key={details.id} reports={details}/>
        )}
        </tbody>
    </table>
    );
})


export default ReportTable;