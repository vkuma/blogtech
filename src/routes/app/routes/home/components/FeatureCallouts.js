import React from 'react';
import Button from '@material-ui/core/Button';
import QueueAnim from 'rc-queue-anim';
import Hero from './Hero';
import ArticleCards from '../../articlecards';

const FeatureCallouts = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
        <div><Hero /></div>
        <div><ArticleCards /></div>
    </QueueAnim>
  </section>
);

export default FeatureCallouts;
