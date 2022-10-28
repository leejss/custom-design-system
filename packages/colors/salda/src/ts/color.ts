import { alertColor, grayColor, pointColor, priamryColor, white } from "./base";

const success = {
  main: priamryColor[400],
  sub: priamryColor[50],
};

const warning = {
  main: alertColor[600],
  sub: alertColor[50],
};

const informative = {
  main: pointColor[600],
  sub: pointColor[50],
};

const background = {
  primary: white,
  secondary: grayColor[50],
};

const divider = {
  section: grayColor[200],
  item: grayColor[50],
};

const modal = "#00000066";

const skeleton = grayColor[200];

const enabled = {
  primary: priamryColor[400],
  secondary: white,
  tertiary: pointColor[600],
};

const pressed = {
  primary: priamryColor[800],
  secondary: grayColor[200],
  tertiary: pointColor[900],
};

const disabled = grayColor[400];

const text = {
  primary: grayColor[900],
  secondary: grayColor[700],
  tertiary: grayColor[600],
  disabled: grayColor[400],
};

const buttonText = {
  primary: white,
  secondary: grayColor[900],
  tertiary: white,
  disabled: grayColor[400],
};

export const stateColor = {
  success,
  warning,
  informative,
};

export const systemColor = {
  background,
  divider,
  modal,
  skeleton,
};

export const interactiveColor = {
  pressed,
  enabled,
  disabled,
};

export const textColor = {
  text,
  buttonText,
};
