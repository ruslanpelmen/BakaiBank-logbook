import React, { useState } from "react";
import RecordsService from "../../API/RecordsService";
import { TableFields } from "../../constants/TableFields";
import { Button } from "../components";
import cl from './TableRow.module.scss'

const TableRow = ({ info, index }) => {
    const [infoClone, setInfoClone] = useState({ ...info })

    const changeHandler = (e) => {
        const { name, value } = e.target
        setInfoClone({ ...infoClone, [name]: value })
    }

    const updateHandler = async () => {
        try {
            await RecordsService.updateRecord(infoClone)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <tr className={cl.row}>
            <td className={cl.index} key='id'>{infoClone.id}</td>
            {TableFields.map(item => (
                <td key={item}><input
                    className={cl.input}
                    name={item}
                    value={infoClone[item]}
                    onChange={changeHandler}
                /></td>
            ))}
            <td className={cl.updateCell} key='updateBtn'><Button size='s' onClick={updateHandler}>Обновить</Button></td>
        </tr>
    )
}

export { TableRow }