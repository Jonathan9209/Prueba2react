import { FC } from "react";
import Button from "../components/atoms/button/button";
import Img from "../components/atoms/img/img";

import "./Card.scss";

interface CardProps{
    img:string
}

const Card:FC<CardProps> = ({img}) =>{
    return <div className="Card">
        <Img url={img}/>
        <Button text="Eliminar" children/>
    </div>
}

export default Card;