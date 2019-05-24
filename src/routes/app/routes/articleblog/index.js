import React from 'react';
import { Route } from 'react-router-dom';

import ArticleTemp from './routes/article_template';
import Article1 from './routes/article_1/';


const ArticleBlog = ({ match }) => (
    <div>
        <Route path={`${match.url}/article_1`} component={Article1}/>
        <Route path={`${match.url}/article_template`} component={ArticleTemp}/>
    </div>
)

export default ArticleBlog;
