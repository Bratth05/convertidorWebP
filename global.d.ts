import "react";

declare module "*.css";

declare module "react" {
  interface InputHTMLAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}
