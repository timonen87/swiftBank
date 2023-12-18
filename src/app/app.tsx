import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({ subsets: ["latin"] });

export function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
