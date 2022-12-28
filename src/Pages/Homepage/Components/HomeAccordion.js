import { Accordion } from 'flowbite-react';

const HomeAccordion = () => {
  const accordionData = [
    {
      id: 1,
      title: 'Short Time To Hire',
      details:
        'With one-click job posting to multiple job board, single central hub to screen & interview applicants, collaborate over hiring decisions, and roll out offers - hire smarter and faster.',
    },
    {
      id: 2,
      title: 'Paperless New Hire Onboarding.',
      details:
        'Get better onboarding completion rates as you send out documents to sign, forms to fill and distribute handbooks - all this even before they join and with a few clicks.',
    },
    {
      id: 3,
      title: 'Powerful Recruitment Automation.',
      details:
        'With intelligent customizable workflows, leave follow ups, screening, stakeholder notifications and other routine recruiting chores to the Autopilot. Focus on what matters.',
    },
    {
      id: 4,
      title: 'Data-Backed HR Decision Making.',
      details:
        'Track HR goals and progress with reports on HR metrics like time-to-hire, candidate pipeline, employee turnover, retention and more. Get HR Insights delivered whenever you want.',
    },
  ];

  return (
    <div className='container mx-auto px-2 py-12'>
      <div className='text-center mb-6'>
        <h3 className='text-4xl font-bold mb-1'>Why Stuff Deck?</h3>
        <p>Here Is Some FAQ.</p>
      </div>
      <div className='max-w-5xl mx-auto mt-12'>
        <Accordion alwaysOpen>
          {accordionData.map((data) => (
            <Accordion.Panel key={data.id}>
              <Accordion.Title className='focus:ring-0'>{data.title}</Accordion.Title>
              <Accordion.Content>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>{data.details}</p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
export default HomeAccordion;
