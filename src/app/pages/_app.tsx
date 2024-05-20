
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

export default function MyApp({ Component, pageProps }: AppProps) {
    
    <ThemeProvider>
        return <Component {...pageProps} />
    </ThemeProvider>
  
}