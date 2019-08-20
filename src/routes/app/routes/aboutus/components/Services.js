import React from 'react';
import QueueAnim from 'rc-queue-anim';
import DEMO from 'constants/demoData';
import SITE from 'constants/articleData';

const Hero = () => (
    <section className="hero text-center text-body-reverse">
      <div className="hero-bg-img" style={{backgroundImage: 'url(assets/article-assets/background/2.png)'}}></div>
      <div className="hero-inner">
        <h1 className="hero-title text-body-reverse">Everything we do!</h1>
        <p className="hero-lead">We provide amazing solutions that you can't miss</p>
      </div>
    </section>
);

const Services = () => (
  <article className="article article-bordered">

    <div className="container-fluid container-mw-xl py-5">
      <div className="row">
        <div className="col-xl-4">
          <div className="box box-default">
            <div className="box-body">
              <div className="icon-box ibox-plain ibox-center">
                <div className="ibox-icon">
                  <a href={SITE.link}><i className="material-icons">create</i></a>
                </div>
                <h3 className="mb-1">Web Design</h3>
                <p>I've spent years creating websites in a variety of designs ranging from all types of languages, frameworks, and programming pattern styles.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="box box-default">
            <div className="box-body">
              <div className="icon-box ibox-plain ibox-center">
                <div className="ibox-icon">
                  <a href={SITE.link}><i className="material-icons">code</i></a>
                </div>
                <h3 className="mb-1">Programming</h3>
                <p>I've been programming since early high school and ever since I have evolved my skills and my range of coding knowledge. This includes a multitude of programming languages, styles and implementation.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="box box-default">
            <div className="box-body">
              <div className="icon-box ibox-plain ibox-center">
                <div className="ibox-icon">
                  <a href={SITE.link}><i className="material-icons">laptop</i></a>
                </div>
                <h3 className="mb-1">Development</h3>
                <p>As an engineering student involved with many product developments styles for a multitude of projects and products. Thanks to this, I am greatly skilled in many aspects relating to the project management frameworks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <div className="box box-default">
            <div className="box-body">
              <div className="icon-box ibox-plain ibox-center">
                <div className="ibox-icon">
                  <a href={SITE.link}><i className="material-icons">track_changes</i></a>
                </div>
                <h3 className="mb-1">Adaptability</h3>
                <p>Simply put,  I am able to adapt, improvise, and overcome and obstacle. Even when I am given projects completely foreign I am able to research and develop my own knowledge base required to complete said project.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="box box-default">
            <div className="box-body">
              <div className="icon-box ibox-plain ibox-center">
                <div className="ibox-icon">
                  <a href={SITE.link}><i className="material-icons">public</i></a>
                </div>
                <h3 className="mb-1">Networking</h3>
                <p>I'm pretty social, so if you want to contact me for any reason, even if just for a chat. Give me a ring.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </article>
);

const Page = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Hero /></div>
      <div key="2"><Services /></div>
    </QueueAnim>
  </section>
);

export default Page;

