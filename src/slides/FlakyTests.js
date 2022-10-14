import {
    Heading,
    UnorderedList,
    Appear,
    Slide,
    Notes,
    ListItem,
    FlexBox,
    Image,
    Grid
  } from 'spectacle';

  import brokenCode from '../../src/images/broken_code.jpg';

  export const FlakyTests = () => {
      return(
        <Slide>
            <Heading>Flaky Tests</Heading>
            <Grid
                gridTemplateColumns="50% 50%"
                height="100%"
            >
            <FlexBox alignItems="top" justifyContent="center">
                <Image width="70%" height="90%" src={brokenCode}></Image>
            </FlexBox>
            <FlexBox alignItems="top" justifyContent="center">
            <UnorderedList>
                <Appear>
                <ListItem>Or is it just a flaky test?</ListItem>
                </Appear>
                <Appear>
                <ListItem>Usually happens in CI</ListItem>
                </Appear>
                <Appear>
                <ListItem>Cause by unpredictable factors such as network lag, processor speed, memory bottlenecks in containers</ListItem>
                </Appear>
                <Appear>
                <ListItem>Test runner runs so fast it gets ahead of the application</ListItem>
                </Appear>
            </UnorderedList>
            </FlexBox>
            </Grid>
            <Notes>
                Test runners like Cypress performs the user actions extremely quickly and sometimes the DOM isn't ready yet.
                For example, the test maybe selecting an item in a dropdown box but the application needs to calculate the
                dropdown items depending on conditions and a slowdown in the calculations causes the select item not to render yet
                but the test is already trying to find and click on that element. Remember things happen on the DOM asynchronously in milli-seconds
                even though it may appear to be instant to the human eye
            </Notes>
        </Slide>

      );
  }