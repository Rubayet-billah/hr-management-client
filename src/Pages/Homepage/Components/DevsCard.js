import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';

const DevsCard = ({ dev }) => {
  return (
    <div className='flex gap-5 items-center shadow-lg bg-gray-100 rounded-lg overflow-hidden'>
      <img className='w-5/12 aspect-square object-cover' src={dev.image} alt='' />
      <div className='w-7/12'>
        <h4 className='text-lg font-medium'>{dev.name}</h4>
        <p className='text-sm text-gray-600'>{dev.position}</p>

        <div className='flex gap-2 items-center mt-4 text-xl'>
          <a href={dev.linkedInLink} target='_blank' rel="noreferrer">
            <AiFillLinkedin />
          </a>
          <a href={dev.githubLink} target='_blank' rel="noreferrer">
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
export default DevsCard;
