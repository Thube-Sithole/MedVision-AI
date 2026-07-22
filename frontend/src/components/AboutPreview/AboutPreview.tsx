import "./AboutPreview.css";

export default function AboutPreview() {
  return (
    <section className="aboutPreview">
      <p className="sectionLabel">ABOUT</p>

      <div className="aboutGrid">
        <h2>
          I engineer products by combining medicine, software,
          engineering and AI into practical systems.
        </h2>

        <div className="aboutText">
          <p>
            My career has crossed medical devices, surgical planning,
            product management and software engineering.
          </p>

          <p>
            That perspective allows me to understand complex workflows,
            identify bottlenecks and build technology that solves
            real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}