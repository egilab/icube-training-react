import React from 'react';
import CategoryList from "../Components/CategoryList"
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import { NotFound } from '../Pages/Index';

function Category(props) {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`} component={NotFound} />
            <Route path={`${path}/:categoryId`} component={CategoryItem} />
        </Switch>
    )
}

function CategoryItem() {
    let { categoryId } = useParams();
    return (
        <div className="wrapper">
            <CategoryList id={categoryId} />
        </div>
    )
}

export default Category;