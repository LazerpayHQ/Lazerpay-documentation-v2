import clsx from "clsx";
import React from "react";

interface IProps { 
    children: React.ReactNode, 
    fluid?: Boolean
}

const LzContainer = ({ children, fluid }: IProps)=> (
    <div className={clsx(
        {
            'xl:px-20 md:px-6 lg:px-10': !fluid
        },
        "max-w-full px-4 mx-auto md:max-w-screen-lg lg:max-w-screen-2xl 2xl:max-w-screen-3xl")}>
        {children}
    </div>
)

export default LzContainer;
