import { ImgHTMLAttributes } from "react";

export type Avatar = ImgHTMLAttributes<HTMLImageElement>;

export const Avatar = (props: Avatar) => <img {...props}></img>;
