import Project from './Project';

function SomeProjects() {
  const projects = [{
    title: 'Music sharing quotes',
    photo: '../../assets/musicquotes.jpg',
    description: 'Website sharing quotes about what the great music leaders said about music',
    language: ['html', 'css', 'javascript'],
    live: 'https://pamphilemkp.github.io/Music-sharing-quotes/',
    source: 'https://github.com/Pamphilemkp/Music-sharing-quotes',
  },
  {
    title: 'Any country info',
    photo: '../../assets/anycountry.jpg',
    description: 'SPA website giving general overview information about any country in the wolrd',
    language: ['JSX', 'css', 'React', 'Redux', 'API', 'Jest'],
    live: 'https://pamphilemkp-countries-info.netlify.app/',
    source: 'https://github.com/Pamphilemkp/any-country-info',
  },
  {
    title: 'Book store',
    photo: 'https://github.com/Pamphilemkp/book-store/raw/dev/App_screenShot/Screenshot%20(68).png',
    description: 'SPA library for books,  a user can add and delete an author and book category',
    language: ['JSX', 'css', 'React', 'Redux', 'API', 'Jest'],
    live: 'https://pamphilemkp-bookstore.netlify.app/',
    source: 'https://github.com/Pamphilemkp/book-store',
  },
  {
    title: 'Car reservation',
    photo: 'https://user-images.githubusercontent.com/63063973/210940767-63845699-6351-44c3-a778-45267a0ac52e.png',
    description: 'A car renting website where a user can book, add and delete the car, also cancel the reservation booked',
    language: ['React', 'Redux', 'API', 'Jest', 'capybara', 'ruby', 'rails'],
    live: 'under-construction',
    source: 'https://github.com/Pamphilemkp/car-reservation-frontend',
  },
  ];

  // console.log(projects);

  return (
    <div className="project-contents">
      <Project project={projects} />
    </div>
  );
}

export default SomeProjects;
