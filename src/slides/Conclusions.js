import React from 'react';
import {
    Heading,
    Slide,
    Text,
    FlexBox,
    Notes
  } from 'spectacle';

  export const Conclusions = () => {
    return(
        <>
        <Slide>
            <FlexBox height="100%" justifyContent="center" alignItems="center">
                <Heading>Give Frontend End to End Testing a Try!</Heading>
            </FlexBox>
            <Notes>
                As mentioned there different JavaScript end to end testing frameworks and libraries out there.  Try a couple and see which ones works the best for your team and organization, it can help you and your team squash bugs and build faster.
            </Notes>
        </Slide>
        <Slide>
            <FlexBox flexDirection="column" height="100%" justifyContent="center" alignItems="center">
                <Heading data-cy="conclusion">THANK YOU</Heading>
            </FlexBox>
        </Slide>
        </>
    );
  }
