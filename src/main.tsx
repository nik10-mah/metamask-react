import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import theme from './theme.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { MetaMaskProvider } from '@metamask/sdk-react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MetaMaskProvider
            debug={false}
            sdkOptions={{
                dappMetadata: {
                    name: "MetaMask React App",
                    url: window.location.href,
                },
                preferDesktop: true,
                infuraAPIKey: import.meta.env.VITE_INFURA_API_KEY,
                // Other options
            }}
        >
      <App /></MetaMaskProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
