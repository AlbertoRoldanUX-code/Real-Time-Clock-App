import React from 'react';




 


function App() {
  const now = new Date().toLocaleTimeString('en-US', { hour12: false, 
    hour: "numeric", 
    minute: "numeric"
  })
  
  const [time, setTime] = React.useState(now);

  function updateTime (){
    const newTime = new Date().toLocaleTimeString('en-US', { hour12: false, 
      hour: "numeric", 
      minute: "numeric"
    });
    setTime(newTime);
  }
  
  
  return (
        <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
    )
}

export default App;
