import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../Contexts/AuthContext';

const PrivateRoute = ({children, ...rest}) => {
    const {currentUser} = useAuth()
    return (
        <Route
        {...rest}
        render={({ location }) =>
            currentUser ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location },
                    }}
                />
            )
        }
    />
    );
};

export default PrivateRoute;