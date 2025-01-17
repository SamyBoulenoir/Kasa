/* eslint-disable react/prop-types */
import "./Card.scss"
import { Link } from "react-router-dom";

const Card = ({image, title, id}) => {
    return (
        <Link to={`/card/${id}`} className="card-container">
            <img className="card-container-img" src={image} alt="background"/>
            <p>{title}</p>
        </Link>
    )
}

export default Card;