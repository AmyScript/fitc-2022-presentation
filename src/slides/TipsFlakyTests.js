import {
  Heading,
  UnorderedList,
  Appear,
  Slide,
  Notes,
  ListItem
} from 'spectacle';

export const TipsFlakyTests = () => {
    return(
      <Slide>
        <Heading>Tips for preventing flaky tests</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>Only make assertion on text if it is crucial to your application</ListItem>
          </Appear>
          <Appear>
            <ListItem>Look for if the element exists before performing action on it in your test</ListItem>
          </Appear>
          <Appear>
            <ListItem>Make sure the element is not in transition and detached from the DOM</ListItem>
          </Appear>
          <Appear>
            <ListItem>When navigating between pages in the test, ensure the navigation is done and the page is loaded completely before making assertions</ListItem>
          </Appear>
        </UnorderedList>
        <Notes>
          So how do you prevent flaky tests in your e2e tests?  Try to only make assertion on your text if is crucial to your application.  Text can frequently change due to content changes, which can break your tests often even though the change in text isn't breaking your application. <br />
          Make sure that your element is rendered and visible before performing actions like clicking on it <br />
          Make sure the DOM element is not detached from the DOM:
          Sometimes a DOM elements gets attached and unattached and reattached to the DOM.  For example, submitting a from
          that refreshes a page.  Make sure you are not trying to make an assertion on an unattached DOM element. <br />
          When navigating between pages, it could take some time navigate and to load and build JS or HTML files, make sure everything is loaded before making assertions
        </Notes>
      </Slide>
    );
}