const authors = [
    {
        id: 'tom_hughes_croucher',
        name: 'Tom Hughes-Croucher',
        bio: 'Tom Hughes-Croucher is a British Internet programmer, entrepreneur, author, and public speaker.[1] He\'s worked for and with numerous well known brands, including Walmart, Yahoo!, NASA, MySpace, Joyent, Tesco, Three Telecom, and UK Channel 4. He has been the acting Chief Technology Officer for Change.org since November 2012.',
        books: [
            {
                title: 'Node: Up and Running',
                level: 'Advanced',
                image: 'http://jsbooks.revolunet.com/img/cover_upandrunningnode.png',
                description: 'Discover NodeJS booksApiS, tools, modules and best practices and learn how to extend it.'
            }
        ]
    },
    {
        id: 'addy_osmani',
        name: 'Addy Osmani',
        bio: 'Engineer at Google working on open web tooling',
        books: [
            {
                title: 'JavaScript Design Patterns',
                level: 'Beginner',
                image: 'http://jsbooks.revolunet.com/img/cover_jspatterns.png',
                description: 'In this book we will explore applying both classical and modern design patterns to the '
            },
            {
                title: 'Developing Backbone.js Applications',
                level: 'Intermediate',
                image: 'http://jsbooks.revolunet.com/img/cover_jspatterns.png',
                description: 'Traditionally, web applications left the heavy-lifting of data to servers that pushed HTML to the browser in complete page loads. The use of client-side JavaScript was limited to improving the user experience. Now this relationship has been inverted - client applications pull raw data from the server and render it into the browser when and where it is needed. '
            }
        ]
    },
    {
        id: 'juho_vepsalainen',
        name: 'Juho Vepsäläinen',
        bio: 'Juho Vepsäläinen develops content below @survivejs. Mostly React and Webpack so far.',
        books: [
            {
                title: 'SurviveJS - Webpack',
                level: 'Beginner',
                image: 'http://jsbooks.revolunet.com/img/cover_survivejs_webpack.png',
                description: 'Learn to understand Webpack, the bundler.'
            }
        ]
    },
    {
        id: 'eric_elliott',
        name: 'Eric Elliott',
        bio: 'Eric Elliott is a veteran JavaScript application architect. He has contributed to software experiences for Adobe Systems, Zumba Fitness, The Wall Street Journal, ESPN, BBC, and top recording artists including Usher, Frank Ocean, Metallica, and many more. He is an author, frequent public speaker, and consultant on UX and viral application development. He lives in the San Francisco bay area with the most beautiful woman in the world.',
        books: [
            {
                title: 'Programming JavaScript Applications',
                level: 'Intermediate',
                image: 'http://jsbooks.revolunet.com/img/Programming-JavaScript-Applications.jpg',
                description: 'Take advantage of JavaScript’s power to build robust web-scale or enterprise '
            }
        ]
    },
    {
        id: 'cody_lindley',
        name: 'Cody Lindley',
        bio: 'Cody Lindley is a front-end/JavaScript developer and recovering Flash developer. He has an extensive background working professionally (18+ years) with HTML, CSS, JavaScript, and client-side performance techniques as it pertains to web development. If he is not wielding client-side code he is likely toying with interface/interaction design or front-end application architecture. When not sitting in front of a computer, it\'s a sure bet he is hanging out with his wife & three boys in Meridian, Idaho. In his spare time Cody is working towards being a "One Dollar Apologist" and enjoys defending the evidence for a classical Christian world-view with reason and empathy.',
        books: [
            {
                title: 'JavaScript Succinctly',
                level: 'Beginner',
                image: 'http://jsbooks.revolunet.com/img/cover_javascriptsuccinctly.png',
                description: 'JavaScript Succinctly was written to give readers an accurate, concise examination of '
            },
            {
                title: 'jQuery Cookbook',
                level: 'Beginner',
                image: 'http://akamaicovers.oreilly.com/images/9780596159788/lrg.jpg',
                description: 'jQuery simplifies building rich, interactive web frontends. Getting started with this JavaScript library is easy, but it can take years to fully realize its breadth and depth; this cookbook shortens the learning curve considerably. With these recipes, you\'ll learn patterns and practices from 19 leading developers who use jQuery...'
            }
        ]
    },
    {
        id: 'axel_rauschmayer',
        name: 'Axel Rauschmayer',
        bio: '	Axel has been programming since 1985 and developing web applications since 1995. In 1999, he was technical manager at a German Internet startup that later expanded internationally. In 2006, he held his first talk on Ajax.\nAxel has done extensive research into programming language design and has followed the state and future of JavaScript since its creation.\nLocated in Munich, Germany. Speaks German, English, French, and Spanish.',
        books: [
            {
                title: 'Exploring ES6',
                level: 'Intermediate',
                image: 'http://jsbooks.revolunet.com/img/cover_exploringes6.png',
                description: 'Upgrade to the next version of JavaScript'
            }
        ]
    },
    {
        id: 'ivo_wetzel',
        name: 'Ivo Wetzel',
        bio: 'Apparently, Ivo Wetzel prefers to keep an air of mystery about them.',
        books: {
            title: 'JavaScript Garden',
            level: 'Advanced',
            image: 'http://jsbooks.revolunet.com/img/cover_javascriptgarden.png',
            description: 'A collection of documentation about the most quirky parts of JavaScript.'
        }
    },
    {
        id: 'various_authors',
        name: 'Various authors.',
        bio: 'various authors',
        books: {
            title: 'ECMAScript Language',
            level: 'Advanced',
            image: 'http://jsbooks.revolunet.com/img/ecma-262.jpg',
            description: 'Learn all about the Javacript language specifications with this official ECMA-262 bible.'
        }
    },
    {
        id: 'nicholas_c_zakas',
        name: 'Nicholas C. Zakas',
        bio: 'Nicholas C. Zakas started working on web applications in 2000 and instantly fell in love. Since that time, He\'s focused on front-end technology such as HTML, CSS, and JavaScript, digging in and learning all of the skills and tricks necessary to make performant, beautiful, and maintainable front-ends.',
        books: [
            {
                title: 'Understanding ECMAScript 6',
                level: 'Intermediate',
                image: 'http://jsbooks.revolunet.com/img/understandinges6.jpg',
                description: 'ECMAScript 6 is coming, are you ready? There\'s a lot of new concepts to learn and' +
                ' understand.'
            },
            {
                title: 'Professional JavaScript for Web Developers',
                level: 'Advanced',
                image: 'https://images-na.ssl-images-amazon.com/images/I/51-GRqC7HOL._SX359_BO1,204,203,200_.jpg',
                description: 'Professional JavaScript for Web Developers, 2nd Edition, provides a developer-level introduction along with the more advanced and useful features of JavaScript.\nStarting at the beginning, the book explores how JavaScript originated and evolved into what it is today. A detailed discussion of the components that make up a JavaScript implementation follows, with specific focus on standards such as ECMAScript and the Document Object Model (DOM).'
            }
        ]
    }
];


class authorsApi {
    static getAllAuthors() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], authors));
            }, 2000);
        });
    }
}

export default authorsApi;