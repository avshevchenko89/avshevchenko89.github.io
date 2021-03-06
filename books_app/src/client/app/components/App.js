import React from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';


class App extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                { this.props.children }
            </div>
        );
    }
}

export default connect()(App);
