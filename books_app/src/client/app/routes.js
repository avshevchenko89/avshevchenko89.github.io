import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import BooksPage from './components/book/BooksPage';
import BookPage from './components/book/BookPage';
import AuthorsPage from './components/author/AuthorsPage';
import AuthorPage from './components/author/AuthorPage';


export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ HomePage } />
        <Route path="books" component={ BooksPage } />
        <Route path="/books/:id" component={ BookPage } />
        <Route path="authors" component={ AuthorsPage } />
        <Route path="/authors/:id" component={ AuthorPage } />
    </Route>
);
