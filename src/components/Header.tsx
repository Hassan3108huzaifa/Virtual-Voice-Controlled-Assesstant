'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
export default function Header() {
    const route = useRouter();
    return (
        <div className="relative h-screen overflow-hidden">
            <video
                src="/video/bg-video.mp4"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
            />

            <div className="relative z-20 text-white h-full flex flex-col">
                <nav className="flex justify-between p-4 md:p-6 max-w-7xl mx-auto w-full">
                    <div className="logo text-2xl md:text-5xl font-bold font-jersey"
                        style={{ fontFamily: "var(--font-jersey)" }}
                    >Hassan AI</div>
                    <div className="flex gap-5 md:gap-10">
                        <Button onClick={()=>route.push('/')} className="bg-transparent text-white text-xl" style={{ fontFamily: "var(--font-jersey)" }}>
                            Home
                        </Button>
                        <Button onClick={()=>route.push('/voiceassesstent')}>Talk with Me</Button>
                    </div>
                </nav>
                <div className="flex-grow flex items-center justify-center">
                    <header className="text-center -mt-16" style={{ fontFamily: "var(--font-jersey)" }}>
                        <h1 className="text-4xl lg:text-7xl font-bold mb-4">Hello There!</h1>
                        <h1 className="text-4xl lg:text-7xl font-bold">How Can I help you today?</h1>
                        <Button onClick={()=>route.push('/voiceassesstent')} className="text-3xl px-6 py-8 bg-[#02B3FF] mt-14">Talk with Me -&gt;</Button>
                    </header>
                </div>
            </div>
        </div>
    )
}
