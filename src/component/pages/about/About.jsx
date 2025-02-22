import Landscape from '../../../assets/_Section 1.png'
import './About.scss'
import Dropdown from '../../utils/dropdown/Dropdown';

const About = () => {
  const dropdownData = [
    { title: "Fiabilité", content: ["Les annonces postés sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"] },
    { title: "Respect", content: ["content 1", "content 2", "content 3"] },
    { title: "Service", content: ["something", "else", "here"] },
    { title: "Sécurité", content: ["item 1", "item 2", "item 3"] },
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
