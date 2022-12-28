import DevsCard from './DevsCard';

import maruf from '../../../assets/devs/Md-Maruf-Hossain.jpg';
import badsha from '../../../assets/devs/Md.Badsha fahadh.jpg';
import rubayet from '../../../assets/devs/rubayet_billah.jpg';
import tarek from '../../../assets/devs/tarekul_islam.jpg';

const devs = [
  {
    id: 1,
    name: 'Tarekul Islam',
    position: 'Full Stack Developer',
    image: tarek,
    githubLink: '/',
    linkedInLink: '/',
    skills: ['html, css, javascript, react, node, mongoDB'],
  },
  {
    id: 2,
    name: 'Rubayet Billah',
    position: 'Tech Lead',
    image: rubayet,
    githubLink: '/',
    linkedInLink: '/',
    skills: ['html, css, javascript, react, node, mongoDB'],
  },
  {
    id: 3,
    name: 'Nayeem Islam',
    position: 'Web Developer',
    image:
      'https://images.unsplash.com/photo-1592790807458-d7980c141d90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
    githubLink: '/',
    linkedInLink: '/',
    skills: ['html, css, javascript, react, node, mongoDB'],
  },
  {
    id: 4,
    name: 'Md. Badsha Fahadh',
    position: 'Web Developer',
    image: badsha,
    githubLink: '/',
    linkedInLink: '/',
    skills: ['html, css, javascript, react, node, mongoDB'],
  },
  {
    id: 5,
    name: 'Md Maruf Hossain',
    position: 'Full Stack Developer',
    image: maruf,
    githubLink: 'https://github.com/mickeymaruf',
    linkedInLink: 'https://www.linkedin.com/in/mickeymaruf/',
    skills: ['html, css, javascript, react, node, mongoDB'],
  },
  {
    id: 6,
    name: 'Rajib Das',
    position: 'Web Developer',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
    githubLink: '/',
    linkedInLink: '/',
    skills: ['html, css, javascript, react, node, mongoDB'],
  },
];

const DevsTeam = () => {
  return (
    <div className='container mx-auto px-2 py-12'>
      <div className='text-center mb-8'>
        <h3 className='text-4xl font-bold mb-1'>Our Team</h3>
        <p className='capitalize'>Let's meet out creative developer team.</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
        {devs.map((dev) => (
          <DevsCard key={dev.id} dev={dev} />
        ))}
      </div>
    </div>
  );
};
export default DevsTeam;
