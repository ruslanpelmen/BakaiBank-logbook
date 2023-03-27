import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLang } from '../../store/slices/langSlice'
import { ReactComponent as Ico } from '../../images/logo_full.svg'
import { Button, Container, LanguageToggler } from "../components";
import { logout } from '../../store/slices/authSlice'
import langs from '../../langs/langs'
import cl from './Header.module.scss'

const Header = () => {
    const dispatch = useDispatch()
    const currentLang = useSelector(state => state.lang.currentLang)

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header className={cl.header}>
            <Container className={cl.container}>
                <Ico className={cl.logo} />
                <LanguageToggler />
                <Button
                    className={cl.button}
                    size='m'
                    onClick={logoutHandler}
                >
                    {langs[currentLang].logout_buttonValue}
                </Button>
            </Container>
        </header>
    )
}

export { Header }