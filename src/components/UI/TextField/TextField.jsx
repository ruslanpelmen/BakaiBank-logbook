import React from "react";
import classNames from "classnames";
import cl from './TextField.module.scss'

//size: xs, s, m, l

const TextField = ({
    className,
    size = 'm',
    textarea,
    title,
    ...props
}) => {
    return (
        <label className={classNames(cl.label, className)}>
            {title && <h4 className={classNames(cl.title, cl[size])}>{title}</h4>}
            {textarea
                ? <textarea className={cl.field} {...props} />
                : <input className={classNames(cl.field, cl[size])} {...props} />}
        </label>
    )
}

export { TextField }