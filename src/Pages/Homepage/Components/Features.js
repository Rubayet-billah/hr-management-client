import onboardIcon from '../../../assets/icons/hired.png';
import organizeIcon from '../../../assets/icons/layers.png';
import calendarIcon from '../../../assets/icons/schedule.png';
import automaticIcon from '../../../assets/icons/system.png';

const Features = () => {
  return (
    <div className='container mx-auto px-5 md:px-0 py-16'>
      <div className='text-center mb-6'>
        <h2 className='text-3xl font-bold mb-1'>Why Stuff Deck is the Best HR Software!</h2>
        <p>Our HR Management Software Main Features.</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-5 mt-12'>
        <div className='text-center bg-gray-100 px-6 py-9 shadow-lg rounded-lg md:hover:-translate-y-3 duration-300'>
          <img className='w-16 md:w-24 mx-auto' src={automaticIcon} alt='icon' />
          <h4 className='font-bold mt-4 md:mt-8'>Automatic Repetitive Routines</h4>
          <p className='text-sm text-gray-600 mt-1'>Reduce recruiter workload significantly.</p>
        </div>
        <div className='text-center bg-gray-100 px-6 py-9 shadow-lg rounded-lg md:hover:-translate-y-3 duration-300'>
          <img className='w-16 md:w-24 mx-auto' src={onboardIcon} alt='icon' />
          <h4 className='font-bold mt-4 md:mt-8'>Onboard Faster</h4>
          <p className='text-sm text-gray-600 mt-1'>Cut down on new hire onboarding queries.</p>
        </div>
        <div className='text-center bg-gray-100 px-6 py-9 shadow-lg rounded-lg md:hover:-translate-y-3 duration-300'>
          <img className='w-16 md:w-24 mx-auto' src={organizeIcon} alt='icon' />
          <h4 className='font-bold mt-4 md:mt-8'>Organize Data Better</h4>
          <p className='text-sm text-gray-600 mt-1'>Securely store all employee data and files.</p>
        </div>
        <div className='text-center bg-gray-100 px-6 py-9 shadow-lg rounded-lg md:hover:-translate-y-3 duration-300'>
          <img className='w-16 md:w-24 mx-auto' src={calendarIcon} alt='icon' />
          <h4 className='font-bold mt-4 md:mt-8'>Manage Time Off Easier</h4>
          <p className='text-sm text-gray-600 mt-1'>Track and report time-off and absence.</p>
        </div>
      </div>
    </div>
  );
};
export default Features;
