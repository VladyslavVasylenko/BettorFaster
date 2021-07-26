import './App.css';
// import GetNews from './Block-news/GetNews';
import BlockMessage from './Block-message/BlockMessage';
import News from './Block-news/News';
// import Second from './Block-news/Second';

function App() {
  return (
    <div className="App">
      {/* <GetNews/> */}
      <BlockMessage/>
      {/* <Second/> */}
      <News/>
    </div>
  );
}

export default App;
