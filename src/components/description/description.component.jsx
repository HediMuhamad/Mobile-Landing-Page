import React from "react";

export const Description = ({children, ...others}) => {
    const styles = others.className;
    return (
        <p className={`block w-11/12 text-center font-light ${styles}`}>{children}</p>
    )
}