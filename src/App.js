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
  Notes,
  CodePane,
  MarkdownSlideSet,
  SlideLayout
} from 'spectacle';

import testPyramid from '../src/images/test-pyramid.png';
import jsTestingUsage from '../src/images/JSTestingUsage.png';
import brokenCode from '../src/images/broken_code.jpg';

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
    <Slide backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)">
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
      <Heading>Why e2e testing?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Prevent bugs and regression 🐛</ListItem>
        </Appear>
        <Appear>
          <ListItem>Confidence with continuous integration ✅</ListItem>
        </Appear>
        <Appear>
          <ListItem>Increase developer velocity 📈</ListItem>
        </Appear>
        <Appear>
          <ListItem>Cover gaps that unit and integration tests can't cover</ListItem>
        </Appear>
        <Appear>
          <ListItem>Improve customer experience</ListItem>
        </Appear>
        <Appear>
          <ListItem>Audit record for critical flows 🔍</ListItem>
        </Appear>
    </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Usage of JS Testing Frameworks and Libraries Survey</Heading>
      <FlexBox flexDirection="column" alignContent="center">
        <Text>Based on 16,085 responses</Text>
        <Text>Credit: <a href="https://2021.stateofjs.com/en-US/libraries/testing">State of JS Survey - Sacha Greif</a></Text>
      </FlexBox>
      <Notes>
        There are different e2e testing frameworks and libraries out there.  A really popular one amongst the software
        testing community is Selenium Webdriver as you can write the tests in different languages like Java, Python, C# and even JS but I'm
        going to focus on the increasingly popular ones for doing e2e tests in JS in modern web applications in the frontend community.
        I'm going to show everyone the 2021 survey results on the usage of JS testing frameworks and libraries conducted
        by the site State of JS.
      </Notes>
    </Slide>
    <Slide>
      <FlexBox flexDirection="row" width="100%"  alignContent="center">
        <Image width="70%" src={jsTestingUsage}></Image>
      </FlexBox>
      <Notes>
        Any JS testing framework that has less than 10% awareness from the survey respondents were not included here.
        Usage of JS e2e testing has been steadly increasing since 2019.
        Usage of JS e2e testing frameworks mostly started out in 2019 with the usage of Puppeteer and Cypress and continues to gain usage in the following years.
        With more usage of other testing libraries such as Webdriver IO and Playwright.
        There are other e2e testing frameworks and libraries such as Selenium, TestCafe, Protractor etc. that didn't make it on this chart
      </Notes>
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
          <ListItem>An ideal time to run end-to-end testing is during building a release version in your CI/CD pipeline</ListItem>
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
          <ListItem>Usually happens in CI when the tests are ran many times</ListItem>
        </Appear>
        <Appear>
          <ListItem>Cause by unpredicatble factors such as network lag, processor speed, memory bottlenecks in containers</ListItem>
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
    <Slide>
      <Heading>Tips for flaky tests</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Only make assertion on text if it is crucial to your application</ListItem>
        </Appear>
        <Appear>
          <ListItem>Look for if the element exists before performing action on it in your test</ListItem>
        </Appear>
        <Appear>
          <ListItem>Make sure the DOM element is rendered and not in transition</ListItem>
        </Appear>
        <Appear>
          <ListItem>When navigating between pages in the test, ensure the navigation is done and the page is loaded completely before making assertions</ListItem>
        </Appear>
    </UnorderedList>
    <Notes>
      Make sure the DOM element is rendered and not in transition: <br/>
      Sometimes a DOM elements gets attached and unattached and reattached to the DOM.  For example, submitting a from
      that refreshes a page.  Make sure you are not trying to make an assertion on an unattached DOM element.
    </Notes>
    </Slide>
    <Slide>
    <Heading>Tips for flaky tests</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Make sure the application has the network response if the network response affects the rendering of the element</ListItem>
        </Appear>
        <Appear>
          <ListItem>Utilitze wait time(not recommended)</ListItem>
        </Appear>
        <Appear>
          <ListItem>Utilitze retry commands and intercept network requests to make sure the response is sucessful </ListItem>
        </Appear>
        <Appear>
          <ListItem>Cypress test retries - <a>https://docs.cypress.io/guides/core-concepts/retry-ability</a> </ListItem>
        </Appear>
        <Appear>
          <ListItem>Share and document learnings to share with the team to avoid similar flake in the future</ListItem>
        </Appear>
    </UnorderedList>
    <Notes>
        Most test runners will allow you to use a wait command to wait a certain number of seconds before making
        assertions. However, this is not recommended because you may not know how long a page takes to load or how long
        a calculation will take and may add unnecessary waiting time or not have enough waiting time depending on the machine
        where your tests are ran. <br />
        Look for a test runner that can auto rety certain commands.  For example, with Cypress, the .get() command is automatially
        retried for x number of seconds, default to 4 seconds.  You can also use a call back function with the .should() command
        where assertions within the callback is retried over and over again until it passes.  This is good for making
        assertions on dynamically generated DOM elements.
    </Notes>
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
