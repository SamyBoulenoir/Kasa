import React from 'react';
import './NotFound.scss'
import ErrorRedirection from '../../../../assets/404.png'
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={ErrorRedirection} alt="404" className='not-found-img'/>
            <p className='not-found-text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='link-text '>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default NotFound