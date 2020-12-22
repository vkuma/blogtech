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
                        <h6>Understanding the Basics</h6>
                        <p>This tutorial expects you to have some background knowledge in PIC MCUs and also have the following installed on your computer:</p>
                        <ul>
                            <li>MPLABX</li>
                            <ul><li>Assembly and C code IDE</li></ul>
                            <li>XC8 Compiler</li>
                            <ul><li>C code compiler addon for MPLABX</li></ul>
                            <li>Proteus</li>
                            <ul><li>MCU simulator for all assembly and C code</li></ul>
                        </ul>
                        <p>Although the PIC in question has it’s own oscillator crystal, we are going to use an external crystal to better control the frequency.</p>
                        <p>The PIC16F87XA can be operated in four different oscillator modes. The user can program two configuration bits (FOSC1 and FOSC0) to select one of these four modes:</p>
                        <ul>
                            <li>LP</li>
                            <ul><li>Low-Power Crystal</li></ul>
                            <li>XT</li>
                            <ul><li>Crystal/Resonator</li></ul>
                            <li>HS</li>
                            <ul><li>High-Speed Crystal/Resonator</li></ul>
                            <li>RC</li>
                            <ul><li>Resistor/Capacitor</li></ul>
                        </ul>
                        <p>This setup is to used only if an external oscillator than the one provided internally in the PIC16F877A will be used.</p>
                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/figure_1.png'} alt="Alps" fluid/>
                            </figure>
                        </div>
                        <p>In the figure 14-1, you can see the crystal is represented as XTAL along with 2 capacitors. Below is a table with recommended values depending on your oscillation frequency.</p>
                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/figure_2.png'} alt="Alps" fluid/>
                            </figure>
                        </div>
                        <p>For this project we will use a 20MHz frequency, setting the Osc type as HS and the  C1 and C2 as 15-33pF.</p>
                        <p> For this project I will use the 33pF capacitors.
                            So, from this table we can design the circuit as:</p>
                        {/* sdasdsadasdasdasd */}
                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/fig_3.png'} alt="Alps" fluid/>
                            </figure>
                        </div>

                        <p>For this project we will use a 20MHz frequency, setting the Osc type as HS and the  C1 & C2 as 15-33pF. For this project I will use the 33pF capacitors.</p>
                        
                        <p>So, from this table we can design the circuit as:</p>
                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/math/math_1.png'} alt="Alps" fluid/>
                            </figure>
                        </div>
                        <p>Now we need to setup our digital out pins. This PIC has multiple Digital I/O’s that can double and an analog in. For simplicity’s sake we will use pin 36, which is only a digital I/O.</p>
                        <p>From the data sheet we have:</p>
                        <blockquote>PORTB is an 8-bit wide, bidirectional port. The corresponding data direction register is TRISB. Setting a TRISB bit (= 1) will make the corresponding PORTB pin an input (i.e., put the corresponding output driver in a High-Impedance mode). Clearing a TRISB bit (= 0) will make the corresponding PORTB pin an output (i.e., put the contents of the output latch on the selected pin).</blockquote>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/fig_2.png'} alt="Alps" fluid/>
                                <figcaption>Fig.1 - Pin Configuration for PIC16F874A/877A.</figcaption>
                            </figure>
                        </div>

                        <p>From this, we know that we have to set TRISB&lt;3&gt; &larr;1 to make the corresponding PORTA&lt;3&gt; into an output port. </p>

                        <p>To flash the LED, we connect it to pin RB3 through a 220ohm resistor, to protect the LED, and toggle it on and off.</p>

                        <p>Note: if need to change from digital I/O or analog input go to page 128 on the data sheet.</p>

                        <p>To make things easier to understand I&rsquo;ve already made the circuit in Proteus to show how the final circuit will look like. </p>
                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/fig_4.png'} alt="Alps" fluid/>
                                <figcaption>Fig.2 - THe final PIC circuit in Proteus</figcaption>
                            </figure>
                        </div>

                        <p>From the figure you can see the OSC1/OSC2 are connected to each other using the external oscillator crystal, XTAL and the 33pF capacitors C1/C2. The PIC is being powered by a 5V supply, with a decoupling capacitor of 100nF.</p>

                        <p>The point of a decoupling capacitor is, once fully charged, will mitigate any unexpected change to the PIC&rsquo;s input supply voltage as to attain a more stable input signal.</p>

                        <p>The oscillator is just to ensure voltages at certain points for future debugging. Adding this into the simulation is optional. We will go into how to build this circuit in Proteus after we learn how to create a C compiled script for the PIC circuit above.  </p>

                        <h6>Programming the PIC</h6>
                        <p>Assuming that you have MPLABX downloaded and installed, we will go through the steps required to make your first  LED flashing script!</p>

                        <p>STEP 1:</p>

                        <p>Create a new project.</p>

                        <p>File {'>'} New Project </p>
                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_1.png'} alt="Alps" fluid/>
                                <figcaption>Fig.3</figcaption>
                            </figure>
                        </div>

                        <p>STEP 2: </p>

                        <p>In Categories select &ldquo;Microchip Embedded&rdquo;</p>

                        <p>In projects select &ldquo;Standalone Projects&rdquo; </p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_2.png'} alt="Alps" fluid/>
                                <figcaption>Fig.4</figcaption>
                            </figure>
                        </div>

                        <p>Since our PIC is formally called PIC16F877A, in the dropdown menu for Families, we can select the, &ldquo;Mid-Range 8-bit MCUs (PIC10/12/16/MCP). You can tell because the first 2 digits after PIC is 16 which is in the mid-range family.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_3.png'} alt="Alps" fluid/>
                                <figcaption>Fig.5</figcaption>
                            </figure>
                        </div>

                        <p>STEP 4:</p>

                        <p>The second dropdown is where you would select your specific device. In our case PIC16F877A. </p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_4.png'} alt="Alps" fluid/>
                                <figcaption>Fig.6</figcaption>
                            </figure>
                        </div>

                        <p>STEP 5:</p>

                        <p>Here you select how you are going to launch your C script. For instance, PICs can be programmed physically using a device called a PICkit. There are different versions of the PICkit, I currently have the fourth generation PICkit, PICkit4. However, for our purposes we will use the simulator. </p>

                        <p>The simulator is used for script debugging purposes. Simply select the &ldquo;simulator&rdquo;. </p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_5.png'} alt="Alps" fluid/>
                                <figcaption>Fig.7</figcaption>
                            </figure>
                        </div>

                        <p>STEP 6:</p>

                        <p>Here we simply choose the compiler, since we are using the C compiler, select XC8. </p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_6.png'} alt="Alps" fluid/>
                                <figcaption>Fig.8</figcaption>
                            </figure>
                        </div>

                        <p>STEP 7:</p>

                        <p>Here you set the project details. Such as name and project location. Make sure that the, &ldquo;Set as main project&rdquo; is check marked. </p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_7.png'} alt="Alps" fluid/>
                                <figcaption>Fig.9</figcaption>
                            </figure>
                        </div>

                        <p>STEP 8:</p>

                        <p>Once created, open the main folder:</p>

                        <p> [right-click] Header Files {'>'} New {'>'} C Header File   This is to create a configuration file for our main C script.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_8.png'} alt="Alps" fluid/>
                                <figcaption>Fig.10</figcaption>
                            </figure>
                        </div>

                        <p>STEP 9:</p>

                        <p>Name the file anything, I simply named it config.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_9.png'} alt="Alps" fluid/>
                                <figcaption>Fig.11</figcaption>
                            </figure>
                        </div>

                        <p>STEP 10:</p>

                        <p>Delete the exiting code as it is irrelevant to our project.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_10.png'} alt="Alps" fluid/>
                                <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
                            </figure>
                        </div>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_11.png'} alt="Alps" fluid/>
                                <figcaption>Fig.12</figcaption>
                            </figure>
                        </div>

                        <p>STEP 11:</p>

                        <p>Just to make things easier on us, we will use the auto-generated configuration bit set.</p>

                        <p>To do this simply:</p>

                        <p> Window {'>'} Target Memory Views {'>'} Configuration Bits</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_12.png'} alt="Alps" fluid/>
                                <figcaption>Fig.13</figcaption>
                            </figure>
                        </div>

                        <p>STEP 12:</p>

                        <p>For our purposes set the following as seen in the figure below.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_13.png'} alt="Alps" fluid/>
                                <figcaption>Fig.14</figcaption>
                            </figure>
                        </div>

                        <p>Hit the, &ldquo;Generate Source Code Button&rdquo;.</p>

                        <p> STEP 13:</p>

                        <p>The output should be as follows.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_14.png'} alt="Alps" fluid/>
                                <figcaption>Fig.15</figcaption>
                            </figure>
                        </div>

                        <p>Copy and paste the output into your config.h script.</p>

                        <p>STEP 14:</p>

                        <p>Now we can create our main C script:</p>

                        <p>[right-click] Source Files {'>'} New {'>'} C Main File</p>

                        <p>This is to create an empty C file.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_15.png'} alt="Alps" fluid/>
                                <figcaption>Fig.16</figcaption>
                            </figure>
                        </div>

                        <p>STEP 15:</p>

                        <p>Name your script! It can be anything!</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_16.png'} alt="Alps" fluid/>
                                <figcaption>Fig.17</figcaption>
                            </figure>
                        </div>

                        <p>STEP 16:</p>

                        <p>Once the file is created you should see the following:</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_17.png'} alt="Alps" fluid/>
                                <figcaption>Fig.18</figcaption>
                            </figure>
                        </div>

                        <p>STEP 17:</p>

                        <p>Before we start coding we have to &ldquo;include&rdquo; our config file. This can be done by adding the following line;</p>

                        <p>#include &ldquo;config.h&rdquo;</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_18.png'} alt="Alps" fluid/>
                                <figcaption>Fig.19</figcaption>
                            </figure>
                        </div>

                        <p>STEP 18:</p>

                        <p>Rewrite the main loop in the script to something simpler.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_19.png'} alt="Alps" fluid/>
                                <figcaption>Fig.20</figcaption>
                            </figure>
                        </div>

                        <p>STEP 19:</p>

                        <p>Here we must first define our external OSC frequency as 20MHz. If in any project you using timing of any kind you absolutely must determine an appropriate oscillator frequency as that is how the PIC determines units of time and the passage of time. </p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_20.png'} alt="Alps" fluid/>
                                <figcaption>Fig.21</figcaption>
                            </figure>
                        </div>

                        <p>STEP 21:</p>

                        <p>Now in the void main loop, we will add two lines to configure the pins of the PIC that are useful to us.</p>

                        <p>First, we have to configure the PORTB as output pins, to do this we will zero out the TRISB address. </p>

                        <p>Then we zero out the PORTB address as to clear any lagging information already there from previous projects. It is a good rule of thumb to zero out and input and output pins you might use later in the initialization of the script.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_21.png'} alt="Alps" fluid/>
                                <figcaption>Fig.22</figcaption>
                            </figure>
                        </div>

                        <p>STEP 22:</p>

                        <p>For the main body of the code we keep things simple by encasing the blinking functionality in an infinite loop.</p>

                        <p>A while loop with a positive argument, such as the integer 1, is a simple way to do it. For the blinking functionality itself we just have to switch the PORTB output pin 3, from 1 to 0 infinitely.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_22.png'} alt="Alps" fluid/>
                                <figcaption>Fig.23</figcaption>
                            </figure>
                        </div>

                        <p>From the figure above you can do this by setting the pre-defined macro RB3 to 1 and then to 0. However, if there is not a delay between switching the outputs the LED will not have time to turn on and off. So, the delay is there to provide a buffer time for the real world parts to do there thing.</p>

                        <p>Also, it is important to note that when you include xc.h at the beginning of your code, that file includes a header file for your device. In our case, it includes pic16f877a.h. This file contains all the information for the registers in our device. It also contains unions for each register with each bit (or bit range) named. For example, there is a union called ANSELbits. In ANSELbits you will find ANS0, ANS1, ... , ANS7.</p>

                        <p>STEP 23:</p>

                        <p>Build and compile!</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_23.png'} alt="Alps" fluid/>
                                <figcaption>Fig.24</figcaption>
                            </figure>
                        </div>

                        <p>The console should output a happy, &ldquo;BUILD SUCCESSFUL&rdquo; message.</p>

                        <div className="row">
                            <figure className="col-lg-6 mx-auto d-block" >
                                <Image className="img-fluid" src={process.env.PUBLIC_URL + '/assets/article-assets/article1/img/mpfig/mpfig_24.png'} alt="Alps" fluid/>
                                <figcaption>Fig.25</figcaption>
                            </figure>
                        </div>


                        <p>Below is the code snippet your program should look similar too.</p>

                        <div className="row">
                            <div className="col-xl-8 mx-auto d-block" >
                                <pre className="language-clike">
                                  <code className="">
                                  {`

                                    // PIC16F877A Configuration Bit Settings

                                    // 'C' source line config statements

                                    // CONFIG
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

                                    #define _XTAL_FREQ 20000000 //Specify the XTAL crystal FREQ as 20MHz
                                    void main(){

                                        TRISB = 0x00;   //clear the bit in TRISB to make PORTB output pins
                                        PORTB = 0x00;   //init clear

                                        while(1){
                                            RB3 = 1;
                                            __delay_ms(500);
                                            RB3 = 0;
                                            __delay_ms(500);

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
