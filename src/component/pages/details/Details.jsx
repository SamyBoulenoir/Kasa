import { useParams } from 'react-router-dom';

const CardDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Détails de la carte</h1>
      <p>ID de la carte : {id}</p>

    </div>
  );
};

export default CardDetail;
