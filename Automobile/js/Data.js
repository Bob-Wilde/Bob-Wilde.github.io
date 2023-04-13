const CarData = [
    {
        id: 'kdhjfh',
        brand: 'Nissan',
        img:"Images/nissan-sentra.webp",
        price: 457518.58,
        name: 'Nissan Sentra',
        desc: 'Sentra Midnight Edition is built to turn heads. Features impressive black styling, including exclusive Nissan badging, black exterior accents, and a sport interior trim.',
        properties: ['Front Wheel', 'Gasoline', '550p', 'Manual'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",'41 reviews']

    },
    {
        id: 'dfljgk',
        brand: 'Toyota',
        img:"Images/toyo.jpeg",
        price: 757518.58,
        name: 'Toyota Camry',
        desc: 'Toyota Camrys tech-focused interior offers one incredibly connected driver experience. Available Advanced Park * makes fitting into a tight spot as si.',
        properties: ['Rear Wheel', 'Diesel', '650p', 'Automatic'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",'31 reviews']

    },
    {
        id: 'gksdhg',
        brand: 'BENZ',
        img:"Images/benz.jpg",
        price: 1457518.58,
        name: 'Mercedes EQS',
        desc: 'The Mercedes-AMG EQS launches the future of all-electric Driving Performance. It can rush a seamless torrent of AMG torque to all four of its wheels.',
        properties: ['All Wheel', 'Electric', '850p', 'Automatic'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",'61 reviews']

    },
    {
        id: 'lasda',
        brand: 'Bentley',
        img:"Images/nissan-sentra.webp",
        price: 867518.58,
        name: 'Bentley Bentayga',
        desc: 'The New Bentayga EWB* offers an interior environment unlike any other SUV. Far more than just a luxury car, this extended wheelbase SUV is a showcase.',
        properties: ['Front Wheel', 'Hybrid', '550p', 'Manual'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star-half'></i>",'31 reviews']

    },
    {
        id: 'apoid',
        brand: 'Toyota',
        img:"Images/toyota-crown.avif",
        price: 657518.58,
        name: 'Toyota Crown',
        desc: 'Toyota Crown is a dynamic combination of elements: the executive styling of a premium sedan, the flowing shape of a sports car, and the elevated car.',
        properties: ['Rear Wheel', 'Diesel', '650p', 'Manual'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star-half'></i>",'43 reviews']

    },
    {
        id: 'kdfuys',
        brand: 'Lamborghini',
        img:"Images/lambogini.webp",
        price: 18457518.58,
        name: 'Revuelto',
        desc: 'Lamborghini has established a new benchmark in performance, on-board technology, and driving pleasure. The ultimate thrill provided by the Revuelto.',
        properties: ['Front Wheel', 'Gasoline', '1150p', 'Automatic'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",'55 reviews']

    },
    {
        id: 'klxcv',
        brand: 'Mazda',
        img:"Images/mazda.jpg",
        price: 557518.58,
        name: 'Mazda CX-5 2.5',
        desc: 'The 2023 Mazda CX-5 2.5 Turbo offers a distinct aesthetic that beckons to be driven. It’s outfitted with a gloss black grille, signature wing and lower.',
        properties: ['All Wheel', 'Gasoline', '750p', 'Manual'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star-half'></i>",'27 reviews']

    },
    {
        id: 'sdkfjn',
        brand: 'Chevrolet',
        img:"Images/chev.webp",
        price: 957518.58,
        name: 'Trailblazer ',
        desc: 'Chevrolet is surprisingly spacious for a small SUV. Features like the reversible two-tier adaptable cargo storage system give you plenty of room for.',
        properties: ['All Wheel', 'Hybrid', '850p', 'Automatic'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",'38 reviews']

    },
    {
        id: 'sadkfjn',
        brand: 'GMC',
        img:"Images/gmc.avif",
        price: 567748.58,
        name: 'GMC Ultravision',
        desc: 'Using multiple cameras to display a digital overhead image of the area around HUMMER EV, HD Surround Vision allows you to maneuver off-road and navig.',
        properties: ['Rear Wheel', 'Gasoline', '450p', 'Manual'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star-half'></i>",'22 reviews']

    },
    {
        id: 'kshdfl',
        brand: 'Honda',
        img:"Images/honda.webp",
        price: 46358.58,
        name: 'Honda Boldness',
        desc: 'It comes in a lighter, fuel-efficient 1.5L VTEC® TURBO engine. Assures with the Honda Sensing suite of safety technology.Come purchase affordable cars.',
        properties: ['Front Wheel', 'Diesel', '450p', 'Manual'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",'19 reviews']

    },
    {
        id: 'zfdsf',
        brand: 'Hyundai',
        img:"Images/hyundai.jpg",
        price: 98718.58,
        name: 'Hyundai Azera',
        desc: 'The Seamless Horizon Lamp represents the Timeless Pioneer’s constant pursuit for progress and evolution. Its light’s silhouette was inspired by the.',
        properties: ['All Wheel', 'Hybrid', '550p', 'Automatic'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",'51 reviews']

    },
    {
        id: 'sadksa',
        brand: 'Mitsubishi',
        img:"Images/mit.png",
        price: 921518.58,
        name: 'Outlander',
        desc: 'They say it’s the inside that counts. But if you want to step ahead from the rest you need a car that’s an absolute head-turner.',
        properties: ['Front Wheel', 'Electric', '850p', 'Manual'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star-half'></i>",'43 reviews']

    },
    {
        id: 'sladpi',
        brand: 'Hyundai',
        img:"Images/veloster.jpg",
        price: 59518.58,
        name: 'Hyundai Veloster',
        desc: 'They say it’s the inside that counts. But if you want to step ahead from the rest you need a car that’s an absolute head-turner.',
        properties: ['All Wheel', 'Diesel', '450p', 'Automatic'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",'38 reviews']

    },
    {
        id: 'dsvxls',
        brand: 'BMW',
        img:"Images/bmw.jpg",
        price: 72758.58,
        name: 'BMW iX M60',
        desc: 'Explore the first purely electric BMW M model in the performance segment of the Sports Activity Vehicle (SAV): 1.Fully electric drive with two BMW M e',
        properties: ['All Wheel', 'Electric', '990p', 'Automatic'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",'59 reviews']

    },
    {
        id: 'dkjvd',
        brand: 'Infiniti',
        img:"Images/infiniti.jpg",
        price: 2597518.58,
        name: 'Infiniti Q60',
        desc: 'Infiniti Q60 is one of the prettiest coupes on the road, and every trim has a healthy twin-turbo V-6, its not as compelling as the competition.',
        properties: ['All Wheel', 'Hybrid', '880p', 'Automatic'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",'58 reviews']

    },
    {
        id: 'sadgd',
        brand: 'Mitsubishi',
        img:"Images/mit.png",
        price: 277518.58,
        name: 'Mitsubishi',
        desc: 'The 2023 Outlander PHEV delivers an enhanced driving experience thanks to the power of Mitsubishi’s evolved S-AWC system. Developed from our .',
        properties: ['Front Wheel', 'Gasoline', '410p', 'Manual'],
        reviews:[" <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star-half'></i>",'28 reviews']

    },
]
