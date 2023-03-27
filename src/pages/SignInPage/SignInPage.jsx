import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextField, Button, Container, LanguageToggler } from '../../components/components'
import { ReactComponent as Ico } from '../../images/logo_small.svg'
import langs from '../../langs/langs'
import cl from './SignInPage.module.scss'

const SignInPage = () => {
    const currentLang = useSelector(state => state.lang.currentLang)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const signInHandle = (e) => {
        console.log('signed in')
    }

    return (
        <>
            <div className={cl.icoWrapper}><Ico className={cl.ico} /></div>
            <div className={cl.wrapper}>
                <Container className={cl.container}>
                    <div className={cl.block}>
                        <LanguageToggler className={cl.toggler} />
                        <h1 className='formTitle'>{langs[currentLang].signIn_title}</h1>
                        <form className='form' onSubmit={(e) => e.preventDefault()}>
                            <TextField
                                className={cl.input}
                                size='l'
                                value={login}
                                onChange={e => setLogin(e.target.value)}
                                placeholder={langs[currentLang].signIn_loginPlaceholder}
                            />
                            <TextField
                                className={cl.input}
                                size='l'
                                type='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder={langs[currentLang].signIn_passwordPlaceholder}
                            />
                            <Button className={cl.button} size='l' onClick={signInHandle}>
                                {langs[currentLang].signIn_buttonValue}
                            </Button>
                        </form>
                    </div>
                </Container>
            </div >
        </>
    )
}

export { SignInPage }