'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { FaMicrophone } from 'react-icons/fa'
import makeCommand from '@/components/commands'
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation'

type Text = string

declare global {
    interface Window {
        SpeechRecognition: any
        webkitSpeechRecognition: any
    }
}

export default function Component() {
    const route = useRouter()
    const [transcript, setTranscript] = useState<string>("")
    const [speaking, setSpeaking] = useState<boolean>(true);
    function speak(text: Text) {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.rate = 1
        utterance.pitch = 1
        utterance.volume = 5
        window.speechSynthesis.speak(utterance)
    }

    function startWish() {



        const hours = new Date().getHours()
        if (hours >= 0 && hours < 12) {
            speak("Good Morning Sir")
        } else if (hours >= 12 && hours < 17) {
            speak("Good Afternoon Sir")
        } else if (hours >= 17 && hours < 21) {
            speak("Good Evening Sir")
        } else {
            speak("Good Night Sir")
        }
    }

    useEffect(() => {
        startWish()
    }, [])

    const startRecognition = () => {
        setSpeaking(false)
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        const recognition = new SpeechRecognition()

        recognition.onresult = (event: any) => { 
            const currentIndex = event.resultIndex
            const transcript = event.results[currentIndex][0].transcript
            const lowerCaseTranscript = transcript.toLowerCase();
            setTranscript(lowerCaseTranscript)
            console.log(event)
            makeCommand(lowerCaseTranscript, speak)
        }

        recognition.onend = () => {
            setSpeaking(true)
        }

        recognition.start()
    }

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: 'url("/technogif.gif")' }}
            />

                <div className='absolute z-10 top-10 left-10 bg-white p-3 rounded-full cursor-pointer'>
                <FaArrowLeft onClick={()=>route.push('/')}/>
                </div>
            <div className="absolute bottom-20 lg:bottom-10 left-0 right-0 z-10 flex justify-center">
                {speaking ? (
                    <Button
                        className="bg-white/80 text-black hover:bg-white"
                        onClick={startRecognition}
                    >
                        <FaMicrophone className="mr-2" />
                        <span>
                            {transcript ? transcript : 'Click to Start Listening'}
                        </span>
                    </Button>
                ) : ""}
            </div>
        </div>
    )
}
