import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authorsActions from '../../actions/authorsActions';
import AuthorsList from './AuthorsList';
import { loadAuthors } from '../../actions/authorsActions';
import configureStore from '../../stores/configureStore';
import '../../styles/authors.less';


const store = configureStore();
store.dispatch(loadAuthors());

class AuthorsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { authors } = this.props;

        return (
            <section className="authors">
                <h2>Authors</h2>
                <AuthorsList authors={authors} />
            </section>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
