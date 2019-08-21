import React from 'react';

class Logout extends React.Component{

    componentWillMount() {
        localStorage.removeItem('auth-token');
        this.props.history.push('/');
    }

    render() {
        return null
    }
}
export default Logout;