import Image from 'next/image'
import React from 'react'

const AboutMain = () => {
    return (
        <div className='bg-[#0F062D] '>
            <div className='h-screen text-white flex justify-center items-center text-center '>
                <div className='max-w-7xl flex w-full lg:flex-row flex-col m-5'>

                    <div className='w-1/2 flex justify-center mx-auto'>
                        <Image src={'/tech1.png'} width={400} height={400} alt='Assesstant Image'></Image>
                    </div>
                    <div className='lg:w-1/2 text-left '>

                        <h1 className='font-bebas-neue text-6xl tracking-widest mt-5'>I&apos;m Hassan</h1>
                        <p className='my-10 text-2xl font-kulim'>Hassan, Your Virtual Assistant is a voice-driven application created by Hassan, a frontend development student. It simplifies online navigation by allowing users to access popular websites like YouTube and Facebook through voice commands.</p>


                        <p className='my-10 text-2xl'>Utilizing modern web technologies like React and the Web Speech API, this project aims to enhance user experience by providing a seamless and intuitive way to browse the web.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMain