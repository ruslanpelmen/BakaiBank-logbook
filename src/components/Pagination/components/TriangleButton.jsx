import React from "react";
import { ReactComponent as PrevIco } from '../../../images/prev.svg';
import { ReactComponent as NextIco } from '../../../images/next.svg';
import cl from './TriangleButton.module.scss'

const TriangleButton = ({ onClick, variant }) => {
    return (
        <button className={cl.button} onClick={onClick}>
            {variant === 'prev' ? <PrevIco /> : <NextIco />}
        </button>
    )
}

export { TriangleButton }