import './App.css';
import { FrameExampleBCollection, FormCheckout } from './ui-components';

function App() {
  return (
    <div className="App">
    <h1>あああ</h1>
    <FrameExampleBCollection 
      justifyContent="flex-start"
      isPaginated itemsPerPage={3} 
      width={{ small: "300px", large: "600px", xl: "800px" }}/>
    </div>
  );
}

export default App;
