import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { TextField, Container, Button, LanguageToggler, Background } from '../../components/components'
import ServiceLinks from "../../constants/ServiceLinks";
import langs from '../../langs/langs'
import cl from './RoleGuidePage.module.scss'

const fields = [
    'title',
    'login',
    'email',
    'fullName',
    'branchOffice',
    'jobTitle',
    'comment',
]

const RoleGuidePage = ({ className }) => {
    const dispatch = useDispatch()
    const currentLang = useSelector(state => state.lang.currentLang)
    const [values, setValues] = useState(Object.fromEntries(fields.map(item => [item, ''])));

    const addHandle = () => {
        const info = { ...values }
        console.log(info)
        setValues(fields.reduce((acc, item) => {
            acc[item] = ''
            return acc
        }, {}))
    }

    return (
        <Background>
            <Container className={classNames(cl.container, className)}>
                <div className={cl.block}>
                    <LanguageToggler className={cl.toggler} />
                    <h1 className='formTitle'>{langs[currentLang].roleGuide_title}</h1>
                    <form className='form' onSubmit={e => e.preventDefault()}>
                        {fields.map(field => {
                            if (field === 'comment') {
                                return (
                                    <TextField
                                        textarea
                                        key={field}
                                        placeholder={langs[currentLang][`roleGuide_${field}`]}
                                        value={values.comment}
                                        onChange={e => setValues({ ...values, [field]: e.target.value })}
                                    />)
                            } else {
                                return (<TextField
                                    className={cl.input}
                                    key={field}
                                    size='m'
                                    placeholder={langs[currentLang][`roleGuide_${field}`]}
                                    value={values[field]}
                                    onChange={e => setValues({ ...values, [field]: e.target.value })}
                                />)
                            }
                        }
                        )}
                        <Button className={cl.button} size='m' onClick={addHandle}>
                            {langs[currentLang].roleGuide_buttonValue}
                        </Button>
                    </form>
                </div>
            </Container >
        </Background>
    )
}

export { RoleGuidePage }