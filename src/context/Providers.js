// Component for wrapping any application wide context providers

import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

function Providers(props) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <Router>{props.children}</Router>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default Providers;
