/* eslint-disable react/prop-types */
import Card from './Card';
import './CardsList.scss';

const CardsList = ({ data }) => {
  return (
    <div className="cards-list-container">
          {data.map((item) => (
            <Card key={item.id} image={item.cover} title={item.title} id={item.id} />
          ))}
    </div>
  );
};

export default CardsList;
