import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';

function App() {
  return (
    <div style={{ width:'90vw', height:'70vh' }}>
      <SendbirdApp
        appId={import.meta.env.VITE_SENDBIRD_APPLICATION_ID}
        userId={"Jeanrose"}
        accessToken={import.meta.env.VITE_SENDBIRD_API_TOKENS}
      />
    </div>
  )
}

export default App;