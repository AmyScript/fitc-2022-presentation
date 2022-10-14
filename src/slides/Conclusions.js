import React from 'react';
import {
    Heading,
    Slide,
    Text,
    FlexBox
  } from 'spectacle';

  export const Conclusions = () => {
    return(
        <>
        <Slide>
            <FlexBox height="100%" justifyContent="center" alignItems="center">
                <Heading>Give Frontend End to End Testing a Try!</Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox flexDirection="column" height="100%" justifyContent="center" alignItems="center">
                <Heading>THANK YOU</Heading>
                <Text>Amy Wah - amy.wah@rbc.com</Text>
                <Text>Vincent Kong - vincent.kong@rbc.com</Text>
            </FlexBox>
        </Slide>
        </>
    );
  }