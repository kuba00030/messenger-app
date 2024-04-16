import { About } from "./sections/About";
import { Intro } from "./sections/Intro";
import { Product } from "./sections/Product";

export const Home = () => {
  return (
    <>
      <Intro />
      <Product />
      <About />
    </>
  );
};
