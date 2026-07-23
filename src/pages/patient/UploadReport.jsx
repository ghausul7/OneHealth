import { useState } from "react";

export default function UploadReport() {
  const [fileName, setFileName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h1>Upload a Report</h1>
      <p>Add a prescription or lab report to your timeline.</p>

      {submitted ? (
        <div>
          <p>Upload received. It'll be summarized and added to your timeline shortly.</p>
          <button onClick={() => setSubmitted(false)}>Upload another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label>Document type</label>
            <br />
            <select>
              <option>Lab Report</option>
              <option>Prescription</option>
              <option>Discharge Summary</option>
            </select>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>File</label>
            <br />
            <input type="file" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)} />
            {fileName && <p>Selected: {fileName}</p>}
          </div>
          <button>Upload</button>
        </form>
      )}
    </div>
  );
}