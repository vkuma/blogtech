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
        console.log("hello");
        return(
            <div className="container-fluid">
                <div className="">
                    <CardContent className="box-body">
                        <p>Arduino, SparkFun, and Adafruit are all companies that make a wide variety of open-source, pre-made boards all of which are incredibly useful for any type of projects. The problem comes, however, when these projects start getting complicated and connections to these boards start getting increasingly intricate. This can make prototyping very complicated or make the form factor of the final design much larger.</p>
                        <p>In which case, most tend to create PCB schematics, most often on AutoCAD&rsquo;s Eagle. Of course, to make the complex connections in a small printed circuit board. However, I found more than enough trouble when trying to integrate pre-made boards into these schematics as to create some plugin-and-play functionality.</p>
                        <p>This tutorial will focus on creating design blocks from existing open-source boards to be used for your PCB design.</p>
                        <p>In this tutorial, we will use the Adafruit&rsquo;s open-source, pre-made board, the <strong><em>ItsyBitsy</em></strong>. It is quite small which will complement projects that might want to conserve space.</p>
                        <p><a href="https://learn.adafruit.com/introducting-itsy-bitsy-32u4/downloads">ItsyBitsy Offical download Page</a></p>
                        <p>First, we have to go to the link provided and get the EagleCAD files, typically these files are hosted on GitHub.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig1.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>Download the zip files, unzip them and store them easy to access place on your computer.</p>
                        <p>Next, go to the &lsquo;Control Panel&rsquo; of the Eagle program.</p>
                        <p><strong>File &gt; Open &gt; Schematic</strong></p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig2.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>Next, browse your computer for the .sch file and open it.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig3.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>It should open to something like this:</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig4.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>Now, we get to work. We have to start deleting everything except the headers, which will be our pinouts in our design block. After deleting everything except the headers it should look like what we have below.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig5.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>A few quick tips, if you are having trouble manipulating objects in Eagle.</p>
                        <p>To <strong>Move</strong> <strong>groups</strong>, in Eagle, select the <strong><em>group tool</em></strong> and select multiple objects.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig6.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>Then click on the <strong><em>move tool</em></strong>, and <strong>CRTL + Right-Click (Hold) </strong>to move the group.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig7.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>To <strong>delete</strong>, you can use the same process except with the <strong><em>delete tool</em></strong>.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig8.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>Or <strong>Right-click &gt; Delete: Group</strong></p>
                        <p>You should have something like this.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig5.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>Now that the schematic has what we want, switch to the board window by clicking the <strong>SCH/BRD</strong> button in the toolbar:</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig9.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>Now in the board window, you should see a representation of the ItsyBitsy board.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig10.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>Like what we did in the Schematic we have to delete all the parts that we don&rsquo;t need in our final design block. We want to delete everything from the board except for the headers and the outline, however, It's possible that you don't have all the layers visible so we'll need to make all the layers visible for the things we want to delete. Additionally, we'll hide the layer with the outline (layer 20, Dimension) so that it won't be deleted.</p>
                        <p>So go to <strong>Layer Settings </strong>and make all layers visible <strong>except</strong> layer 20.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig11.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>This is what my board now looks like.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig12.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>Now like what we did from the schematic, we need to start deleting. This time simply select everything and delete. Once this happens you will get the following dialog box below. Simply click <strong>OK</strong>.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig13.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>While considerably stripped down, it still has many components we don’t need.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig14.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>To deal with this Select everything and this time us the <strong>Ripup tool</strong>.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig15.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>This should clean up and leftover mess.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig16.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>You are now ready to save the headers as a design block.</p>
                        <p>Click the SCH/BRD button on the toolbar to switch back to the schematic view. In the schematic window's menu click <strong>File &gt; Save as Design Block</strong></p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig17.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>This will pop up the Generate Design Block window. If you wish, you can include a brief description of the part you&rsquo;re working on however I honestly skip this step. Click &ldquo;Save as&hellip;&rdquo; and give the block a name. The window will allow you to select a different location to save the design block however I strongly recommend that you use the default location as it will make it easier to find later. Once you have chosen a name, click &ldquo;Save&rdquo; to create the design block.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig18.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig19.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>You now have a Design Block that you will use later when we create a new schematic for any future designs.</p>
                        <p>With the schematic window open, use the <strong>File &gt; New</strong> to create a new schematic.</p>
                        <p>Then click on the <strong>Add a design block tool</strong>.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig20.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>Browse for your design block and click <strong>OK</strong>.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article2/img/fig21.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>This dialog allows you to change the names of the &ldquo;incoming&rdquo; design block to avoid using the same name of an net that already exists in the main schematic. In Eagle, two nets are connected if the have the same name, even if there isn&rsquo;t a visible connection between the two parts of a schematic. The &ldquo;paste from file&rdquo; dialog allows you to avoid unintended connections by changing the name of the nets from the design block before they&rsquo;re added to the schematic. In our case since this is the first piece of the schematic there are no conflicts.</p>
                        <p>Click <strong>OK</strong> to finish adding the design block to the schematic.</p>
                        <p>With that, you should have a finished design block with all of the proper dimensions and pinouts that your can use in any design.</p>

                    </CardContent>
                </div>
            </div>
        )
    }
}

export default ArticleContent;
