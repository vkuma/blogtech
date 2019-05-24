import React from 'react';
import QueueAnim from 'rc-queue-anim';
import SITE from 'constants/articleData';

const article = SITE.articles;

const z=3;

class Page extends React.Component {
  render() {
    return (
      <div className="no-breadcrumb chapter">
          <div className="py-4">
            <QueueAnim type="bottom" className="ui-animate">
              {
                  article.map((article, i) => {
                      if (i <= z) {
                          return (

                              <div key={i.toString()} className="mb-4">
                                  <div className="item-card">
                                      <div className="">
                                          <a href={article.link}>
                                              <img alt="product" src={article.img}/>
                                          </a>
                                      </div>
                                      <div className="card__body card-white">
                                          <div className="card__title">
                                              <a href="{article.link}">{article.title}</a>
                                              <span>{article.category}</span>
                                          </div>
                                          <div className="card__price">
                                              {/*<span className="type--strikethrough">$699.99</span>*/}
                                              {/*<span>{article.date}</span>*/}
                                          </div>
                                          <div className="divider divider-solid my-4"/>
                                          <p className="card__desc">{article.content}</p>
                                      </div>
                                  </div>
                              </div>

                          )
                      } else {
                          return (<div></div>)
                      }
                  })
              }
            </QueueAnim>
          </div>
      </div>
    );
  }
}

export default Page;
