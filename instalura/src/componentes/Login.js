import React from 'react';

class Login extends React.Component{
    render() {
        return(
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <form>
                    <input type="text"/>
                    <input type="password"/>
                    <input type="submit" value="Fazer Login"/>
                </form>
            </div>
        );
    }

}

export default Login;