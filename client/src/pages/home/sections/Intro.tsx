import { Button } from "react-bootstrap";

export const Intro = () => {
  return (
    <section id="home" className="d-flex align-items-center">
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
          <Button className="btn-fill-dark fw-bold px-5 rounded-2">
            Learn more
          </Button>
        </div>

        <img src="../public/HomeImg.jpeg" className="home-img rounded-4" />
      </article>
    </section>
  );
};
