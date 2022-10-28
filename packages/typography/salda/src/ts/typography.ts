import type { ITypograpy, TypographyName } from "./type";
import * as typo from "./variable";

export function getTypoTemplate(typo: ITypograpy): string {
  return `
    font-size: ${typo.fontSize};
    font-weight: ${typo.fontWeight};
    line-height: 1.5;
    letter-spacing: ${typo.letterSpacing ? typo.letterSpacing : 0};    
  `;
}

export function getTypoObject(typoName: TypographyName): ITypograpy {
  switch (typoName) {
    case "Heading1":
      return typo.heading1;
    case "Heading2":
      return typo.heading2;
    case "Heading3":
      return typo.heading3;
    case "Heading4":
      return typo.heading4;
    case "Subtitle1":
      return typo.subtitle1;
    case "Subtitle2":
      return typo.subtitle2;
    case "Subtitle3":
      return typo.subtitle3;
    case "Body1":
      return typo.body1;
    case "Body2":
      return typo.body2;
    case "Caption1":
      return typo.caption1;
    case "Caption2":
      return typo.caption2;
  }
}

export function styledTypography(typoName: TypographyName): string {
  const typo = getTypoObject(typoName);
  return getTypoTemplate(typo);
}
