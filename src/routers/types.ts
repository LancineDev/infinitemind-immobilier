import type { Route as NextRoute } from "next";
import { ComponentType } from "react";

// Allow either Next's Route type or plain string literals for routes
export type Route<T = string> = NextRoute | T;
export type PathName = Route;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
