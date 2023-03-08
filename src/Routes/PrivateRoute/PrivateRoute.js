import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Lodaer from '../../Pages/Shared/Lodaer/Lodaer';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    // const navigat = useNavigate()
    const location = useLocation();
    if(loader){
       return  <Lodaer></Lodaer>
    }
    if(user && user?.uid){
        return children
    }
    else{
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default PrivateRoute;