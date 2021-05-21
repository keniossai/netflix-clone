import Row from './Row'
import requests from './requests'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Netflix Clone App Created by Kenneth</h1>
      <Row title='NETFLIX ORIGINAL' fetchUrl={requests.fetchNetflixOriginal} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
