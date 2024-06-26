import "./App.css";

function App() {
  const color = "#ffffff";

  const handleColorChange = (event) => {};

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        style={{ marginRight: "10px" }}
      />
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          border: "1px solid #000",
        }}
      >
        <p style={{ color: "#000", textAlign: "center", paddingTop: "80px" }}>
          Background Color
        </p>
      </div>
    </div>
  );
}

export default App;
