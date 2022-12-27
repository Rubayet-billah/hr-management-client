import { Button, Label, Modal, Select, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';

const AddEmployeeModal = ({ addUserModalVisibility, setAddUserModalVisibility, refetch }) => {
  const { register, handleSubmit } = useForm();

  const addModalClose = () => {
    setAddUserModalVisibility(false);
  };

  const handleEmployeeAdd = (employeeData) => {
    console.log(employeeData);
    fetch('https://hr-management-server.vercel.app/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employeeData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          addModalClose();
          refetch();
        }
      });
  };

  return (
    <Modal show={addUserModalVisibility} size='6xl' popup={true} onClose={addModalClose}>
      <Modal.Header />
      <Modal.Body>
        <div className='px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
          <h3 className='text-xl mb-4 font-medium text-gray-900 dark:text-white'>Add New Employee</h3>
          <form onSubmit={handleSubmit(handleEmployeeAdd)}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='fullName' value='Full Name' />
                </div>
                <TextInput {...register('fullName')} id='fullName' placeholder='Full Name' required={true} />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='gender' value='Gender' />
                </div>
                <Select {...register('gender')} id='gender' required={true}>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </Select>
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='phone' value='Phone Number' />
                </div>
                <TextInput
                  type='tel'
                  pattern='[0-9]{11}'
                  {...register('phone')}
                  id='phone'
                  placeholder='01XXXXXXXXX'
                  required={true}
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='email' value='Email' />
                </div>
                <TextInput {...register('email')} type='email' id='email' placeholder='Email Address' required={true} />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='joiningDate' value='Joining Date' />
                </div>
                <TextInput {...register('joiningDate')} type='date' id='joiningDate' required={true} />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='department' value='Department' />
                </div>
                <Select {...register('department')} id='department' required={true}>
                  <option value='web development'>Web Development</option>
                  <option value='creativity and design'>Creativity And Design</option>
                  <option value='management'>Management</option>
                  <option value='marketing'>Marketing</option>
                  <option value='others'>Others</option>
                </Select>
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='role' value='Role' />
                </div>
                <Select {...register('role')} id='role' required={true}>
                  <option value='front-end developer'>Front-End Developer</option>
                  <option value='back-end developer'>Back-End Developer</option>
                  <option value='full stack developer'>Full Stack Developer</option>
                  <option value='app developer'>App Developer</option>
                  <option value='sqa engineer'>SQA Engineer</option>
                </Select>
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='salary' value='Salary' />
                </div>
                <TextInput {...register('salary')} type='number' id='salary' placeholder='00.00' required={true} />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='presentAddress' value='Present Address' />
                </div>
                <TextInput {...register('presentAddress')} id='presentAddress' type='text' required={true} />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='permanentAddress' value='Permanent Address' />
                </div>
                <TextInput {...register('permanentAddress')} id='permanentAddress' type='text' required={true} />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='nid' value='National ID' />
                </div>
                <TextInput {...register('nid')} id='nid' type='text' required={true} />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='maritalStatus' value='Marital Status' />
                </div>
                <Select {...register('maritalStatus')} id='maritalStatus' required={true}>
                  <option value='unmarried'>Unmarried</option>
                  <option value='married'>Married</option>
                </Select>
              </div>
            </div>
            <div className='w-full mt-4 '>
              <Button type='submit'>Add Employee</Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default AddEmployeeModal;
