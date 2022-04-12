import CreateMemories from "./components/CreateMemories";
import Memories from "./components/Memories";
import Navbar from "./components/Navbar";
import SearchMemories from "./components/SearchMemories";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="row">
        <Memories />
        <div>
          <SearchMemories />
          <CreateMemories />
        </div>
      </div>
    </div>
  );
}

export default App;
