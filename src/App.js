import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("/hello")
      .then((response) => {
        return response.json();
      })
      .then(function (data) {
        setMessage(data);
      });
  }, []);

  return (
    <div>
      <div>가능</div>
      <ul>
        {message.map((text, index) => (
          <li key={`${index}-${text}`}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
