import React from "react";
import '../styles/global.css'
import '../styles/NavBar.css'

const ReportRow = ({reports}) => {
    return (
        <tr>
            <td>{reports.date}</td>
            <td>{reports.sum} ₽</td>
            <td>{reports.name}</td>
        </tr>
    );
}


export default ReportRow;