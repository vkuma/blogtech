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
            <div className="container-fluid">
                <div className="">
                    <CardContent className="box-body">

                        <p>This article will be a complete overhaul of the Level Warning system from the last article. If you haven&rsquo;t checked it out, I strongly urge you to read that article before continuing with this one.</p>
                        <p>The warning system shown in the previous article was designed completely with the client needs in mind. Often utilizing different systems and components to serve just that need, however, this did not take into consideration with the minute budget we had to deal with.</p>
                        <p>As such we&rsquo;ve redesigned system into a single functioning device. This allowed us to remove unnecessary features such as Bluetooth communication which in turn, allowed us to cut out incredibly expensive parts such as the HC-05 and an extra board. Following that, we no longer needed a 5V out to run a Bluetooth module. Therefore, we replaced a board that ran on a low voltage 3V. The minimum operating voltage required for the accelerometer.</p>
                        <p>Below is a simplified schematic of the level warning system design, showing how all the different parts would connect.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article4/img/fig_1.jpg'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>With that design, we also made a new case to specifically house the electrical components. This case would also have cuts outs to give access to specific ports, LED indicators, and the power switch. The following is a 3D CAD of the case that was designed for this purpose:</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article4/img/fig_2.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article4/img/fig_3.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>The CAD models above went through many evolutionary changes to become what was our final design of the case as seen below.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article4/img/fig_4.jpg'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>As you can see there is a cut out for the power switch and one for the micro-USB port of the feather. This case comes in two parts, the top and bottom lid.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article4/img/fig_5.jpg'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article4/img/fig_6.jpg'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>For the prototype, we simply bound the parts together with electrical tape. For the top lid we applied an adhesive gel padding famed for its ability to adhere to objects and allow itself to be removed without leaving any residue. We applied it to the top layer as to give the product the functionality of attaching itself to the bottom of plates, cups, and other dishes.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article4/img/fig_7.jpg'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article4/img/fig_8.jpg'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto" >
                                <Image className="img-fluid"  src={process.env.PUBLIC_URL + '/assets/article-assets/article4/img/fig_9.jpg'} alt="Alps" />
                            </figure>
                        </div>

                        <p>It works quite simply, when the device is attached to the bottom of, let&rsquo;s say a cup, and switched on the device will automatically calibrate itself to a set level. While being passively used, the accelerometer will detect gradual changes in angle that exceed a certain threshold of tolerance pre-set by us. Once exceeded, the device will send a low powered signal to the AC motor that will then vibrate enough to be noticeable for the user, but at the same time not powerful enough to cause the entire device and cup to shake.</p>

                        <div className="row">
                            <div className="col-xl-8 mx-auto d-block" >
                                <pre className="language-c">
                                  <code className="">
                                  {`
                                    const int xpin = A1;
                                    const int ypin = A3;
                                    const int zpin = A5;
                                    const int LED = 12;
                                    const int ONLED = 13;

                                    void setup() {
                                      // put your setup code here, to run once:
                                      Serial.begin(9600);
                                      pinMode(LED, OUTPUT);
                                      pinMode(ONLED, OUTPUT);
                                    }

                                    void   loop() {
                                      // put your main code here, to run repeatedly:
                                     digitalWrite(ONLED, HIGH);

                                      char xaxis [] = "X-axis: ";
                                      char yaxis [] = "Y-axis: ";
                                      char zaxis [] = "Z-axis: ";

                                      int x = analogRead(xpin);
                                      int y = analogRead(ypin);
                                      int z = analogRead(zpin);

                                      int x_range = 527;
                                      int y_range = 563;
                                      int z_range = 825;

                                      int x1 = x - x_range+15;
                                      int y1 = y - y_range+100;
                                      int z1 = z - z_range+391;

                                      Serial.print(xaxis);
                                      Serial.print(x1);
                                      Serial.print("\\t");

                                      Serial.print(yaxis);
                                      Serial.print(y1);
                                      Serial.print("\\t");

                                      Serial.print(zaxis);
                                      Serial.print(z1);
                                      Serial.print("\\n");
                                      delay(2000);
                                      if ((y1 >= -50 && y1 <= -20 ) || (y1 > 20 && y1 < 50 ) || (x1 >= -50 && x1 <= -20 ) || (x1 > 20 && x1 < 50 ) || (z1 >= -50 && z1 <= -20 ) || (z1 > 20 && z1 < 50 )){
                                           digitalWrite(LED, HIGH);   // turn the LED on (HIGH is the voltage level)
                                           delay(2500);
                                          digitalWrite(LED, LOW);
                                        }
                                        else{
                                          digitalWrite(LED, LOW);
                                        }
                                      }
                                  `}
                                  </code>
                                </pre>
                            </div>
                        </div>

                        <p>Now you have made your first C script that compiles! Perfect! Now in the next article I will show you how to simulate the circuit we&rsquo;ve kept in mind while programming the PIC in the Proteus software. </p>

                    </CardContent>
                </div>
            </div>
        )
    }
}

export default ArticleContent;
