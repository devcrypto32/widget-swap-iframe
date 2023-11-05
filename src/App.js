import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import './index.css'


const jsonRpcUrlMap = {
  1: ['https://mainnet.infura.io/v3/c8a21aca4e2c4750ac7905d192427bf7']
}

const theme = {
  primary: '#FFF',
  secondary: '#A9A9A9',
  interactive: '#000',
  container: '#4E4E5A',
  module: '#222633',
  accent: '#71FF98',
  outline: '#CC1',
  dialog: '#000',
  fontFamily: 'Josefin Sans',
  borderRadius: 0.5,
}

function App() {
  return (
    <div className="Uniswap">
    <SwapWidget jsonRpcUrlMap={jsonRpcUrlMap} theme={theme} width="100%"/>
  </div>
  );
}

export default App;
