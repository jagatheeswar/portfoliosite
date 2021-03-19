import port1 from '../img/portImages/fake.jpg';
import port2 from '../img/portImages/stop.jpg';
import port3 from '../img/portImages/blog.png';
import port4 from '../img/portImages/commerce.jpg';


const portfolios = [
    {
        id: 1,
        category: 'AI',
        category2: 'done',
        link1: 'https://fakenewstestmodel.herokuapp.com/',
        link2: 'https://github.com/jagatheeswar/fakenewstestmodel',
        icon1: 'G',
        icon2: 'Y',
        image: port1,
        para: 'Did it for assam police hackathon. Did it using Artificial intelligence. we trained the model and deployed in heroku platform. our team project was among the top 25 projects.',
        title: 'Fakenews detection AI' 
    },
    {
        id: 2,
        category: 'Embedded systems',
        category2: 'done',
        link1: 'www.youtube.com',
        link2: 'https://github.com/jagatheeswar/vehiclestopper',
        icon1: 'G',
        icon2: 'Y',
        image: port2,
        title: 'Vehicle stopper',
        para: 'Did it for NIT-T pragyan. It can be used to stop a vehicle remotely. It helps to prevent road crimes. helps in the betterment of the society.'
    },
    {
        id: 3,
        category: 'Django',
        category2: 'doing',
        link1: '#',
        link2: '#',
        icon1: 'G',
        icon2: 'Y',
        image: port3,
        para: 'Blog site using django (ongoing)',
        title: 'Blogging site'
    },
    {
        id: 4,
        category: 'Node.js',
        category2: 'doing',
        link1: '#',
        link2: '#',
        icon1: 'G',
        icon2: 'Y',
        image: port4,
        para: 'E-commerce website for a nearby stores using nodejs (ongoing)',
        title: 'E-commerce website'
    }
]

export default portfolios;