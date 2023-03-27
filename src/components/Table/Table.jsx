import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { TableRow } from "../components";
import langs from '../../langs/langs'
import cl from './Table.module.scss'

const Table = ({ className, records }) => {
    const currentLang = useSelector(state => state.lang.currentLang)

    if (!records.length) {
        return (
            <h3 className='formTitle'>{langs[currentLang].logbook_table_noRecords}</h3>
        )
    }
    return (
        <table className={classNames(cl.table, className)}>
            <thead className={cl.thead}>
                <tr>
                    <th>{langs[currentLang].logbook_table_index}</th>
                    <th>{langs[currentLang].logbook_table_serialNumber}</th>
                    <th>{langs[currentLang].logbook_table_applicant}</th>
                    <th>{langs[currentLang].logbook_table_agreementsNumber}</th>
                    <th>{langs[currentLang].logbook_table_sum}</th>
                    <th>{langs[currentLang].logbook_table_currency}</th>
                    <th>{langs[currentLang].logbook_table_graduationDate}</th>
                    <th>{langs[currentLang].logbook_table_curator}</th>
                    <th>{langs[currentLang].logbook_table_orderStatus}</th>
                    <th>{langs[currentLang].logbook_table_action}</th>
                </tr>
            </thead>
            <tbody>
                {records.map((item, index) => <TableRow key={item.id} index={index} info={item} />)}
            </tbody>
        </table>
    )
}

export { Table }