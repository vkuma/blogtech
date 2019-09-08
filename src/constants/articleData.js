const SITE = {
    link: 'javascript:;', // javascript:;
    home: '#/app/home',
    home2: '/app/home',
    productLink: 'https://themeforest.net/item/material-design-reactjs-admin-web-app-with-bootstrap-4/19582625',
    gitLink: 'https://github.com/vkuma',
    user: 'Vin',
    login: '#/user/login',
    signUp: '#/user/sign-up',
    forgotPassword: '#/user/forgot-password',
};

// header links
SITE.headerLink = {
    profile: '#/app/page/about',
    about: '#/app/page/about',
    help: '#/app/page/contact',
    signOut: '#/user/login' // redirect login page
};

SITE.articles = [
    {
        img: 'assets/article-assets/article0/covers/cover.jpg',
        date: 'August 20th, 2019',
        title: 'Making a High Precision Hot Wire Cutter from an Old ATX Computer PSU',
        content: 'Learn how a hot wire cutter works and how to create one from scratch using a computer\'s old PSU as a power bench and some PVC.',
        tag: 'Quotes',
        author: 'Vin Kumar',
        avatar: 'assets/article-assets/avatars/vinpic.jpg',
        category: 'Build',
        link: '#/app/articleblog/article_0'
    }, {
        img: 'assets/article-assets/article1/covers/cover.jpg',
        date: 'May 18th, 2019',
        title: 'Flashing A PIC MCU: Making your first PIC Program',
        content: 'Learn how to create your first C program for a PIC micro-controlling unit! Fun!',
        tag: 'Quotes',
        author: 'Vin Kumar',
        avatar: 'assets/article-assets/avatars/vinpic.jpg',
        category: 'C Programming',
        link: '#/app/articleblog/article_1'
    }, {
        img: 'assets/article-assets/article2/covers/cover.jpg',
        date: 'July 1st, 2019',
        title: 'Creating design blocks from open-source breakout boards in EagleCAD',
        content: 'Learn how to make design block from existing open-source EagleCad files for later use!',
        tag: 'Quotes',
        author: 'Vin Kumar',
        avatar: 'assets/article-assets/avatars/vinpic.jpg',
        category: 'EagleCAD',
        link: '#/app/articleblog/article_2'
    }, {
        img: 'assets/article-assets/article3/covers/cover.jpg',
        date: 'July 3rd, 2019',
        title: 'Making a Portable, Compact, Level Warning System',
        content: 'Creating a level warning system that detects a gradual change in in position from the transceiver and sends an alert to the receiver device.  ',
        tag: 'Quotes',
        author: 'Vin Kumar',
        avatar: 'assets/article-assets/avatars/vinpic.jpg',
        category: 'Development',
        link: '#/app/articleblog/article_3'
    }, {
        img: 'assets/article-assets/article4/covers/cover.jpg',
        date: 'September 8th, 2019',
        title: 'Redesigning the Level Warning System',
        content: 'Creating a level warning system that detects a gradual change in in position from the transceiver and sends an alert to the receiver device.  ',
        tag: 'Quotes',
        author: 'Vin Kumar',
        avatar: 'assets/article-assets/avatars/vinpic.jpg',
        category: 'Build',
        link: '#/app/articleblog/article_4'
    }
];

export default SITE;

