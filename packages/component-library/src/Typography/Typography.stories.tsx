import type { ComponentMeta } from "@storybook/react";
import Typography, { Card, Container } from "./Typography";

export default {
  title: "Salda/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Catalog = () => {
  return (
    <Container>
      <Card>
        <Typography name="Heading1" />
        <Typography name="Heading2" />
        <Typography name="Heading3" />
        <Typography name="Heading4" />
      </Card>
      <Card>
        <Typography name="Subtitle1" />
        <Typography name="Subtitle2" />
        <Typography name="Subtitle3" />
      </Card>
      <Card>
        <Typography name="Body1" line={10} />
        <Typography name="Body2" line={10} />
      </Card>
      <Card>
        <Typography name="Caption1" />
        <Typography name="Caption2" />
      </Card>
    </Container>
  );
};
