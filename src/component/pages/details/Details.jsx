import { useParams, useNavigate } from 'react-router-dom';
import data from "../../../../file.json";
import { useEffect, useState } from 'react';
import './Details.scss';
import Dropdown from '../../utils/dropdown/Dropdown';
import StarFull from '../../../assets/Star-Full.png';
import StarEmpty from '../../../assets/Star-Empty.png';
import ArrowLeft from '../../../assets/leftArrow.png';
import ArrowRight from '../../../assets/rightArrow.png';

const CardDetail = () => {
    const { id } = useParams();
    const [pageInfo, setPageInfo] = useState({});
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const item = data.find((element) => element.id === id);
        if (item) {
            setPageInfo(item);
            setCurrentImageIndex(0);
        } else {
            navigate('/not-found');
        }
    }, [id, navigate]);

    useEffect(() => {
        if (pageInfo?.pictures && pageInfo.pictures.length > 0) {
            pageInfo.pictures.forEach((src) => {
                const img = new Image();
                img.src = src;
            });
        }
    }, [pageInfo]);

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

 const handlePreviousImage = () => {
    if (!pageInfo.pictures || pageInfo.pictures.length === 0) return;
    setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? pageInfo.pictures.length - 1 : prevIndex - 1
    );
};

const handleNextImage = () => {
    if (!pageInfo.pictures || pageInfo.pictures.length === 0) return;
    setCurrentImageIndex((prevIndex) =>
        prevIndex === pageInfo.pictures.length - 1 ? 0 : prevIndex + 1
    );
};

    return (
        <div className="details-container">
            <div className="details-image-container">
                {pageInfo.pictures && pageInfo.pictures.length > 0 && (
                    <>
                        {pageInfo.pictures.length > 1 && (
                            <button className="arrow arrow-left" onClick={handlePreviousImage}>
                                <img src={ArrowLeft} alt="Previous" />
                            </button>
                        )}

                        <img
                            className="details-property-image"
                            src={pageInfo.pictures[currentImageIndex]}
                            alt={pageInfo.title}
                        />

                        {pageInfo.pictures.length > 1 && (
                            <div className="details-carousel-indicator">
                                {currentImageIndex + 1} / {pageInfo.pictures.length}
                            </div>
                        )}

                        {pageInfo.pictures.length > 1 && (
                            <button className="arrow arrow-right" onClick={handleNextImage}>
                                <img src={ArrowRight} alt="Next" />
                            </button>
                        )}
                    </>
                )}
            </div>
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
                    <Dropdown title="Équipements" content={pageInfo?.equipments || ["Aucun équipement disponible"]} />
                </div>
            </div>
        </div>
    );
};

export default CardDetail;
