import "./App.scss";
import Card from "./components/Card";
import data from "./components/Card/data.json";

function App() {
  return (
    <>
      <Card data={data} />
    </>
  );
}

export default App;
