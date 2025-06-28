import Landscape from '../../../assets/_Section 1.png'
import './About.scss'
import Dropdown from '../../utils/dropdown/Dropdown';

const About = () => {
  const dropdownData = [
    { title: "Fiabilité", content: ["Les annonces postés sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"] },
    { title: "Respect", content: ["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platedorme."] },
    { title: "Service", content: ["La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."] },
    { title: "Sécurité", content: ["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."] },
  ];

  return (
    <div className='about-container'>
      <div className='about-landscape-container'>
        <img src={Landscape} alt='landscape' className='about-landscape'/>
      </div>
      {dropdownData.map((dropdown, index) => (
        <div key={index} className='about-dropdown-container'>
          <Dropdown title={dropdown.title} content={dropdown.content} />
        </div>
      ))}
    </div>
  );
};

export default About;
