import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components";
import { toggleLang } from "../../store/slices/langSlice";
import cl from './LanguageToggler.module.scss'

const LanguageToggler = ({ className }) => {
    const dispatch = useDispatch()
    const currentLang = useSelector(state => state.lang.currentLang)

    const toggleLangHandler = () => {
        dispatch(toggleLang())
    }

    return (
        <Button className={className} size='s' onClick={toggleLangHandler}>
            <span className={cl.toggler}>{currentLang}</span>
        </Button >
    )
}

export { LanguageToggler }