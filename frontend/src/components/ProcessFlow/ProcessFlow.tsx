import "./ProcessFlow.css";

export default function ProcessFlow() {
  return (
    <section className="process">
      <p className="sectionLabel">MEDVISION AI</p>

      <h2>Turning medical imaging into surgical intelligence.</h2>

      <div className="architecture">

        <div className="column">
          <div className="node">
            <span className="nodeLabel">INPUT</span>
            <h3>CT Scan</h3>
            <p>DICOM Imaging</p>
          </div>
        </div>

        <div className="column">

          <div className="connectorHorizontal"></div>

          <div className="node large">
            <span className="nodeLabel">ENGINE</span>

            <h3>MedVision AI</h3>

            <ul>
              <li>Segmentation</li>
              <li>AI Analysis</li>
              <li>3D Planning</li>
            </ul>
          </div>

        </div>

        <div className="column">

          <div className="connectorHorizontal"></div>

          <div className="node">
            <span className="nodeLabel">OUTPUT</span>

            <h3>Patient-specific Solution</h3>

            <p>Clinical Planning</p>
          </div>

        </div>

      </div>
    </section>
  );
}