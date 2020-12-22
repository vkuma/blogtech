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
                        <h6>Sub-Title</h6>

                        <p>Sentence.</p>
                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/figure_1.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <div className="row">
                            <div className="col-xl-8 mx-auto d-block" >
                                <pre className="language-clike">
                                  <code className="">
                                  {`
                                    #pragma config FOSC = HS        // Oscillator Selection bits (HS oscillator)
                                    #pragma config WDTE = OFF       // Watchdog Timer Enable bit (WDT disabled)
                                    #pragma config PWRTE = OFF      // Power-up Timer Enable bit (PWRT disabled)
                                    #pragma config BOREN = ON       // Brown-out Reset Enable bit (BOR enabled)
                                    #pragma config LVP = OFF        // Low-Voltage (Single-Supply) In-Circuit Serial Programming Enable bit (RB3 is digital I/O, HV on MCLR must be used for programming)
                                    #pragma config CPD = OFF        // Data EEPROM Memory Code Protection bit (Data EEPROM code protection off)
                                    #pragma config WRT = OFF        // Flash Program Memory Write Enable bits (Write protection off; all program memory may be written to by EECON control)
                                    #pragma config CP = OFF         // Flash Program Memory Code Protection bit (Code protection off)

                                    #include <xc.h>
                                    #include <stdlib.h>
                                    #include <stdio.h>
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
