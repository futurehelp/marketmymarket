import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'Market My Market | SEO & Content Marketing Agency', description:'Market My Market helps businesses grow with transparent digital marketing, SEO, content, and strategy.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
