/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Widget = {
  type:
    | "dropdown"
    | "heading"
    | "label"
    | "text"
    | "number"
    | "checkbox"
    | "multicheckbox"
    | "picture"
    | "positions"
    | "radio"
    | "spacer"
    | "spinbox"
    | "stopwatch"
    | "textarea"
    | "togglegrid";
  prefix?: string;
  name?: string;
  align?: "left" | "center" | "right";
  noLabel?: boolean;
  row?: number;
  col?: number;
  rowspan?: number;
  colspan?: number;
  labelColspan?: number;
  validation?: Validation;
  [k: string]: unknown;
} & Widget1;
export type Validation = {
  comparison: "less" | "lessOrEqual" | "greater" | "greaterOrEqual" | "equal" | "inRange" | "outOfRange";
  [k: string]: unknown;
} & Validation1;
export type Validation1 = ValidationInequality | ValidationRange;
export type Widget1 =
  | WidgetDropdown
  | WidgetHeading
  | WidgetLabel
  | WidgetText
  | WidgetNumber
  | WidgetCheckbox
  | WidgetMultiCheckbox
  | WidgetPicture
  | WidgetPositions
  | WidgetRadio
  | WidgetSpacer
  | WidgetSpinbox
  | WidgetStopwatch
  | WidgetTextarea
  | WidgetToggleGrid;

export interface ConfigSchema {
  heading?: string;
  logo?: string;
  skipTeamSelection?: boolean;
  forceQualifiers?: boolean;
  pages: Page[];
  [k: string]: unknown;
}
export interface Page {
  name: string;
  widgets: Widget[];
  [k: string]: unknown;
}
export interface ValidationInequality {
  comparison?: "less" | "lessOrEqual" | "greater" | "greaterOrEqual" | "equal";
  value: number;
  [k: string]: unknown;
}
export interface ValidationRange {
  comparison?: "inRange" | "outOfRange";
  value: number[];
  [k: string]: unknown;
}
export interface WidgetDropdown {
  type?: "dropdown";
  defaultOption?: boolean;
  options: string[];
  [k: string]: unknown;
}
export interface WidgetHeading {
  type?: "heading";
  [k: string]: unknown;
}
export interface WidgetLabel {
  type?: "label";
  [k: string]: unknown;
}
export interface WidgetText {
  type?: "text";
  [k: string]: unknown;
}
export interface WidgetNumber {
  type?: "number";
  [k: string]: unknown;
}
export interface WidgetCheckbox {
  type?: "checkbox";
  [k: string]: unknown;
}
export interface WidgetMultiCheckbox {
  type?: "multicheckbox";
  options: string[];
  [k: string]: unknown;
}
export interface WidgetPicture {
  type?: "picture";
  file: string;
  width?: number;
  height?: number;
  [k: string]: unknown;
}
export interface WidgetPositions {
  type?: "positions";
  file: string;
  width?: number;
  height?: number;
  allowMultiple?: boolean;
  selectRadius?: number;
  selectColor?: string;
  [k: string]: unknown;
}
export interface WidgetRadio {
  type?: "radio";
  options: string[];
  default?: number;
  [k: string]: unknown;
}
export interface WidgetSpacer {
  type?: "spacer";
  width?: number;
  height?: number;
  [k: string]: unknown;
}
export interface WidgetSpinbox {
  type?: "spinbox";
  min?: number;
  max?: number;
  allowKeyboardInput?: boolean;
  [k: string]: unknown;
}
export interface WidgetStopwatch {
  type?: "stopwatch";
  startLabel?: string;
  lapLabel?: string;
  stopLabel?: string;
  maxLaps?: number;
  [k: string]: unknown;
}
export interface WidgetTextarea {
  type?: "textarea";
  [k: string]: unknown;
}
export interface WidgetToggleGrid {
  type?: "togglegrid";
  width: number;
  height: number;
  colors: string[];
  [k: string]: unknown;
}