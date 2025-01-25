import { useParams, useNavigate } from 'react-router-dom';
import data from "../../../../file.json";
import { useEffect, useState } from 'react';
import './Details.scss';
import Dropdown from '../../utils/dropdown/Dropdown';
import StarFull from '../../../assets/Star-Full.png';
import StarEmpty from '../../../assets/Star-Empty.png';

const CardDetail = () => {
    const { id } = useParams();
    const [pageInfo, setPageInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const item = data.find((element) => element.id === id);
        if (item) {
            setPageInfo(item);
        } else {
            navigate('/not-found');
        }
    }, [id, navigate, pageInfo]);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <img
                    key={i}
                    src={i < rating ? StarFull : StarEmpty}
                    alt={i < rating ? "Full star" : "Empty star"}
                    className="details-star"
                />
            );
        }
        return stars;
    };

    return (
        <div className="details-container">
            {pageInfo.cover && <img className='details-property-image' src={pageInfo.cover} alt={pageInfo.title} />}
            <div className="details-info">
                <div className="details-name-tag">
                    <h1 className='details-page-title'>{pageInfo.title}</h1>
                    <div> {pageInfo.location} </div>
                    <div className='details-tag-container'>
                        {pageInfo.tags?.map((tag, index) => (
                            <span key={index} className="details-tag">#{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="details-picture-rating">
                    <div className='details-name-picture-container'>
                        <div className='details-profile-name'> {pageInfo.host?.name} </div>
                        <img
                            className="details-profile-picture"
                            src={pageInfo.host?.picture}
                            alt="Profile"
                        />
                    </div>
                    <div className="details-rating-container">
                        {renderStars(parseInt(pageInfo.rating, 10))}
                    </div>
                </div>
            </div>
            <div className="details-dropdown-container">
                <div className="details-dropdown">
                    <Dropdown title="Description" content={[pageInfo.description]} />
                </div>
                <div className="details-dropdown">
                    <Dropdown title="Equipement" content={pageInfo?.tags || ["error"]} />
                </div>
            </div>
        </div>
    );
};

export default CardDetail;
