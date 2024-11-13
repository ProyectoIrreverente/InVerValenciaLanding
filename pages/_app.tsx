import { Provider } from "@/components/ui/provider"
import { AppProps } from "next/app"
import Layout from "@/components/Tools/Layout"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}