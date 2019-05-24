const SITE = {
    link: 'javascript:;', // javascript:;
    home: '#/app/home',
    home2: '/app/home',
    productLink: 'https://themeforest.net/item/material-design-reactjs-admin-web-app-with-bootstrap-4/19582625',
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
        img: 'assets/article-assets/articleTemp/covers/cover.jpg',
        date: 'May 18th, 2019',
        title: 'Template Title',
        content: 'Abstract',
        tag: 'Quotes',
        author: 'Vin Kumar',
        avatar: 'assets/article-assets/avatars/vinpic.jpg',
        category: 'Category',
        link: '#/app/articleblog/article_template'
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
        img: 'assets/images-demo/assets/600_400-2.jpg',
        date: 'May 1st',
        title: "When You're in Love",
        content: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        tag: 'Quotes',
        author: 'Dr. Seuss',
        avatar: 'assets/images-demo/avatars/5.jpg',
        category: 'Web Design',
        link: '#/app/articleblog/article_1'
    }, {
        img: 'assets/images-demo/assets/600_400-3.jpg',
        date: 'May 1st',
        title: 'Once is Enough',
        content: 'You only live once, but if you do it right, once is enough.',
        tag: 'Quotes',
        author: 'Mae West',
        avatar: 'assets/images-demo/avatars/5.jpg',
        category: 'Development',
        link: '#/app/articleblog/article_1'
    }, {
        img: 'assets/images-demo/assets/600_400-4.jpg',
        date: 'May 1st',
        title: 'Be the Change You Wish to See',
        content: 'Be the change that you wish to see in the world.',
        tag: 'Quotes',
        author: 'Mahatma Gandhi',
        avatar: 'assets/images-demo/avatars/5.jpg',
        category: 'Development',
        link: '#/app/articleblog/article_1'
    }, {
        img: 'assets/images-demo/assets/600_400-5.jpg',
        date: 'May 1st',
        tag: 'Quotes',
        title: 'Music Matters',
        content: 'Without music, life would be a mistake',
        author: 'Friedrich Nietzsche',
        avatar: 'assets/images-demo/avatars/5.jpg',
        category: 'Marketing',
        link: '#/app/articleblog/article_1'
    }, {
        img: 'assets/images-demo/assets/600_400-6.jpg',
        date: 'May 1st',
        title: 'To know a Man',
        content: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        tag: 'Quotes',
        author: 'J.K. Rowling',
        avatar: 'assets/images-demo/avatars/5.jpg',
        category: 'Marketing',
        link: '#/app/articleblog/article_1'
    }
];

export default SITE;

