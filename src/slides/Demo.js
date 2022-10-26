import React from 'react';
import {
    Heading,
    Slide,
    FlexBox,
    Notes
  } from 'spectacle';

import Milo from '../images/Milo.jpg';

  export const Demo = () => {
    const [showImage, setShowImage] = React.useState(false)
    const getImage = () => {
        setTimeout(()=> {
            setShowImage(true);
        }, 2000);
    }
    return(
        <Slide>
            <FlexBox data-cy="demo-slide" flexDirection="column">
                <Heading>Demo</Heading>
                <button data-cy="get-image-button" onClick={getImage}>SHOW MILO</button>
                <FlexBox width="100%" flexDirection="row" alignItems="center">
                    {showImage ? (<img width="30%" data-cy="milo-image" src={Milo} />) : null}
                </FlexBox>
            </FlexBox>
            <Notes>
                We will now give a quick live demo of running some e2e tests using Cypress.  Our presentation slides were
                developed using a React library called spectacle and so we will perform some e2e tests on our presentation.  On this
                particular slide, we wrote a test so that we can check that when the button is clicked, my Dog Milo's picture is going to show up.
                Let's take a quick look at the simple code for this slide.
            </Notes>
        </Slide>
    );
  }