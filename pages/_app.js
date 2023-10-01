import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "../redux/store";
import Layout from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
