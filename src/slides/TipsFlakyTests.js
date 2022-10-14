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
    );
}