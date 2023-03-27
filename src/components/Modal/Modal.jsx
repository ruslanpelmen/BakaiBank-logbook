import React from "react";
import classNames from "classnames";
import zIndexes from "../../constants/zIndexes";
import cl from './Modal.module.scss'

const Modal = ({ children, toggler }) => {
    return (
        <div className={cl.wrapper} onClick={() => toggler(false)} style={{ zIndex: zIndexes.modal }}>
            <div className={cl.container} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export { Modal }