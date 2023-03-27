import React from "react";
import classNames from "classnames";
import cl from './Loader.module.scss'

//sizes: m, l

const Loader = ({ className, size = 'm', ...props }) => {
    return (<div className={classNames(cl.loader, cl[size], className)} {...props} />)
}

export { Loader }