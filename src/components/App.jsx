import React from 'react';

function App() {
    return (
        <div className="container">
      <h1>{new Date().toLocaleTimeString('en-US', { hour12: false, 
                                             hour: "numeric", 
                                             minute: "numeric"})}</h1>
      <button>Get Time</button>
    </div>
    )
}

export default App;
