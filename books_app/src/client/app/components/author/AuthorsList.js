import React from 'react';
import AuthorsListItem from './AuthorsListItem';


const AuthorsList = ({authors}) => {
    return (
        <ul className="authors-list">
            {authors.map(author =>
                <AuthorsListItem key={author.id} author={author}/>
            )}
        </ul>
    )
};

export default AuthorsList;
