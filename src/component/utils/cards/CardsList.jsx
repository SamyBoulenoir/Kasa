/* eslint-disable react/prop-types */
import Card from './Card';
import './CardsList.scss';

const CardsList = ({ data }) => {
  const rows = [];
  for (let i = 0; i < data.length; i += 3) {
    rows.push(data.slice(i, i + 3));
  }

  return (
    <div className="cards-list-container">
      {rows.map((row, rowIndex) => (
        <div className="cards-row" key={rowIndex}>
          {row.map((item) => (
            <Card key={item.id} image={item.cover} title={item.title} id={item.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardsList;
