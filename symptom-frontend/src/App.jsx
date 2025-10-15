import React from 'react';
import SymptomChecker from './components/SymptomChecker';
import HistoryList from './components/HistoryList';

function App() {
  return (
    <div 
      style={{ 
        fontFamily: 'sans-serif', 
        padding: '20px', 
        maxWidth: '700px', 
        margin: '50px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>🩺 Healthcare Symptom Checker</h1>
      <p style={{ color: 'gray' }}>Educational use only — not a medical diagnosis.</p>
      <div style={{ width: '100%' }}>
        <SymptomChecker />
        <hr style={{ margin: '40px 0' }} />
        <HistoryList />
      </div>
    </div>
  );
}

export default App;
