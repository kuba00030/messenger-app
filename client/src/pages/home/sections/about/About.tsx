import { Section } from "../../../../components/ui/section/Section";
import "./about.css";

export const About = () => {
  return (
    <Section id="about" className="bg-dark row text-center py-4 m-0">
      <article className="text-light fw-semibold fs-sm col-12 col-md-6">
        <p> ABOUT US</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam
          adipisci obcaecati praesentium. Totam minima maiores asperiores
          sapiente dignissimos a magnam at labore provident optio esse, quis
          possimus nisi libero?
        </p>
      </article>
      <article className="text-light fw-semibold fs-sm col-12 col-md-3">
        <p>CONTACT</p>
        <ul>
          <li>example email</li>
          <li>(+99) 999 999 999</li>
          <li>example address</li>
        </ul>
      </article>
      <article className="text-light fw-semibold fs-sm col-12 col-md-3 p-0">
        <p>SOCIAL</p>
        <ul>
          <li>social</li>
          <li>social</li>
          <li>social</li>
        </ul>
      </article>
    </Section>
  );
};
