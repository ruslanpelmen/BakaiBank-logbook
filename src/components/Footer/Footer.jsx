import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../components";
import langs from '../../langs/langs'
import cl from './Footer.module.scss'

const Footer = () => {
    const currentLang = useSelector(state => state.lang.currentLang)

    return (
        <div className={cl.footer}>
            <Container>
                <h4 className={cl.title}>{langs[currentLang].footer_title}</h4>
            </Container>
        </div>
    )
}

export { Footer }