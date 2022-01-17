import React from 'react';
import {connect} from "react-redux";

const Home = (props) => {
    return (
        <div>
          <h1>{props.login}</h1>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, null)(Home);