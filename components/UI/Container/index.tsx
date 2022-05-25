import classNames from "classnames";
import React from "react";

interface IProps { 
    children: React.ReactNode, 
    fluid?: Boolean
}

const LzContainer = ({ children, fluid=false}: IProps)=> (
    <div className={classNames(
        {
            'xl:px-20 md:px-6 lg:px-10 mx-auto md:max-w-screen-lg lg:max-w-screen-2xl 2xl:max-w-screen-3xl': !fluid
        },
        "max-w-full w-full mx-auto")}>
        {children}
    </div>
)

export default LzContainer;
