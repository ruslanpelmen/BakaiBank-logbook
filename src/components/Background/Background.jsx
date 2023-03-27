import React from "react";
import classNames from "classnames";
import { ReactComponent as Rect1 } from '../../images/rect1.svg'
import { ReactComponent as Rect2 } from '../../images/rect2.svg'
import { ReactComponent as Rect3 } from '../../images/rect3.svg'
import { ReactComponent as Rect4 } from '../../images/rect4.svg'
import cl from './Background.module.scss'

const Background = ({ children, variant }) => {
    return (
        <>
            <div className={cl.bg}>
                <div className={cl.bg}>
                    {variant === 'header'
                        ? <>
                            <Rect3 className={classNames(cl.rect, cl.rect3)} />
                            <Rect4 className={classNames(cl.rect, cl.rect4)} />
                        </>
                        : <>
                            <Rect1 className={classNames(cl.rect, cl.rect1)} />
                            <Rect2 className={classNames(cl.rect, cl.rect2)} />
                        </>}
                </div>
            </div>
            {children}
        </>
    )
}

export { Background }