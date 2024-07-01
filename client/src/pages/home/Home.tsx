import "./home.css";
import { About } from "./sections/about/About";
import { Intro } from "./sections/intro/Intro";
import { Product } from "./sections/product/Product";

export const Home = () => {
  return (
    <>
      <Intro />
      <Product />
      <About />
    </>
  );
};
