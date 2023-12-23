import {Header} from "@/components/header";
//import '@/styles/globals.css'


export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
        <>
            <Header/>
            <div style={{padding: '30px 100px'  }}>{children}</div>
        </>)

}