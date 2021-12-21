import React from "react";
import { Header } from "../header/header.component";
import { Description } from "../description/description.component";

export const TextContent = ({headerText, paragraphText,...others}) => {
    const styles = others.className;
    return(
        <div className={`w-full aspect-[1/0.6] p-3 flex flex-col items-center justify-evenly ${styles}`}>
            <Header>{headerText}</Header>
            <Description>{paragraphText}</Description>
        </div>
    )
}