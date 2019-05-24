import React from 'react';
import Button from '@material-ui/core/Button';
import QueueAnim from 'rc-queue-anim';
import SITE from 'constants/articleData';
import classnames from "classnames";
import './styles.scss';

const articles = SITE.articles;

const styles = {
    a_nostyle: {
        "textDecoration": "inherit",
        "color": "inherit",
    },
    nopadding: {
        paddingRight: 0,
        paddingLeft: 0,
    }
};

class Thumbnail extends React.Component {

    render() {
        console.log("lffsfdfsdf");
        console.log(articles);
        console.log("gfseafadfa");
        return (
            <section className="chapter">
                <QueueAnim type="bottom" className="ui-animate">
                    {
                        articles.map((article, i) => {
                            console.log(i%2==0);
                            if (i%2==0) {
                                return (
                                    <div className="feature-callout feature-content-right" key={( i + 1).toString()}>
                                        <div className="col-12 col-md-6 feature-callout-image-pull" style={{backgroundImage: 'url('+article.img+')'}}  />
                                        <div className="container-fluid container-mw-xl">
                                            <div className="col-12 col-md-6 offset-md-6">
                                                <div className="callout-feature-content">
                                                    <h4><a href={article.link} style={styles.a_nostyle}>{article.title}</a></h4>
                                                    <article className="blog-item">
                                                        <div className="blog-info">
                                                            <span><img src={article.avatar} alt="avatar" className="avatar" /></span>
                                                            <span><a href={article.link} className="author">{article.author}</a></span>
                                                            <span className="date">{article.date}</span>
                                                            <span className="category"><a href={article.link}>{article.category}</a></span>
                                                        </div>
                                                    </article>
                                                    <div>{article.content}</div>
                                                    <Button variant="contained" color="primary" className="btn-cta" href={article.link}>Read Now</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="feature-callout feature-content-left" key={( i + 1).toString()}>
                                        <div className="col-12 col-md-6 offset-md-6 feature-callout-image-pull" style={{backgroundImage: 'url('+article.img+')'}} />
                                        <div className="container-fluid container-mw-xl">
                                            <div className="col-12 col-md-6">
                                                <div className="callout-feature-content">
                                                    <h4>{article.title}</h4>
                                                    <article className="blog-item">
                                                        <div className="blog-info">
                                                            <span><img src={article.avatar} alt="avatar" className="avatar" /></span>
                                                            <span><a href={article.link} className="author">{article.author}</a></span>
                                                            <span className="date">{article.date}</span>
                                                            <span className="category"><a href={SITE.link}>{article.category}</a></span>
                                                        </div>
                                                    </article>
                                                    <div>{article.content}</div>
                                                    <Button variant="contained" color="primary" className="btn-cta" href={article.link}>Read Now</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </QueueAnim>
            </section>
        )
    }

}

export default Thumbnail;
