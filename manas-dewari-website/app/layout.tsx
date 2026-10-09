import type { Metadata } from 'next';
import './globals.css';
import { origin } from './content';
const title = 'Manas Dewari | Co-founder & CTO at Zryth | AI & Automation';
const description = 'Manas Dewari, Co-founder & CTO at Zryth Solutions Pvt. Ltd. Practical Agentic AI, enterprise automation and product engineering. Book a conversation.';
export const metadata:Metadata={metadataBase:new URL(origin),title,description,alternates:{canonical:origin},openGraph:{type:'website',url:origin,title,description,siteName:'Manas Dewari',images:[{url:'/og.png',width:1536,height:1024,alt:'Manas Dewari — Technology, AI & Automation'}]},twitter:{card:'summary_large_image',title,description,images:['/og.png']},icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
