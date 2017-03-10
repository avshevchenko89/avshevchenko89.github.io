import React from 'react';
import { Link, IndexLink } from 'react-router';
import '../../styles/header.less';


class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1>Books Application</h1>
                <nav>
                    <IndexLink to="/" activeClassName="active-link">Home</IndexLink>
                    <Link to="/books" activeClassName="active-link">Books</Link>
                    <Link to="/authors" activeClassName="active-link">Authors</Link>
                </nav>
            </header>
        );
    }
}

export default Header;
