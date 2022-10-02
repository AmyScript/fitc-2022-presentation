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
  MarkdownSlide,
  MarkdownSlideSet,
  SlideLayout
} from 'spectacle';

import testPyramid from '../src/images/test-pyramid.png';
import JSTestingUsage from '../src/images/JSTestingUsage.png';

// SPECTACLE_CLI_THEME_START
const theme = {
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
    <Slide>
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
        <Image width="70%" src={JSTestingUsage}></Image>
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
    </Slide>
    <MarkdownSlide componentProps={{ color: 'yellow' }}>
      {`
        # This is a Markdown Slide
        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
    </MarkdownSlide>
    <MarkdownSlide animateListItems>
      {`
       # This is also a Markdown Slide
       It uses the \`animateListItems\` prop.
       - Its list items...
       - ...will appear...
       - ...one at a time.
      `}
    </MarkdownSlide>
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
      <CodePane language="javascript" showLineNumbers={false}>{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
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
