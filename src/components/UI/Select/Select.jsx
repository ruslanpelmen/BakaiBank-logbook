import React, { useEffect, useState } from "react";
import classNames from "classnames";
import cl from './Select.module.scss'
import SelectOptions from "./components/SelectOptions/SelectOptions";

const Select = ({ className, currentValue, options, onChange }) => {
    const [active, setActive] = useState(false)
    const longest = options.reduce((acc, item) => acc.length < item.toString().length ? item : acc, '')

    return (
        <div className={classNames(cl.select, className)}>
            <div className={cl.header} onClick={() => setActive(!active)} style={{ width: longest.toString().length + .5 + 'em' }}>
                <span className={cl.title}>{currentValue}</span>
                <div className={classNames(cl.trinalge, active && cl.activeTriangle)} />
            </div>
            {active && <SelectOptions options={options} switcher={setActive} setValue={onChange} />}
        </div>
    )
}

export { Select }