import React from "react";
import classNames from "classnames";
import cl from './Button.module.scss'

//variant: default, pagination
//size: s, m, l

const Button = ({
    children,
    className,
    pagination,
    size = 'm',
    ...props
}) => {
    return (
        <button
            className={classNames(
                cl.button,
                cl[size],
                pagination ? cl.pagination : cl.default,
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export { Button }