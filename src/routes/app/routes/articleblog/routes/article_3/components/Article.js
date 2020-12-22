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
import ArticleMarkup  from './ArticleMarkup';


import loadable from 'react-loadable';

import LoadingComponent from 'components/Loading';

let ArticlePanev2 = loadable({
    loader: () => import('routes/app/routes/articlepanev2/'),
    loading: LoadingComponent
});

const article = SITE.articles[3];

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    image: {
        flex: 1,
        width: 1/4,
        height: null,
        resizeMode: 'contain'
    },
    nopadding: {
        paddingRight: 0,
        paddingLeft: 0,
    }
};


const Hero = () => (
    <section className="hero text-center text-body-reverse">
      <div className="hero-bg-img" style={{backgroundImage: 'url('+article.img+')'}}></div>
      <div className="hero-inner">
        <h1 className="hero-title text-body-reverse">{article.title}</h1>
        <p className="hero-lead">{article.content}</p>
      </div>
    </section>
);

const ArticleCard = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">

        <div key="1"><Hero /></div>
        <div className='container-fluid'>
            <div className='row'>
                <div key="2" className="col-sm-8"><ArticleMarkup /></div>
                <div key="3" className="col-sm-4" style={styles.nopadding}><ArticlePanev2 /></div>
            </div>
        </div>
    </QueueAnim>
  </section>
);

export default ArticleCard;
