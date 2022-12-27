import { FC } from "react";
import "./image.scss";

interface ImgProps {
  url: string;
}

const Img: FC<ImgProps> = ({ url }) => {
  return <img src={url} className={"img"} />;
};

export default Img;
