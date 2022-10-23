import {
  Heading,
  UnorderedList,
  Appear,
  Slide,
  Notes,
  ListItem,
  Link
} from 'spectacle';

export const TipsFlakyTestsFinal = () => {
    return(
    <Slide>
      <Heading>Tips for preventing flaky tests</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Cypress test retries - <Link href="https://docs.cypress.io/guides/core-concepts/retry-ability">https://docs.cypress.io/guides/core-concepts/retry-ability</Link> </ListItem>
        </Appear>
        <Appear>
          <ListItem>Share and document learnings with the team to avoid similar flake in the future</ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
          Most test runners will allow you to use a wait command to wait a certain number of seconds before making
          assertions. However, this is not recommended because you may not know how long a page takes to load or how long
          a calculation will take and may add unnecessary waiting time or not have enough waiting time depending on the machine
          where your tests are ran. <br />
          Look for a test runner that can auto retry certain commands.  For example, with Cypress, the .get() command is automatially
          retried for x number of seconds, default to 4 seconds.  You can also use a call back function with the .should() command
          where assertions within the callback is retried over and over again until it passes.  This is good for making
          assertions on dynamically generated DOM elements.
      </Notes>
    </Slide>
    );
}