/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSDK } from "@metamask/sdk-react";
import { Button, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useState } from 'react';
import { NavBar } from './NavBar';
import { SDKProvider } from '@metamask/sdk';
import { Buffer } from "buffer";
import { MessageDialog } from "./MessageDialod";
window.Buffer = window.Buffer || Buffer;

const sendPersonalSign = async (provider: SDKProvider, message: string) => {
  try {
    const from = provider.getSelectedAddress();
    // const message = 'Hello World from the Create React dapp!';
    const hexMessage = '0x' + Buffer.from(message, 'utf8').toString('hex');

    const sign = await (window.ethereum as any).request({
      method: 'personal_sign',
      params: [hexMessage, from],
    });
    // const sign = await provider // Or window.ethereum if you don't support EIP-6963.
    //   .request({
    //     method: "personal_sign",
    //     params: [hexMessage, from],
    //   });
    console.log(`sign: ${sign}`);
    return sign;
  } catch (err) {
    console.log(err);
    return "Error: " + (err as any).message;
  }
};


export const App = () => {

  // const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const { sdk, connected, provider, chainId, balance, account } = useSDK();
  const [response, setResponse] = useState<unknown>('');

const [open, setOpen] = useState(false);
  // const [account, setAccount] = useState(null)

  // useEffect(() => {
  //   if(connected) {

  //   }
  // }, [connected]);

  const connect = async () => {
    try {
       await sdk?.connect();
      // setAccount(accounts?.[0]);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  const disconnect = async () => {
    try {
      sdk?.disconnect();
      // setAccount(null);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  const ethPersonalSign = async (message: string) => {
    if (!provider) {
      setResponse(`invalid ethereum provider`);
      return;
    }
    const result = await sendPersonalSign(provider, message);
    setResponse(result);
  };

  return (
    <Container>
      <NavBar>
        {connected ? <Button color="inherit" onClick={disconnect}>Terminate</Button> : <Button color="inherit" onClick={connect}>Connect</Button>}
      </NavBar>
      {
        connected &&
        <List>
          <ListItem>
            <ListItemText primary={`Connected to chain ${chainId}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Account:  ${account}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Balance:  ${balance}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Response:  ${response}`} />
          </ListItem>
          <ListItem>
            <Button color="secondary" variant="contained"  onClick={() => setOpen(true)}>Sign</Button>
          </ListItem>
          
        </List>

      }
      {open && <MessageDialog onConfirm={ethPersonalSign} handleClose={() => setOpen(false)}/>}
      {!connected && <Typography align="center" variant="h4" >Metamask provider not available</Typography>}

      

    </Container>
  )
}

export default App
