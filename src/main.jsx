import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// wrap whole entire application
import AppProvider from "./context";

// import react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import react query devtools
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// create a QueryClient instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </AppProvider>
);
