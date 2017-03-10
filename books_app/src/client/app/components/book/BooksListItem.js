import React from 'react';
import { Link } from 'react-router';


class BooksListItem extends React.Component {
    loadBook() {

    }
    render() {
        const { book } = this.props;
        return (
            <div className="books-list-item clearfix">
                <img src={ book.image } alt={`${ book.title } cover`}/>
                <Link to={ `/books/${ book.id }` } className="book-title">{ book.title }</Link>
                <Link to={ `/authors/${ book.authorId }` } className="book-author">{ book.author }</Link>
            </div>
        );
    }
}

export default BooksListItem;
