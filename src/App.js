import './App.css';
import {
  FlexBox,
  Heading,
  UnorderedList,
  ListItem,
  FullScreen,
  AnimatedProgress,
  Appear,
  Slide,
  Deck,
  Text,
  Box,
  Image,
  Notes,
  CodePane,
  Link
} from 'spectacle';

import testPyramid from '../src/images/test-pyramid.png';
import jsTestingUsage from '../src/images/JSTestingUsage.png';
import companies from '../src/images/companies-01.png';
import { TipsFlakyTests } from './slides/TipsFlakyTests';
import React from 'react';
import { TipsFlakyTestsContinued } from './slides/TipsFlakyTestsContinued';
import { TipsFlakyTestsFinal } from './slides/TipsFlakyTestsFinal';
import { FlakyTests } from './slides/FlakyTests';
import { Conclusions } from './slides/Conclusions';
import { Demo } from './slides/Demo';

const images = {
  backgroundImg: 'url(https://raw.githubusercontent.com/vincent-ksk/fitc/master/background.jpeg)',
  backgroundImg2: 'url(https://raw.githubusercontent.com/vincent-ksk/fitc/master/background-2.png)',
  backgroundImg3: 'url(https://raw.githubusercontent.com/vincent-ksk/fitc/master/background-3.png)',
  backgroundImg4: 'url(https://raw.githubusercontent.com/vincent-ksk/fitc/master/background-4.png)',
  backgroundImg5: 'url(https://raw.githubusercontent.com/vincent-ksk/fitc/master/background-5.png)',
  backgroundImg6: 'url(https://raw.githubusercontent.com/vincent-ksk/fitc/master/background-6.png)'
};

// SPECTACLE_CLI_THEME_START
const theme = {
  colors: {
    primary: '#000',
    blue: '#00569B',
    yellow: '#f9c300',
    secondary: '#00569B',
    tertiary: '#fff',
    quaternary: '#00569B'
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
    <Slide>
        <Heading margin="100px 0 0 0" color={theme.colors.blue} data-cy="title">
          ✨<i>End To End Testing: <br />Less Bugs, Build Faster</i> ✨
        </Heading>       
        <Heading margin="200px 0 0 0" color={theme.colors.blue} fontSize="h3">
          RBC Digital
        </Heading>
    </Slide>
    <Slide>
      <Heading>What is frontend e2e testing?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Methodology of testing your application's workflow from start to finish using real-life scenarios</ListItem>
        </Appear>
        <Appear>
          <ListItem>Ensure UI behaves as per requirement and test against actual/mocked back-end services</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <FlexBox alignContent="center" flexDirection="column">
        <Heading>What is frontend e2e testing?</Heading>
        <Image height="450px" src={testPyramid}></Image>
        <p>Credit: <Link fontSize="18px" href="https://martinfowler.com/articles/practical-test-pyramid.html#TheTestPyramid">Martin Fowler</Link></p>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>What is frontend e2e testing?</Heading>
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
      <FlexBox alignContent="center" flexDirection="column">
        <Heading fontSize="h3">Companies using e2e testing framework</Heading>
        <Image height="500px" src={companies}></Image>
        <p>Credits: cypress.io and playwright.dev</p>
      </FlexBox>
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
        <Text>Credit: <Link href="https://2021.stateofjs.com/en-US/libraries/testing">State of JS Survey - Sacha Greif</Link></Text>
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
      <Heading>How to integrate into development process and when to run tests</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Typically unit and integration tests are executed during pre-hooks in feature Pull Requests</ListItem>
        </Appear>
        <Appear>
          <ListItem>End-to-end testing are executed on regular basis, but not recommended to have too many test cases</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>How to integrate into development process and when to run tests</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Update and run the test scripts when new high value feature/flow changes are introduced</ListItem>
        </Appear>
        <Appear>
          <ListItem>To cover testing of new features and regression testing as well</ListItem>
        </Appear>
        <Appear>
          <ListItem>Test locally and use the framework watch functionality if it supports it</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>How to integrate into development process and when to run tests</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Review testing result reports to ensure changes did not break the application</ListItem>
        </Appear>
        <Appear>
          <ListItem>Archive release builds' e2e reports for audit purposes in the future</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Demo />
    <Slide>
        <Heading>Cypress Scripts Best Practices</Heading>
        <UnorderedList>
        <Appear>
          <ListItem>Very similar to writing other test scripts</ListItem>
        </Appear>
        <Appear>
          <ListItem>Run shared code before each test using before()</ListItem>
        </Appear>
        <Appear>
          <ListItem>Uses the `cy` object to perform actions and to test assertion</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
        <Heading>Cypress Scripts Best Practices</Heading>
        <CodePane language="javascript" showLineNumbers={false}>{`
        before(() => {
          cy.visit('http://localhost:3000/?slideIndex=0&stepIndex=0');
        });

        it('has the correct title', () => {
          cy.get('[data-cy="title"]').contains("End To End Testing");
        });
        `}
        </CodePane>
    </Slide>
    <Slide>
        <Heading>Cypress Scripts Best Practices</Heading>
        <UnorderedList>
        <Appear>
          <ListItem>Use data-cy attributes to provide context to your selectors and isolate them from CSS/JS/HTML changes</ListItem>
        </Appear>
        <Appear>
          <ListItem>cy.wait() to wait some miliseconds before performing the next action</ListItem>
        </Appear>
        <Appear>
          <ListItem>In Cypress, you almost never need to use cy.wait() for an arbitrary amount of time.</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
        <Heading>Cypress Scripts Best Practices</Heading>
        <UnorderedList>
        <Appear>
          <ListItem>Use cy.intercept() to intercept and stub network requests</ListItem>
        </Appear>
        <Appear>
          <ListItem>For local runs of Cypress, the network requests should be stubbed so that the response is always consistent and the tests run faster</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            For critical paths and happy paths it would be useful to not stub the response and test the contract between client and server is working correctly</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
        <Heading>Cypress Scripts Best Practices</Heading>
        <UnorderedList>
        <Appear>
          <ListItem>Cypress by default clicks on the center of the element. Might see some failures if the clickable area of the element in the DOM is not at the center</ListItem>
        </Appear>
        <Appear>
          <ListItem>You can change that by changing the click event clicking position in those instances: https://docs.cypress.io/api/commands/click#Arguments</ListItem>
        </Appear>
        <Appear>
          <ListItem>More best practices here: https://docs.cypress.io/guides/references/best-practices</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <FlakyTests />
    <TipsFlakyTests />
    <TipsFlakyTestsContinued />
    <TipsFlakyTestsFinal />
    <Conclusions />
  </Deck>
  );
}

export default App;
