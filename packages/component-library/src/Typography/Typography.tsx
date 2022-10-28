import type { FC } from "react";
import type { TypographyName } from "@sds/typography/salda";
import { styledTypography, typo } from "@sds/typography/salda";
import styled from "styled-components";

export interface TypographyProps {
  name: TypographyName;
  line?: number;
}

export const Container = styled.div`
  display: grid;
  gap: 16px;
  font-family: ${typo.fontFamily};
`;

export const Card = styled.div`
  display: grid;
  gap: 24px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const TextCard = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Text = styled.div<TypographyProps>`
  ${(props) => styledTypography(props.name)}
  flex: 1;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 36px;
  color: #3c3c3c;
  width: 70px;
`;

const Typography: FC<TypographyProps> = ({ name, line = 1 }) => {
  const text = new Array(line).fill("천만가지 아파트 솔루션 잘살아보세");
  return (
    <TextCard>
      <Name>{name}</Name>
      <Text name={name} line={line}>
        {text}
      </Text>
    </TextCard>
  );
};

export default Typography;
