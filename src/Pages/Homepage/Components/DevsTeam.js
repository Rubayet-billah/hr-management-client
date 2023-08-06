import DevsCard from './DevsCard';

import maruf from '../../../assets/devs/Md-Maruf-Hossain.jpg';
import badsha from '../../../assets/devs/Md.Badsha fahadh.jpg';
import naem from '../../../assets/devs/naem.jpg';
import rajib from '../../../assets/devs/rajib.jpeg';
import rubayet from '../../../assets/devs/rubayet_billah.jpg';
import tarek from '../../../assets/devs/tarekul_islam.jpg';

const devs = [
  {
    id: 1,
    name: 'Tarekul Islam',
    position: 'Full Stack Developer',
    image: tarek,
    githubLink: '',
    linkedInLink: '',
    skills: ['html, css, javascript, react, node, mongoDB'],
  },
  {
    id: 2,
    name: 'Rubayet Billah',
    position: 'Tech Lead',
    image: rubayet,
    githubLink: '',
    linkedInLink: '',
    skills: ['html, css, javascript, react, node, mongoDB'],
  },
  {
    id: 3,
    name: 'Naem Hossain',
    position: 'MERN Stack Developer',
    image: naem,
    githubLink: '',
    linkedInLink: '',
    skills: ['html, css, javascript, react, node, mongoDB'],
  },
  {
    id: 4,
    name: 'Md. Badsha Fahadh',
    position: 'Full Stack Developer',
    image: badsha,
    githubLink: '',
    linkedInLink: '',
    skills: ['html, css, javascript, react, node, mongoDB'],
  },
  {
    id: 5,
    name: 'Md Maruf Hossain',
    position: 'Software Engineer',
    image: maruf,
    githubLink: 'https://github.com/mickeymaruf',
    linkedInLink: 'https://www.linkedin.com/in/mickeymaruf/',
    skills: ['html, css, javascript, react, node, mongoDB'],
  },
  {
    id: 6,
    name: 'Rajib Das',
    position: 'Back-End Developer',
    image: rajib,
    githubLink: '',
    linkedInLink: '',
    skills: ['html, css, javascript, react, node, mongoDB'],
  },
];

const DevsTeam = () => {
  return (
    <div className='container mx-auto px-5 md:px-0 py-12'>
      <div className='text-center mb-8'>
        <h3 className='text-4xl font-bold mb-1'>Our Team</h3>
        <p className='capitalize'>Let's meet out creative developer team.</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12'>
        {devs.map((dev) => (
          <DevsCard key={dev.id} dev={dev} />
        ))}
      </div>
    </div>
  );
};
export default DevsTeam;
