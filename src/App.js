import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Landing from "./components/Landing";
import { HashRouter } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HashRouter basename="/">
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <Landing />
        </div>
      )}
    </HashRouter>
  );
}

export default App;
