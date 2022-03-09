import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <CrossmintPayButton
              collectionTitle="Beyond Street Cred"
              collectionDescription="Mumbai deployment of BSC"
              collectionPhoto="https://secureservercdn.net/198.71.233.167/q76.b7d.myftpupload.com/wp-content/uploads/2021/11/BSC-Logo3-85x85.png"
              clientId="2b5792de-bf7e-4a63-ab30-ee6090c66ad6"
              mintConfig={{
                  type: '',
                  price: '.2',
                  amount: 1,
                }}
          />
      </header>
    </div>
  );
}

export default App;
