import { Button, Label, Modal, Select, TextInput } from 'flowbite-react';

const AddEmployeeModal = ({ addUserModalVisibility, setAddUserModalVisibility }) => {
  const addModalClose = () => {
    setAddUserModalVisibility(false);
  };

  return (
    <Modal show={addUserModalVisibility} size='5xl' popup={true} onClose={addModalClose}>
      <Modal.Header />
      <Modal.Body>
        <div className='px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
          <h3 className='text-xl mb-4 font-medium text-gray-900 dark:text-white'>Add New Employee</h3>
          <form>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='firstName' value='First Name' />
                </div>
                <TextInput id='firstName' placeholder='First Name' required={true} />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='lastName' value='Last Name' />
                </div>
                <TextInput id='LastName' placeholder='Last Name' required={true} />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='phone' value='Phone Number' />
                </div>
                <TextInput id='phone' placeholder='Phone Number' required={true} />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='email' value='Email' />
                </div>
                <TextInput type='email' id='email' placeholder='Email Address' required={true} />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='joiningDate' value='Joining Date' />
                </div>
                <TextInput type='date' id='joiningDate' required={true} />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='department' value='Department' />
                </div>
                <Select id='department' required={true}>
                  <option>Information And Technology</option>
                  <option>Marketing</option>
                  <option>Creativity And Design</option>
                  <option>Others</option>
                </Select>
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='role' value='Role' />
                </div>
                <Select id='role' required={true}>
                  <option>Front-End Developer</option>
                  <option>Back-End Developer</option>
                  <option>Full Stack Developer</option>
                  <option>App Developer</option>
                  <option>SQA Engineer</option>
                </Select>
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='email' value='Salary' />
                </div>
                <TextInput type='number' id='email' placeholder='00.00' required={true} />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='fatherName' value='Father Name' />
                </div>
                <TextInput id='fatherName' type='text' required={true} />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='motherName' value='Mother Name' />
                </div>
                <TextInput id='motherName' type='text' required={true} />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='presentAddress' value='Present Address' />
                </div>
                <TextInput id='presentAddress' type='text' required={true} />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='permanentAddress' value='Permanent Address' />
                </div>
                <TextInput id='permanentAddress' type='text' required={true} />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='nid' value='National ID' />
                </div>
                <TextInput id='nid' type='text' required={true} />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='gender' value='Gender' />
                </div>
                <Select id='gender' required={true}>
                  <option>Male</option>
                  <option>Female</option>
                </Select>
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='maritalStatus' value='Marital Status' />
                </div>
                <Select id='maritalStatus' required={true}>
                  <option>Unmarried</option>
                  <option>Married</option>
                </Select>
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='spouseName' value='Spouse Name' />
                </div>
                <TextInput id='spouseName' type='text' required={true} />
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
