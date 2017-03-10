import React from 'react';
import BookListItem from './BooksListItem';


const BookList = ({ books }) => {
    return (
        <div className="books-list">
            {books.map(book => 
                <BookListItem key={ book.id } book={ book } />
            )}
        </div>
    )
};

export default BookList;
