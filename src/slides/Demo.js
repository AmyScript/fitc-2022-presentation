import React from 'react';
import {
    Heading,
    Slide,
    FlexBox
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
                <FlexBox width="100%" flexDirection="row" alignItems="center">
                    <button data-cy="get-image-button" onClick={getImage}>SHOW MILO</button>
                    {showImage ? (<img width="30%" data-cy="milo-image" src={Milo} />) : null}
                </FlexBox>
            </FlexBox>
        </Slide>
    );
  }