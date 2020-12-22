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

import Prism from "prismjs";
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-handlebars.min.js'
import 'prismjs/components/prism-lua.min.js'
import 'prismjs/components/prism-markup-templating.js'
import 'prismjs/components/prism-php.js'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js'


Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
});

const styles = {
    vidContainer: {
        position: 'relative',
        overflow: 'hidden',
        paddingTop: "56.25%",
    },
    vidiFrame: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 0,
    }
};

class ArticleContent extends React.Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="">
                    <CardContent className="box-body">

                        <p>Not too long ago I was part of a robotics group called Ottabotics, it was a club in my university dedicated to competing in robotic based competitions nationally in Canada. In the club there were different teams devoted to different competitions, I was part of the Robotic Boat Competition or Robo-boat as we called it. Without getting into too much into the specifics, the mechanical team needed a high precision hot wire cutter to cut to foam for the boat's hull. Problem is, the equipment was completely out of budget so as the electrical team lead I told them to give me a week and I&rsquo;ll see if I can make one for them.</p>
                        <p>This post will be less like a tutorial and more of an amalgamation of different references and other resources that can make the final product we are looking for. This is because I made this a long time ago and I didn&rsquo;t properly document the steps I used to make the device.</p>
                        <p>The principle of how a hot wire cutter works is really quite simple. It&rsquo;s basically a very inefficient resistor. By allowing a low voltage power source to run through a length of metal wire of some kind (different material yield&rsquo;s different cuts) and heating the element until it glows red hot. By creating external heat it can melt thought Styrofoam upon contact and essentially, &ldquo;cut&rdquo; the material.</p>
                        <p>The Ottabotics club, at the time, had gotten about 10 different defunct, old computers from the university, the club 's head accepted it because she thought we could scavenge them for parts. So, looking at them I thought we could use those old ATX PSUs as a cheap alternative power bench for the hot wire cutter. I knew that computer PSUs had varying voltage outputs and that would become the basis of the power bench.</p>
                        <p>Please use to following references below to accomplish this:</p>
                        <ul>
                            <li><a href="https://www.electronics-tutorials.ws/blog/convert-atx-psu-to-bench-supply.html">Reference Article 1</a> &nbsp;
                                <ul>
                                    <li>This article provides some background information about how the PSU works, some of the dangers, and things you should know going into the refurbishment.</li>
                                </ul>
                            </li>
                            <li><a href="https://www.instructables.com/id/Convert-A-Computer-Power-supply-to-a-Bench-Top-Lab/">Reference Article 2</a>
                                <ul>
                                    <li>This article is a good in-depth how-to on actually converting the ATX PSU into a usable power bench</li>
                                </ul>
                            </li>
                            <li><a href="https://www.youtube.com/watch?v=3WfZzpW3_uU">Reference Video</a>
                                <ul>
                                    <li>This is a video that can provide some additional visual instruction to help guide you.</li>
                                </ul>
                            </li>
                        </ul>
                        <p>I used these tutorials to essentially do the same thing, yet it is important to note that you make sure to use discharge the capacitors before working with the PSU as it can cause serious injury. Also, use a lot of heat shrink. With wires and soldered connections being so close together it is important not to have a short of any kind. Always DOUBLE CHECK your connections before turning the unit on, and take all the necessary precautions.</p>
                        <p>Now, presumably that you&rsquo;ve made the power bench we can get to the wire cutter housing. This is important, and any shoddiness of the construction will create uneven and possibly wavy cuts in the foam.</p>
                        <p>The concept of the design is simply a U-shaped build, made from &frac34;&rdquo; PVC tubing. The list of the PVC tubing pieces and the cut length are below.</p>
                        <ul>
                            <li>&frac34;&rdquo; PVC Tubing (or any preferred thickness)
                                <ul>
                                    <li>11&rdquo; PVC (x2)</li>
                                    <li>12&rdquo; PVC (x1)</li>
                                    <li>90&deg; Elbow PVC (x2)</li>
                                    <li>Slip Cap (x2)</li>
                                </ul>
                            </li>
                            <li>Eye-bolts (x2)</li>
                            <li>Washer and Nut (x2)
                                <ul>
                                    <li>Same size as your eye-bolt</li>
                                </ul>
                            </li>
                            <li>Hipshot Guitar Tuner (x1)
                                <ul>
                                    <li>NOTE: This is for the redesign that will be described later in this article</li>
                                </ul>
                            </li>
                        </ul>
                        <p>Below you will see the initial construction with the all of the used PVC components.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article0/img/trans_PVC_U_demensions_names.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>This, of course, is just the housing for the power lines and wire that will be used to cut said foam. So, what we&rsquo;ll do is cut entry and exit holes for the lines and the eye-bolts that will be used to anchor the cutting wire.</p>
                        <p>Be sure the when you drill the holes for the eye-bolts the diameter is just slightly smaller than the bolts you are using. This was you can have a tight seal when you screw in the bolts. Below is a diagram of the hole placement that you should use.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article0/img/trans_PVC_U_drill_holes.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>After you&rsquo;ve finished drilling the holes, we then have to install the eye-bolts. We&rsquo;ll have to use a nut and washer the same size as your bolt, and it should be screwed in the slip cap on both ends of the &ldquo;U&rdquo; shape as seen below.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article0/img/tran_PVC_slip_cap_eye_bolt.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>Now we have to feed the positive and negative power lines through the entry hole you made in the middle of the tubing and connect them to the eye-bolts. The black line is negative and the red line, positive.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article0/img/trans_PVC_U_power_lines.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>To make sure there is a solid connection twist the exposed copper wire around the bolt inside the slip cap in between the washer and nut. Use pliers to twist the nut securely in place.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article0/img/trans_eye_bolt_wire.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>Guess what? We&rsquo;re almost done, now we just have to tie a thin conductive wire on both ends of the of each eye-bolt. I used guitar strings, it worked perfectly for me, but you can experiment with different metal types that could give you a better cut. When all is said and done you should have something similar to the following:</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article0/img/trans_prototype_1.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>You&rsquo;re done! When you switch the power bench on, you should be able to cut through the Styrofoam like butter. Here is what mine looked like</p>
                        

                        <div className="row">
                            <figure className="col-lg-12 mx-auto d-block" >
                                <div style={styles.vidContainer}>
                                    <iframe style={styles.vidiFrame} src="https://www.youtube.com/embed/fzilJ7fVJAY" frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                </div>                            
                            </figure>
                        </div>

                        <p>Now although it&rsquo;s functional and works with different voltages it&rsquo;s not precise. This is simply because the tension in the wire is dependent on how tight you tie the string around the bolts. Now in this newly redesigned version, we will fix that by using an extension spring and a Hipshot guitar tuner.</p>
                        <p>If you attach the extension spring to the top eye-bolt you can add some much-needed tension, which will help straighten out the guitar string. This is as seen below.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article0/img/trans_prototype_2_spring.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>This is how it looks like when you add a simple extension spring to the design.</p>

                        <div className="row">
                            <figure className="col-lg-12 mx-auto d-block" >
                                <div style={styles.vidContainer}>
                                    <iframe style={styles.vidiFrame} src="https://www.youtube.com/embed/IFst8UxoIgc" frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                </div>                            
                            </figure>
                        </div>

                        <p>For the last design change is for the bottom connection we will remove the eye-bolt completely and replace it with the hipshot guitar tuner as seen below. Just be sure to cut out the appropriate holes so it will fit inside the PVC housing.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article0/img/trans_prototype_2_spring_gt.png'} alt="Alps" fluid/>
                            </figure>
                        </div>


                        <p>The point of fitting the guitar tuner to the opposite end of the extension spring is that allows you to turn the pedal to wind the guitar string even tighter. The spring in conjunction with the tuner allows to reflect an equal, but opposing force created by the winding of the wire. The sum of forces acting on the string is zero if you pull with equal but opposite forces. The imbues the wire with a great deal of tension that allows for a very straight cut even when cutting through the foam.</p>
                        <p>&nbsp;Thank you for reading this article, and I hope it helps you if you decide on building this project or something similar.</p>

                    </CardContent>
                </div>
            </div>
        )
    }
}

export default ArticleContent;
