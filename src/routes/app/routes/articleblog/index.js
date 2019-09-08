import React from 'react';
import { Route } from 'react-router-dom';

import Article0 from './routes/article_0';
import Article1 from './routes/article_1/';
import Article2 from './routes/article_2/';
import Article3 from './routes/article_3/';
import Article4 from './routes/article_4/';


const ArticleBlog = ({ match }) => (
    <div>
        <Route path={`${match.url}/article_4`} component={Article4}/>
        <Route path={`${match.url}/article_3`} component={Article3}/>
        <Route path={`${match.url}/article_2`} component={Article2}/>
        <Route path={`${match.url}/article_1`} component={Article1}/>
        <Route path={`${match.url}/article_0`} component={Article0}/>
    </div>
)

export default ArticleBlog;
