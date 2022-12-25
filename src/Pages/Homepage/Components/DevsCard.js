import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';

const DevsCard = ({ dev }) => {
  return (
    <div className='shadow-lg pb-6 px-4 bg-gray-900 text-white rounded-md'>
      <img
        className='w-24 rounded-full overflow-hidden mx-auto -mt-12 outline outline-2 outline-blue-700 outline-offset-8'
        src='https://images.unsplash.com/photo-1592790807458-d7980c141d90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60'
        alt=''
      />
      <div className='text-center mt-6'>
        <h4 className='text-lg font-medium'>{dev.name}</h4>
        <p className='text-sm'>Web Developer</p>
      </div>

      <div className='flex justify-center gap-2 items-center mt-4 text-xl'>
        <a href='/' target='_blank'>
          <AiFillLinkedin />
        </a>
        <a href='/' target='_blank'>
          <AiOutlineGithub />
        </a>
      </div>
    </div>
  );
};
export default DevsCard;
