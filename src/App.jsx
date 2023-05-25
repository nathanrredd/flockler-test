import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlocklerEmbed from "@flockler/react-flockler-embed";

function App() {
  const [count, setCount] = useState(0);
  const [embedCode, setEmbedCode] = useState("188496d05ec00de9793971c3e1e56b20");

  const handleFacebook = () => {
    setEmbedCode("18853cae4190fd4166772d70dacc6bff");
  }

  const handleTwitter = () => {
    setEmbedCode("18853cc75730ca95012b6305e2cc6cec");
  }

  const handleInstagram = () => {
    setEmbedCode("18853d0a218081551f063e03771bf564");
  }

  return (
    <div width="100%">
      <div width="100%">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div style={{
        display: 'flex',
        flexFlow: "column wrap",
        alignContent: "center",
      }}>
        <h1>Socials</h1>
        <div style={{
          display: 'flex',
          flexFlow: "row wrap",
          justifyContent: "center",
          gap: "1rem",
        }}>
          <button onClick={handleFacebook}>
            Facebook
          </button>
          <button onClick={handleTwitter}>
            Twitter
          </button>
          <button onClick={handleInstagram}>
            Youtube
          </button>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <FlocklerEmbed siteUuid='188448481140036a199e368b1567f1a1' embedUuid={embedCode} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
