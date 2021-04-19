import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import DashboardNav from '../DashboardNav/DashboardNav';
import OrderList from '../OrderList/OrderList';
import AddService from './AddService/AddService';
import ManageService from './ManageService/ManageService';
import Reviews from './Reviews/Reviews';

const Dashboard = () => {
    const {path} = useRouteMatch()
    return (
        <section>
        <div style={{height:"10vh"}}>
        <DashboardNav/>
        </div>
        <div style={{height: "90vh"}}>
        <Switch>
            
            <Route path="/dashboard/addService">
                <AddService />
            </Route>
            <Route path="/dashboard/reviews">
                <Reviews />
            </Route>
            <Route path="/dashboard/manageService">
                <ManageService />
            </Route>
            <Route exact path={path}>
                <OrderList/>
            </Route>
        </Switch>
        </div>
        </section>
    );
};

export default Dashboard;