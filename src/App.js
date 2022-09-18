import './App.css';
import {
  FlexBox,
  Heading,
  SpectacleLogo,
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
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
  SlideLayout
} from 'spectacle';


const formidableLogo =
  'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

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
      <FlexBox height="100%">
        <SpectacleLogo size={500} />
      </FlexBox>
      <Notes>
        Spectacle supports notes per slide.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
        </ol>
      </Notes>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          ✨<i>Frontend end-to-end Testing</i> ✨
        </Heading>
        <Heading margin="0px" fontSize="h2">
          RBC Digital
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>What is frontend e2e testing?</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>Testing Pyramind</CodeSpan>
        </ListItem>
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
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        gridRowGap={1}
      >
        {Array(9)
          .fill('')
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              <Image src={formidableLogo} width={100} />
            </FlexBox>
          ))}
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
