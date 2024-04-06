import './App.css';
import { Image, Box } from "@chakra-ui/react";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src="/Mascot_Popup_256.gif" alt="Image" />
        <Box
          width={256}
          height={16}
          bgGradient="linear(to-b, gray.900, transparent)"

        >
        </Box>
      </header>
    </div>
  );
}


export default App;
