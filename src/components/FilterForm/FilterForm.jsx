import React from "react";
import { useSelector } from "react-redux";
import { TableFields } from "../../constants/TableFields";
import classNames from "classnames";
import { TextField } from "../components";
import langs from '../../langs/langs'
import cl from './FilterForm.module.scss'

const FilterForm = ({ className, searchParams, onChange }) => {
    const currentLang = useSelector(state => state.lang.currentLang)

    return (
        <form className={classNames(cl.form, className)} onSubmit={e => e.preventDefault()}>
            {TableFields.map(item => (
                <TextField
                    className={cl.input}
                    placeholder={langs[currentLang][`logbook_form_${item}`]}
                    size='xs'
                    key={item}
                    name={item}
                    value={searchParams[item]}
                    onChange={onChange}
                />
            ))}
        </form>
    )
}

export { FilterForm } 