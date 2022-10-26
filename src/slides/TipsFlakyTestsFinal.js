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
          If you want to understand more details of the Cypress test retry capabilities, check out their guide <br />
          And lastly, share and document learnings with the team to avoid similar flake in the future.  There are different scenarios that causes flaky tests and it is worthwhile to share how to solve these issues with others so you are not re-inventing the wheel.
      </Notes>
    </Slide>
    );
}