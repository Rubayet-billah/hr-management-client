import { Button, Label, Textarea, TextInput } from 'flowbite-react';

const Contact = () => {
  return (
    <div className='container mx-auto px-2 py-12'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold text-gray-800 mb-2'>Contact Us</h2>
        <p className='text-gray-600 mb-6'>Please Leave Your Message</p>
      </div>

      <form className='max-w-4xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3'>
          <div>
            <div className='mb-1 block'>
              <Label htmlFor='fullName' value='Your Name' />
            </div>
            <TextInput id='fullName' type='text' placeholder='Your Name' required={true} />
          </div>
          <div>
            <div className='mb-1 block'>
              <Label htmlFor='email' value='Your Email' />
            </div>
            <TextInput id='email' type='email' placeholder='Your Email' required={true} />
          </div>

          <div className='md:col-span-2'>
            <div className='mb-1 block'>
              <Label htmlFor='comment' value='Your message' />
            </div>
            <Textarea id='comment' placeholder='Leave a message...' required={true} rows={4} />
          </div>
        </div>
        <div className='flex justify-end'>
          <Button className='mt-4 px-6' type='submit'>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
