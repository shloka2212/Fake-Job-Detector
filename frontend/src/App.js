import React, { useState } from "react";
import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error contacting the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App" style={{ maxWidth: "600px", margin: "auto", padding: "2rem" }}>
      <h1>Fake Job Post Detector</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="10"
          style={{ width: "100%" }}
          placeholder="Paste job description here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" disabled={loading || !description}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>
      {result && (
        <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
          Result:{" "}
          <span style={{ color: result === "fake" ? "red" : "green" }}>
            {result}
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
