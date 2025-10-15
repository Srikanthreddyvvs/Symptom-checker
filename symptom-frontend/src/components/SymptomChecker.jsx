import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8082/api/check-symptom';

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!symptoms.trim()) return alert('Please enter some symptoms');
    setLoading(true);
    setResult('');

    try {
      const response = await axios.post(API_URL, { symptoms });
      console.log("Response from backend:", response.data);
      setResult(response.data.result);
    } catch (error) {
      setResult('Error contacting backend: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        rows="4"
        style={{ width: '100%', padding: '10px' }}
        placeholder="Enter symptoms, e.g. fever, cough, tiredness"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      ></textarea>

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}
      >
        {loading ? 'Analyzing...' : 'Check Symptoms'}
      </button>

      {result && (
        <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap', background: '#f4f4f4', padding: '15px', borderRadius: '8px', color: '#333'}}>
          <h3>Result:</h3>
          {result}
        </div>
      )}
    </div>
  );
}

export default SymptomChecker;
