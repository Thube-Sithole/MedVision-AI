import "../../foundation/index.css";

import ProcessFlow from "../../components/ProcessFlow/ProcessFlow";
import AboutPreview from "../../components/AboutPreview/AboutPreview";
function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="logo">
          <span className="name">THUBELIHLE SITHOLE</span>
          <span className="tagline">Systems Thinking</span>
        </div>

        <nav className="nav">
          <a href="/">About</a>
          <a href="/">Experience</a>
          <a href="/">Projects</a>
          <a href="/">MedVision</a>
          <a href="/">Contact</a>
        </nav>
      </header>

      <main className="container">
  <section className="hero">
  <div className="heroContent">
    <p className="eyebrow">SYSTEMS THINKING</p>

    <h1>
      Engineering intelligence
      <br />
      across medicine,
      <br />
      software and AI.
    </h1>

    <p className="intro">
      I build products by understanding systems first.
    </p>
  </div>

  <div className="heroAside">
    <div className="verticalLine"></div>
  </div>
</section>
<AboutPreview />
<ProcessFlow />
      </main>
    </div>
  );
}

export default App;