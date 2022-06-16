/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    REACT_APP_BASE_URL: string;
  }
}

declare type ReactProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

// declare type RouteObject = import('react-router-dom').RouteObject;

