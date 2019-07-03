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

class ArticleContent extends React.Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    render(){
        return(
            <div className="container">
                <div className="">
                    <CardContent className="box-body">
                        <h6>The Client Needs</h6>

                        <p>During the summer I lead a small team that met with a client that had Parkinson&rsquo;s disease. From his condition arose a problem, one he thought we could fix. Our client has a very active social life, and often has to hold different assortments of beverages and plates of food while conversing with other people. The problem is that he hands tend to slowly tilt to one side while he is distracted. This often led to spilled drinks or food falling over his plate. He tends to be embarrassed of this situation and desires a system in which he can be immediately notified when his hands start titling as so he can correct the hands position.</p>
                        <p>Following our preliminary interview with our client, we felt as though he had offered a reasonably narrow path regarding the nature of the device he required, the basic function it needed to perform and the means through which he expected the device to perform them. However, as we approached the ideation process we quickly realized there were a vast number of ways we could approach solving the core problem &mdash; preventing the spilling of beverages and foods from cups and plates &mdash; and a host of both technical and lay challenges that accompanied each of them. We had continuously wrestled with the notion that this device had to based on detection and not off actuating (preventing) the required corrective movement itself. We had asked ourselves if a detection device was even the best way to address a fairly simple mechanical problem, could we not just (somehow) use a device that kept his hand steady?</p>
                        <p>&nbsp;After hours of discussion, we had soberly arrived at the conclusion that of all the concepts we had generated, only a detection and feedback device would fully satisfy all of this client&rsquo;s needs. While we could have attempted to stop this problem outright by steadying his hand, the device needed to do that would likely be excessively bulky, power-intensive (due to a need for active gyro-stabilization) and most worryingly disregard one of the client&rsquo;s most heavily weighted criteria: discretion. Only a level detection and feedback system would allow for Roland to set aside his worries, grant him maximum freedom and mobility all while maintaining discretion.</p>

                        <h6>Potential Design</h6>

                        <p>With our focus corrected on developing a detection-feedback device, we endeavoured to ideate once more. After analytically dissecting each of the concepts we had presented to the group we had arrived at a simple pocket-pager (feedback) and pad (detector) combination. The client would, in theory, be able to adhere the pad onto the bottom of a cup, bottle or plate and be warned of every time he is about to spill a drink through the use of an accelerometer, microcontrollers, and Bluetooth modules. Although many technical hurdles await us, we are fairly confident of the ability of our core concept to feasibly meet all the client&rsquo;s needs. &nbsp;&nbsp;</p>
                        <p>After getting the broad strokes out of the design in place we decided to make a more detailed version of our design through a functional deposition chart, as seen below.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article3/img/fig1.png'} alt="Alps" fluid/>
                                <figcaption>Functional Decomposition Chart</figcaption>
                            </figure>
                        </div>

                        <h6>Prototype Design</h6>

                        <p>Finding appropriate electronics and configuring them in such a way to effectively detect tilt and transmit this information via Bluetooth is the major crux of our design. We prioritized creating the transceiver model first as it would be the one intended to carry out the most complex functions and take the most time. Both the transceiver and pager have rather similar circuit designs and share many of the same components &mdash; from one we could build the other with more ease. The following present and document both circuit schematics.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article3/img/fig2.jpg'} alt="Alps" fluid/>
                                <figcaption>Transceiver Circuit Schematic</figcaption>
                            </figure>
                        </div>

                        <p>The schematic above shows each individual component of the transceiver and the connections (specific ports) that must be made with the microprocessor. The components shown are as follows:</p>
                        <ul>
                            <li>HC-05 (ZS-040) BT Module</li>
                            <li>Adafruit &ndash; Itsy Bitsy 32u4 5v 16mhz Eval Bd&nbsp;</li>
                            <li>SparkFun &ndash; ADXL335 3axis Accelerometer 3g</li>
                            <li>Pro Trinket Li-battery Backpack</li>
                            <li>100mAh LIPO battery</li>
                            <li>RES 1K OHM 1/4W 5% AXIAL</li>
                            <li>RES 2K OHM 1/8W 5% CF AXIAL</li>
                        </ul>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article3/img/fig3.jpg'} alt="Alps" fluid/>
                                <figcaption>Receiver (pager) Circuit Schematic</figcaption>
                            </figure>
                        </div>

                        <ul>
                            <li>HC-05 (ZS-040) BT Module</li>
                            <li>Adafruit &ndash; Itsy Bitsy 32u4 5v 16mhz Eval Bd&nbsp;</li>
                            <li>Pro Trinket Li-battery Backpack</li>
                            <li>100mAh LIPO battery</li>
                            <li>TRANS NPN 40V 1A TO92</li>
                            <li>RES 270 OHM 1/4W 5% AXIAL</li>
                            <li>RES 1K OHM 1/4W 5% AXIAL</li>
                            <li>RES 2K OHM 1/8W 5% CF AXIAL</li>
                        </ul>
                        <p>Finding an efficient way to regulate the voltage delivered to the vibration motors was a particular challenge that we faced when it came to designing the pager circuit. The section of the diagram in the bottom-left shows the components required to adjust the outgoing PWM signal to the DC motor which would grant us needed control over the intensity of vibration.</p>
                        <p>In the next article, we will talk about the prototyping and casing of the different board designs.</p>

                    </CardContent>
                </div>
            </div>
        )
    }
}

export default ArticleContent;
