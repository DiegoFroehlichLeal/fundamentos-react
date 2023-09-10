import React from "react";
import DiretaFilho from "./DiretaFilho";

const DiretaPai = props => {


    return (
        <div>
            <DiretaFilho nome="Diego" idade={36} nerd={true} ></DiretaFilho>
            <DiretaFilho nome="Adriana" idade={46} nerd={false} ></DiretaFilho>
        </div>
    )
}

export default DiretaPai