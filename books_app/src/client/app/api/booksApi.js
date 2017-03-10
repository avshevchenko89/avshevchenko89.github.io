const books = [
    {
        id: 'node_up_and_running',
        title: 'Node: Up and Running',
        author: 'Tom Hughes-Croucher',
        authorId: 'tom_hughes_croucher',
        level: 'Advanced',
        image: 'http://jsbooks.revolunet.com/img/cover_upandrunningnode.png',
        description: 'Discover NodeJS booksApiS, tools, modules and best practices and learn how to extend it.'
    },
    {
        id: 'javaScript_design_patterns',
        title: 'JavaScript Design Patterns',
        author: 'Addy Osmani',
        authorId: 'addy_osmani',
        level: 'Beginner',
        image: 'http://jsbooks.revolunet.com/img/cover_jspatterns.png',
        description: 'In this book we will explore applying both classical and modern design patterns to the '
    },
    {
        id: 'survivejs_webpack',
        title: 'SurviveJS - Webpack',
        author: 'Juho Vepsäläinen',
        authorId: 'juho_vepsäläinen',
        level: 'Beginner',
        image: 'http://jsbooks.revolunet.com/img/cover_survivejs_webpack.png',
        description: 'Learn to understand Webpack, the bundler.'

    },
    {
        id: 'programming_javaScript_applications',
        title: 'Programming JavaScript Applications',
        author: 'Eric Elliott',
        authorId: 'eric_elliott',
        level: 'Intermediate',
        image: 'http://jsbooks.revolunet.com/img/Programming-JavaScript-Applications.jpg',
        description: 'Take advantage of JavaScript’s power to build robust web-scale or enterprise '
    },
    {
        id: 'javaScript_succinctly',
        title: 'JavaScript Succinctly',
        author: 'Cody Lindley',
        authorId: 'cody_lindley',
        level: 'Beginner',
        image: 'http://jsbooks.revolunet.com/img/cover_javascriptsuccinctly.png',
        description: 'JavaScript Succinctly was written to give readers an accurate, concise examination of '
    },
    {
        id: 'exploring_es6',
        title: 'Exploring ES6',
        author: 'Axel Rauschmayer',
        authorId: 'axel_rauschmayer',
        level: 'Intermediate',
        image: 'http://jsbooks.revolunet.com/img/cover_exploringes6.png',
        description: 'Upgrade to the next version of JavaScript'
    },
    {
        id: 'javascript_garden',
        title: 'JavaScript Garden',
        author: 'Ivo Wetzel',
        authorId: 'ivo_wetzel',
        level: 'Advanced',
        image: 'http://jsbooks.revolunet.com/img/cover_javascriptgarden.png',
        description: 'A collection of documentation about the most quirky parts of JavaScript.'
    },
    {
        id: 'ecmascript_language',
        title: 'ECMAScript Language',
        author: 'various authors',
        authorId: 'various_authors',
        level: 'Advanced',
        image: 'http://jsbooks.revolunet.com/img/ecma-262.jpg',
        description: 'Learn all about the Javacript language specifications with this official ECMA-262 bible.'
    },
    {
        id: 'understanding_ecmascript_6',
        title: 'Understanding ECMAScript 6',
        author: 'Nicholas C. Zakas',
        authorId: 'nicholas_c_zakas',
        level: 'Intermediate',
        image: 'http://jsbooks.revolunet.com/img/understandinges6.jpg',
        description: 'ECMAScript 6 is coming, are you ready? There\'s a lot of new concepts to learn and' +
        ' understand.'
    }
];

class booksApi {
    static getAllBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], books));
            }, 2000);
        });
    }
}

export default booksApi;
