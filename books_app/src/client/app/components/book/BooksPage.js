import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../../actions/booksActions';
import BooksList from './BooksList';
import { loadBooks } from '../../actions/booksActions';
import configureStore from '../../stores/configureStore';
import '../../styles/books.less';


const store = configureStore();
store.dispatch(loadBooks());

class BooksPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { books } = this.props;

        return (
            <section className="books">
                <h2>Books</h2>
                <BooksList books={ books }/>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(booksActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
