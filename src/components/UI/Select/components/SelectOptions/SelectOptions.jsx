import React from "react";
import zIndexes from "../../../../../constants/zIndexes";
import cl from './SelectOptions.module.scss'

const SelectOptions = ({ options, switcher, setValue }) => {
    const selectHandler = (option) => {
        setValue(option)
        switcher(false)
    }

    return (
        <>
            <div
                className={cl.breaker}
                onClick={() => switcher(false)}
                style={{ zIndex: zIndexes.selectBreaker }}
            />
            <ul className={cl.list} style={{ zIndex: zIndexes.selectOptions }}>
                {options.map(option => (
                    <li
                        className={cl.li}
                        key={option}
                        onClick={() => selectHandler(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default SelectOptions