
import {
    FlexBox,
    Heading,
    CodeSpan,
    Slide,
    Text,
    Grid,
    Box,
    MarkdownSlideSet,
    SlideLayout
  } from 'spectacle';

export const ExampleTemplateSlides = () => {
    return(
        <><Slide>
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
                animateListItems />

        </>
    );
}