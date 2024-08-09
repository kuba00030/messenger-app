import { ImgHTMLAttributes } from "react";
import "./avatar.css";
export type Avatar = ImgHTMLAttributes<HTMLImageElement>;

export const Avatar = (props: Avatar) => <img {...props}></img>;
