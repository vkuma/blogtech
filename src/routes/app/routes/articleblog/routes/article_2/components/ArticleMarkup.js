import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import QueueAnim from 'rc-queue-anim';
import {ResponsiveEmbed, Image} from 'react-bootstrap';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';


import SITE from 'constants/articleData';
import ArticleContent from './ArticleContent';


const article = SITE.articles[2];

class ArticleMarkup extends React.Component {

    render() {
        return (
            <article className="article">
                <div className="pt-sm-4">
                    <div className="row">

                        <div className="col-xl-6">
                            <Card className="box box-transparent">
                                <CardHeader
                                    title={article.title}
                                    subheader={article.date}
                                />
                                <CardContent className="box-body">
                                    <p>{article.content}</p>
                                    <div className="divider my-4 divider-solid" />
                                </CardContent>

                                <ArticleContent />

                            </Card>
                        </div>
                    </div>
                </div>
            </article>
        );
    }

}

export default ArticleMarkup;
