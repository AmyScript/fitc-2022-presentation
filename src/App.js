import './App.css';
import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  AnimatedProgress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlideSet,
  SlideLayout
} from 'spectacle';

import testPyramid from '../src/images/test-pyramid.png';

const images = {
  backgroundImg: 'url(https://raw.githubusercontent.com/vincent-ksk/fitc/master/background.jpeg)'
};

console.log(images.backgroundImg);
// SPECTACLE_CLI_THEME_START
const theme = {  
  colors: {
    primary: '#fff',
    secondary: '#f9c300'
  },
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

function App() {
  return (
<Deck theme={theme} template={template}>
    <Slide backgroundImage={images.backgroundImg}>
      <FlexBox height="100%" flexDirection="column">
        <Heading data-cy="title">
          ✨<i>End To End Testing: <br />Less Bugs, Build Faster</i> ✨
        </Heading>
        <Heading margin="0px" fontSize="h3">
          RBC Digital
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>What is frontend e2e testing?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Methodology of testing your application's workflow from start to finish using real-life scenarios</ListItem>
        </Appear>
        <Appear>
          <ListItem>Ensure UI behaves as per requirement and test against actual back-end service</ListItem>
        </Appear>
        <Appear>
          <ListItem>Recommend only to test the high-value scenarios</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <FlexBox alignContent="center">
        <Image src={testPyramid}></Image>
      </FlexBox>
      <FlexBox>
      <p>Credit: <a href="https://martinfowler.com/articles/practical-test-pyramid.html#TheTestPyramid">Martin Fowler</a></p>
      </FlexBox>
    </Slide>
    <Slide>
      <UnorderedList>
        <Appear>
          <ListItem>Takes a long time and requires a lot of maintenance</ListItem>
        </Appear>
        <Appear>
          <ListItem>The larger the application, more effort to required to make the tests work</ListItem>
        </Appear>
        <Appear>
          <ListItem>Recommend only to test the high-value scenarios</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Who is using e2e testing in the tech world</Heading>
      <OrderedList>
        <Appear>
          <ListItem>Picture of companies</ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Stats and different e2e testing frameworks:  https://2021.stateofjs.com/en-US/libraries/testing </Heading>
      <FlexBox>
        <Text></Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
    </Slide>
    <Slide>
      <Heading>Why should you use frontend e2e testing (if no dedicated QE team)</Heading>
      <CodePane language="jsx">{`
        import { createClient, Provider } from 'urql';
        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });
        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
      <Box height={20} />
      <CodePane language="java" showLineNumbers={false}>{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
        `}</CodePane>
    </Slide>
    <Slide>
      <Heading>How to integrate into development process and when to run tests</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Typically unit and integration tests are executed during push pre-hooks and feature Pull Requests</ListItem>
        </Appear>
        <Appear>
          <ListItem>End-to-end testing are executed on regular basis, but not recommended during feature developement</ListItem>
        </Appear>
        <Appear>
          <ListItem>An ideal time to run end-to-end testing is during a Pull Request into the main branch or building a release version in your CI/CD pipeline</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>What kind of coverage for best practice</Heading>
      <Grid
        gridTemplateColumns="50% 50%"
        gridTemplateRows="50% 50%"
        height="100%"
      >
        <FlexBox alignItems="center" justifyContent="center">
          <Heading>This is a 4x4 Grid</Heading>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            With all the content aligned and justified center.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            It uses Spectacle <CodeSpan>{'<Grid />'}</CodeSpan> and{' '}
            <CodeSpan>{'<FlexBox />'}</CodeSpan> components.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Box width={200} height={200} backgroundColor="secondary" />
        </FlexBox>
      </Grid>
    </Slide>
    <MarkdownSlideSet>
      {`
        # This is the first slide of a Markdown Slide Set
        ---
        # This is the second slide of a Markdown Slide Set
        `}
    </MarkdownSlideSet>
    <SlideLayout.List
      title="Slide layouts!"
      items={['Two-column', 'Lists', 'And more!']}
      animateListItems
    />
    <Slide>
      <Heading>Demo app</Heading>
    </Slide>
    <Slide>
      <Heading>Cypress example</Heading>
    </Slide>
    <Slide>
      <Heading>Add new feature and test fails</Heading>
    </Slide>
    <Slide>
      <Heading>Example of how to write Cypress script</Heading>
      <p>Very similar to writing other test scripts.</p>
      <p>You have can setup condition prior to running each test condition (before each)</p>
      <p>Uses the `cy` object to perform actions and to test assertion</p>
      <CodePane language="javascript" showLineNumbers={false}>{`
        before(() => {
          cy.visit('http://localhost:3000/?slideIndex=0&stepIndex=0');
        });

        it('has the correct title', () => {
          cy.get('[data-cy="title"]').contains("End To End Testing");
        });
        `}</CodePane>
    </Slide>
    <Slide>
      <Heading>Tips for flaky tests</Heading>
    </Slide>
    <Slide>
      <Heading>Integration with pipeline Github Actions</Heading>
    </Slide>
    <Slide>
      <Heading>Conclusions</Heading>
    </Slide>
  </Deck>
  );
}

export default App;
