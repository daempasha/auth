import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(`http://localhost:8000`).then(response => setData(response.data))
  }, [])

  return (
    <div className="App">
      <p>Test</p>
      <p>Api data: {data}</p>
    </div>
  )
}

export default App
