import React from "react";
import styled from "styled-components";

export interface ColorInfoProps {
  hex: string;
  name: string;
  hexName?: string;
  width?: number;
  height?: number;
}
interface ColorBoxProps {
  width: number;
  height: number;
  hex: string;
}

const StlyedDiv = styled.div`
  display: grid;
  gap: 5px;
`;

const ColorBox = styled.div<ColorBoxProps>`
  border-radius: 5px;
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};
  background-color: ${({ hex }) => hex};
`;

const ColorInfo: React.FC<ColorInfoProps> = ({
  hex,
  hexName,
  name,
  width = 150,
  height = 25,
}) => {
  return (
    <StlyedDiv>
      <ColorBox width={width} height={height} hex={hex} />
      <div>
        <div>{name}</div>
        {hexName ? <div>{hexName}</div> : <div>{hex}</div>}
      </div>
    </StlyedDiv>
  );
};

export default ColorInfo;
