import Band from '../../../assets/Mask Group.png'
import './Home.scss'
import CardsList from '../../utils/cards/CardsList';
import data from "../../../../file.json"

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-landscape-container'>
        <p>Chez vous, partout et ailleurs</p>
        <img className="home-landscape" src={Band} alt="background"/>
      </div>
      <div className='home-cards-list-container'>
        <CardsList data={data}/>
      </div>
    </div>
  );
};

export default Home;
