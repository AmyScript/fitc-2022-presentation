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
                Every developer has probably ran a test and it fails and you are wondering if you broke the code <br />
                Or is it a flaky test? <br />
                Flaky tests are usually had to troubleshoot because it usually happens in your pipeline during continous integration when the tests are being ran automatically in your pipeline containers. <br />
                It is usually caused by unpredicator factors such as network lag, processor speed, memory bottlenecks in containers. <br />
                Test runners like Cypress performs the user actions extremely quickly and sometimes the DOM isn't ready yet.
                For example, the test maybe selecting an item in a dropdown box but the application needs to calculate the
                dropdown items depending on specific conditions and a slowdown in the calculations causes the select item not to render yet
                but the test is already trying to find and click on that element. Remember things happen on the DOM asynchronously in milli-seconds
                even though it may appear to be instant to the human eye
            </Notes>
        </Slide>

      );
  }