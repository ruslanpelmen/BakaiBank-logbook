import React from "react";
import classNames from "classnames";
import { Container } from "../components";
import cl from './PageTitle.module.scss'

const PageTitle = ({ className, children }) => {
    return (
        <h1 className={classNames(cl.title, className)}>
            <Container>{children}</Container>
        </h1>
    )
}

export { PageTitle }