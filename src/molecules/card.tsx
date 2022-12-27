import { FC } from "react";
import Button from "../components/atoms/button/button";
import Img from "../components/atoms/img/img";

import "./Card.scss";

interface CardProps{
    url:string
}

const Card:FC<CardProps> = ({url}) =>{
    return <div className="Card">
        <Img url={url}/>
        <Button text="Eliminar" children/>
    </div>
}

export default Card;