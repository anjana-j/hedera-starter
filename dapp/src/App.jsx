import { JsonABI } from "./abi";
import { ethers } from "ethers";
import { createSignal } from "solid-js";

import Header from './components/header';

const privateKey    = import.meta.env.VITE_HEX_PRIVATE_KEY;
const contractAddr  = import.meta.env.VITE_CONTRACT_ADDRESS;
const jsonRPC       = import.meta.env.VITE_TESTNET_ENDPOINT;

const provider      = new ethers.providers.JsonRpcProvider(jsonRPC);
const wallet        = new ethers.Wallet(privateKey, provider);
const contract      = new ethers.Contract(contractAddr,JsonABI,wallet);

function App() {

  const [value, setValue] = createSignal('');
  const [inputValue, setInputValue] = createSignal('');
  const [warningMessage, setWarningMessage] = createSignal('');

  async function getMessage() {
    const result = await contract.getMessage();
    setValue(result);
  }

  async function setMessage() {

    if (inputValue() === '') {
      setWarningMessage('Please enter a message.');

    } else {

      setWarningMessage('');
      const result = await contract.setMessage(inputValue());
      const receipt = await result.wait();
      
      const msg = `Transaction confirmed in block ${receipt.blockNumber}`;
      
      setWarningMessage(msg);
      console.log(msg);
    }
    
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <Header />

      <div id="content">
        <input class="text-box" type="text" value={value()} /><button class="button-4" type="button" onClick={getMessage}>GetMessge()</button>
        <br />
        <input class="text-box" type="text" value={inputValue()} onInput={handleInputChange} /><button class="button-4" type="button" onClick={setMessage}>SetMessge()</button>
        <div>{warningMessage()}</div>
      </div>
    </>  
  );
}

export default App;
