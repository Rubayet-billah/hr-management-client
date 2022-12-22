const Hero = () => {
  return (
    <section class='container mx-auto px-2'>
      <div class='grid py-8 lg:py-16 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 items-center min-h-[60vh]'>
        <div class='mr-auto lg:col-span-8'>
          <h1 class='max-w-2xl capitalize mb-4 text-3xl font-bold leading-none md:text-4xl xl:text-5xl dark:text-white'>
            The smart HR software for growing businesses!
          </h1>
          <p class='max-w-xl mb-6 text-gray-500 text-sm lg:mb-8 md:text-lg dark:text-gray-400'>
            Modernize your HR. Manage your hiring, onboarding, time-off, employee data, and HR workflows in one place.
          </p>
        </div>
        <div class='hidden lg:mt-0 lg:col-span-4 lg:flex'>
          <img
            className='w-full'
            src='https://website-assets-fw.freshworks.com/attachments/cksdn5uaf01quprg0w6fvkl6v-freshteam-smart-hr-software-by-freshworks.one-half.webp'
            alt='hero'
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
