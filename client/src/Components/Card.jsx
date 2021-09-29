import { Link } from 'react-router-dom';
import '../Css/Card.css';
import { Fragment } from 'react';

function Card({image, name, id}){

    if(image.url){
        image=image.url
    }else{
      
    }

    return (
        <Fragment>
        <div className="container">
            <Link to={`/description/${id}`}>
            <img className="img" src={image} alt="img dog" style={{width: "180px", height: "160px"}} />
            <label className="label1">Nombre:   </label> 
            <label className="label1">{name}</label>
            </Link><br />
        </div>
        </Fragment>
    )
}

export default Card;