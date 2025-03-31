import "@/styles/globals.css";
import { Baloo_2 } from "next/font/google";
import { RoleProvider } from '../context/RoleContext';

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <RoleProvider>
      <main className={baloo2.className}>
        <Component {...pageProps} />
      </main>
    </RoleProvider>
  );
}