import { Button, Label, Modal, Select, TextInput } from 'flowbite-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { fetchEmployees } from '../../../../features/employees/employeesSlice';

const UpdateEmployeeModal = ({ updateModalVisibility, setUpdateModalVisibility, updateEmployee }) => {
  const { register, handleSubmit, reset } = useForm();

  console.log(updateEmployee);

  const addModalClose = () => {
    setUpdateModalVisibility(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    reset(updateEmployee);
  }, [updateEmployee, reset]);

  const handleEmployeeUpdate = (employeesUpdatedData) => {
    fetch(`https://hr-management-server.vercel.app/employees`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employeesUpdatedData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          dispatch(fetchEmployees());
          setUpdateModalVisibility(false);
          toast.success('Employee Data Updated');
        }
      });
  };

  return (
    <Modal show={updateModalVisibility} size='6xl' popup={true} onClose={addModalClose}>
      <Modal.Header />
      <Modal.Body>
        <div className='px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
          <h3 className='text-xl mb-4 font-medium text-gray-900 dark:text-white'>Update Employee Info</h3>
          <form onSubmit={handleSubmit(handleEmployeeUpdate)}>
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
                  <option value='IT'>IT</option>
                  <option value='Accounts'>Accounts</option>
                  <option value='Human Resource'>Human Resource</option>
                  <option value='Marketing'>Marketing</option>
                  <option value='Others'>Others</option>
                </Select>
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='role' value='Role' />
                </div>

                <Select {...register('role')} id='role' required={true}>
                  <option value='Front-End Developer'>Front-End Developer</option>
                  <option value='Back-End Developer'>Back-End Developer</option>
                  <option value='Full Stack Developer'>Full Stack Developer</option>
                  <option value='App Developer'>App Developer</option>
                  <option value='SQA Engineer'>SQA Engineer</option>
                  <option value='Network Engineer'>Network Engineer</option>
                  <option value='HR Manager'>HR Manager</option>
                  <option value='Executive HR'>Executive HR</option>
                  <option value='Finance Officer'>Finance Officer</option>
                  <option value='Cashier'>Cashier</option>
                  <option value='Marketing Officer'>Marketing Officer</option>
                  <option value='Marketing Manager'>Marketing Manager</option>
                  <option value='Junior Officer'>Junior Officer</option>
                  <option value='Executive Officer'>Executive Officer</option>
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
              <Button type='submit'>Update Employee Info</Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default UpdateEmployeeModal;
