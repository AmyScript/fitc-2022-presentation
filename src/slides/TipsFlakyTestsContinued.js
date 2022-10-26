import {
  Heading,
  UnorderedList,
  Appear,
  Slide,
  Notes,
  ListItem
} from 'spectacle';

export const TipsFlakyTestsContinued = () => {
    return(
    <Slide>
      <Heading>Tips for preventing flaky tests</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Make sure the application has the network response if the network response affects the rendering of the element</ListItem>
        </Appear>
        <Appear>
          <ListItem>Utilize wait time(not recommended)</ListItem>
        </Appear>
        <Appear>
          <ListItem>Utilize retry commands </ListItem>
        </Appear>
        <Appear>
          <ListItem>Intercept network requests to make sure the response is successful </ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
          Make sure the response for the network call has successfully been received if the response affects the rendering of the element <br />
          Most test runners will allow you to use a wait command to wait a certain number of seconds before making
          assertions. However, this is not recommended because you may not know how long a page takes to load or how long
          a calculation will take and may add unnecessary waiting time or not have enough waiting time depending on the machine
          where your tests are ran. <br />
          Look for a test runner that can auto retry certain commands.  For example, with Cypress, the .get() command to get elements is automatially
          retried for x number of seconds, default to 4 seconds.  In our demo, Cypress was able to get the Milo image even though there was a 2 second delay in rendering the image.
      </Notes>
    </Slide>
    );
}