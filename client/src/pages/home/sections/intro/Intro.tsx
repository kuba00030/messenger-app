import "./intro.css";
import { PrimaryButton } from "../../../../components/ui/buttons/primary-button/PrimaryButton";
import { Section } from "../../../../components/ui/section/Section";

export const Intro = () => {
  return (
    <Section id="home" className="d-flex align-items-center">
      <article className="d-flex justify-content-between gap-1 gap-md-5">
        <div className="d-flex flex-column align-items-start justify-content-end me-md-5">
          <p className="fw-bold fs-xxl text-dark">
            Lorem <br /> ipsum
          </p>
          <p className="fs-m">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            sit corporis praesentium ex! Quaerat qui dolores expedita nesciunt,
            vel beatae consequuntur odit? Dolorem culpa, explicabo cum repellat
            obcaecati quae tempore.
          </p>
          <PrimaryButton
            className="fw-bold rounded-2 bg-default btn-h-primary border-0 tr-02 px-5 py-2"
            type="button"
            textValue="Learn more"
            onClick={() => {
              console.log("learn more");
            }}
          />
        </div>
        <img src="../public/HomeImg.jpeg" className="home-img rounded-4" />
      </article>
    </Section>
  );
};
