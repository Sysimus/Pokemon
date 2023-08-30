const containerStyle = {
  width: "180px",
  height: "280px",
  border: "3px solid black",
  display: "inline-block", // Display cards in rows
  margin: "10px", // Add some margin for spacing
};

function Card({ number }) {
  return (
    <div style={containerStyle}>
      <h3>Number: {number}</h3>
    </div>
  );
}

function App() {
  const numbers = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div style={{ textAlign: "center" }}>
      {numbers.map((number) => (
        <Card key={number} number={number} />
      ))}
    </div>
  );
}

export default App;


