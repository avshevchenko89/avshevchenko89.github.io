import React from 'react';
import '../../styles/book.less';


const BookPage = ({ book }) => {
    console.log('this', this);
    console.log('book::: ', book);
    return (
        <div className="book-page">Book Page</div>
    )
};

export default BookPage;
