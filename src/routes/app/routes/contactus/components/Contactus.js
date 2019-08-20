import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import QueueAnim from 'rc-queue-anim';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

const Hero = () => (
    <section className="hero text-center text-body-reverse">
      <div className="hero-bg-img" style={{backgroundImage: 'url(assets/article-assets/background/1.png)'}}></div>
      <div className="hero-inner">
        <h1 className="hero-title text-body-reverse">How can we help you?</h1>
        <p className="hero-lead">Feel free to contact us if you have any questions</p>
      </div>
    </section>
);

const Contactus = () => (
  <article className="article article-dark">
    <h2 className="article-title text-center mt-0">Contact Us</h2>
    <div className="container-fluid container-mw-xl">
      <div className="row">
        <div className="col-xl-6">
          <Card className="box box-transparent">
            <CardHeader
                title="Get in Touch"
                subheader="April 24, 2019"
            />
            <CardContent className="box-body">
              <p>I'm pretty social, so if you want to contact me for any reason, even if just for a chat. Give me a ring.</p>
              <div className="divider my-4 divider-solid" />
              <p>75 Laurier Ave E<br /> Ottawa, ON. <br /> K1N 6N5</p>
              <div className="divider my-4 divider-solid" />
              <p>
                <strong>E:</strong> vkuma076@uottawa.ca
                <br />
                <strong>P:</strong> +1 (613) 700-0343
                <br />
                <strong>S:</strong> www.noisytechnology.com
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="col-xl-6">
          <Card className="box box-transparent">
            <CardHeader title="Contact"/>
            <CardContent className="box-body">
              <form name="contactForm">
                <div className="form-group">
                  <TextField
                    label="Name"
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Message"
                    multiline
                    rows="3"
                    fullWidth
                  />
                </div>
                <div className="divider" />
                <Button variant="contained" color="primary" className="btn-w-md"> Submit </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </article>
);

const ContactPage = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Hero /></div>
      <div key="2"><Contactus /></div>
    </QueueAnim>
  </section>
);

export default ContactPage;
