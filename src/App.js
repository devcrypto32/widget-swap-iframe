import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import './index.css'
import 'iframe-resizer/js/iframeResizer.contentWindow'


const jsonRpcUrlMap = {
  1: ['https://mainnet.infura.io/v3/c8a21aca4e2c4750ac7905d192427bf7']
}

const theme = {
  primary: '#000',
  secondary: '#A60A00',
  container: '#EDB901',
  module: '#fff',
  accent: '#A60A00',
  outline: '#A60A00',
  dialog: '#EDB901',
  fontFamily: 'Inter',  
}

function App() {
  return (
    <div className="Uniswap">
    <SwapWidget jsonRpcUrlMap={jsonRpcUrlMap} theme={theme} width="100%"/>
  </div>
  );
}

export default App;
