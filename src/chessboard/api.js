export const callAPI = async (fen) => {
    const url = `http://localhost:8000/best-move`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fen })
      });
      const data = await response.json();
      return data.agent_response;
    } catch (error) {
      console.error("Error fetching best move:", error);
      return null;
    }
  };
  

  export const callAnalysisAPI = async (fenHistory) => {
    const url = `http://localhost:8000/analysis`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fenHistory }) 
      });
      const data = await response.json();
      return data.agent_response;
    } catch (error) {
      console.error("Error fetching analysis:", error);
      return null;
    }
  };
  
  export const callStateAPI = async (fen) => {
    const url = `http://localhost:8000/state`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fen }) 
      });
      const data = await response.json();
      return data.agent_response; 
    } catch (error) {
      console.error("Error fetching state analysis:", error);
      return null;
    }
  };