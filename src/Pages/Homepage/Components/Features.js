import onboardIcon from '../../../assets/icons/hired.png';
import organizeIcon from '../../../assets/icons/layers.png';
import calendarIcon from '../../../assets/icons/schedule.png';
import automaticIcon from '../../../assets/icons/system.png';

const Features = () => {
  return (
    <div className='container mx-auto px-2 py-16'>
      <h2 className='text-center text-3xl font-bold'>Why Stuff Deck is the Best HR Software!</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-12'>
        <div className='text-center bg-gray-100 px-6 py-8 shadow-lg'>
          <img className='h-32 mx-auto' src={automaticIcon} alt='icon' />
          <h4 className='font-bold mt-6'>Automatic Repetitive Routines</h4>
          <p className='text-gray-600 mt-1'>Reduce recruiter workload upto 75%.</p>
        </div>
        <div className='text-center bg-gray-100 px-6 py-8 shadow-lg'>
          <img className='h-32 mx-auto' src={onboardIcon} alt='icon' />
          <h4 className='font-bold mt-6'>Onboard Faster</h4>
          <p className='text-gray-600 mt-1'>Cut down on new hire onboarding queries.</p>
        </div>
        <div className='text-center bg-gray-100 px-6 py-8 shadow-lg'>
          <img className='h-32 mx-auto' src={organizeIcon} alt='icon' />
          <h4 className='font-bold mt-6'>Organize Data Better</h4>
          <p className='text-gray-600 mt-1'>Securely store all employee data and files.</p>
        </div>
        <div className='text-center bg-gray-100 px-6 py-8 shadow-lg'>
          <img className='h-32 mx-auto' src={calendarIcon} alt='icon' />
          <h4 className='font-bold mt-6'>Manage Time Off Easier</h4>
          <p className='text-gray-600 mt-1'>Track and report time-off and absence.</p>
        </div>
      </div>
    </div>
  );
};
export default Features;
