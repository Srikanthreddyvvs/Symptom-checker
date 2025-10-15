import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HISTORY_URL = 'http://localhost:8082/api/history';

function HistoryList() {
  const [history, setHistory] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    axios.get(HISTORY_URL)
      .then((res) => {
        const sorted = res.data.sort((a, b) => 
          new Date(b.createdAt) - new Date(a.createdAt)
        );
        setHistory(sorted);
      })
      .catch((err) => console.error('Error fetching history:', err));
  }, []);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>History</h2>
      {history.length === 0 ? (
        <p>No previous records found.</p>
      ) : (
        <div>
          {history.map((item) => (
            <div key={item.id} style={{ marginBottom: '10px', transition: 'all 0.3s ease' }}>
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 15px',
                  borderRadius: '8px',
                  background: expandedId === item.id ? '#3498db' : '#2980b9',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'background 0.3s ease, transform 0.2s ease',
                  color:'white'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                {item.symptoms} (check it)
              </button>

              {expandedId === item.id && (
                <div style={{
                  background: '#f4f4f4',
                  padding: '12px 15px',
                  borderRadius: '8px',
                  whiteSpace: 'pre-wrap',
                  color: '#333',
                  marginTop: '5px',
                  opacity: expandedId === item.id ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  boxShadow: '0px 4px 10px rgba(0,0,0,0.1)'
                }}>
                  <strong>Result:</strong> {item.result} <br />
                  <small>Time: {new Date(item.createdAt).toLocaleString()}</small>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HistoryList;
