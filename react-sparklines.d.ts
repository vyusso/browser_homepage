declare module 'react-sparklines' {
  import { ComponentType, CSSProperties } from 'react';

  export interface SparklinesProps {
    data: number[];
    width?: number;
    height?: number;
    margin?: number;
    min?: number;
    max?: number;
    children?: React.ReactNode;
  }

  export interface SparklinesLineProps {
    color?: string;
    style?: CSSProperties;
  }

  export const Sparklines: ComponentType<SparklinesProps>;
  export const SparklinesLine: ComponentType<SparklinesLineProps>;
}

