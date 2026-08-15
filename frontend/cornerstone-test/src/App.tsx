import { version } from "@cornerstonejs/core";

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Version</h1>
      <p>{version}</p>
    </div>
  );
}