import React from 'react';
import QueueAnim from 'rc-queue-anim';
import DEMO from 'constants/demoData';
import SITE from 'constants/articleData';
import ArticleMarkup from "../../articleblog/routes/article_template/components/Article";

const article = SITE.articles;

class Page extends React.Component {
  render() {
    return (
      <div className="container-fluid no-breadcrumb container-mw-lg chapter">
        <QueueAnim type="bottom" className="ui-animate">
          {
              article.map((article, i) => (
              <div key={i.toString()} className="mb-4">
                <div className="item-card card__horizontal">
                  <div className="card__image">
                    <a href={article.link}>
                      <img alt="product" src={article.img} />
                    </a>
                  </div>
                  <div className="card__body card-white">
                      <div className='container pr-0'>
                          <div className='row m-md-2'>
                              <div className="card__price">
                                  <span>{article.date}</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className="card__title">
                                  <a href={article.link}>{article.title}</a>
                                  <span>{article.category}</span>
                              </div>

                          </div>

                      </div>
                    <div className="divider divider-solid my-4" />
                    <p className="card__desc">{article.content}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </QueueAnim>
      </div>
    );
  }
}

export default Page;
