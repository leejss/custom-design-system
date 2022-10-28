import type { ComponentMeta } from "@storybook/react";
import ColorInfo from "./Color";

export default {
  title: "SaldaPro/Color",
  component: ColorInfo,
} as ComponentMeta<typeof ColorInfo>;

export const Base = () => {
  return <h1>Salda Pro Base Color</h1>;
};

export const SaldaProColor = () => {
  return <h1>Salda Pro Color</h1>;
};
