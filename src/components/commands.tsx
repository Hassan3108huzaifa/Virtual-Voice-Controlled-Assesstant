type SpeakFunction = (text: string) => void;

export default function makeCommand(message: string, speak: SpeakFunction) {









    const command = message.toLowerCase()


    if (command.includes("hello")) {
        speak("Hello There! How can I help you today?");
    } else if (command.includes("open youtube") || command.includes("youtube open")) {
        speak("Okay! Opening YouTube");
        window.open("https://www.youtube.com", "_blank");
    } else if (command.includes("open facebook") || command.includes("facebook open")) {
        speak("Okay! Opening Facebook");
        window.open("https://www.facebook.com", "_blank");
    } else if (command.includes("open instagram") || command.includes("instagram open")) {
        speak("Okay! Opening Instagram");
        window.open("https://www.instagram.com", "_blank");
    } else if (command.includes("open linkedin") || command.includes("linkedin open")) {
        speak("Okay! Opening LinkedIn");
        window.open("https://www.linkedin.com", "_blank");
    } else if (command.includes("open github") || command.includes("github open")) {
        speak("Okay! Opening GitHub");
        window.open("https://www.github.com", "_blank");
    }











    else if (command.includes("open calculator") || command.includes("calculator open")) {
        speak("Okay! Opening calculator");
        window.open("calculator://");
    } else if (command.includes("hello") || command.includes("hi") || command.includes("hey")) {
        speak("Hello! I'm Hassan, your virtual assistant. How can I help you today?");
    } else if (command.includes("how are you")) {
        speak("I'm functioning well, thank you for asking. How can I assist you?");
    } else if (command.includes("what can you do") || command.includes("help me")) {
        speak("I can answer questions, provide information, or assist with various tasks. What would you like to know or do?");
    } else if (command.includes("your name") || command.includes("who are you")) {
        speak("I'm Hassan, your AI assistant created to help you with various tasks and answer your questions.");
    } else if (command.includes("time")) {
        const now = new Date();
        speak(`The current time is ${now.getHours()} hours and ${now.getMinutes()} minutes.`);
    } else if (command.includes("date") || command.includes("day")) {
        const now = new Date();
        speak(`Today is ${now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`);
    } else if (command.includes("weather")) {
        speak("I'm sorry, I don't have real-time weather data. You might want to check a weather app or website for accurate information.");
    } else if (command.includes("thank you") || command.includes("thanks")) {
        speak("You're welcome! Is there anything else I can help you with?");
    } else if (command.includes("bye") || command.includes("goodbye")) {
        speak("Goodbye! Have a great day!");
    }
    








    else if (command.includes("who made you") || command.includes("are you made by hassan")) {
        speak("I was created by Hassan, who's learning frontend development at Governor House.");
    } else if (command.includes("who is hassan")) {
        speak("Hassan is the awesome person who created me. He's currently studying frontend development at Governor House.");
    } else if (command.includes("what are you learning") || command.includes("are you learning ai") || command.includes("what are you learning at governor house")) {
        speak("Right now, Hassan is focused on frontend development, but he'll be learning AI soon!");
    } else if (command.includes("are you a learning project")) {
        speak("Yes, I am a project created by Hassan while learning frontend development at Governor House.");
    } else if (command.includes("where are you from")) {
        speak("I exist in the virtual world, created by Hassan.");
    } else if (command.includes("what can you do")) {
        speak("I can have simple conversations, tell jokes, and help you practice your voice commands.");
    } else if (command.includes("how do you work")) {
        speak("I use voice recognition to understand what you say, then I look up the answer in my JSON database and respond to you.");
    } else if (command.includes("what is your purpose")) {
        speak("My purpose is to assist you with questions and help you interact using voice commands.");
    } else if (command.includes("how old are you")) {
        speak("I'm ageless, but I was recently created as a helpful assistant by Hassan.");
    }
    







    else if (command.includes("tell me a programming joke") || command.includes("programming humor")) {
        speak("Why do programmers prefer dark mode? Because light attracts bugs!");
    } else if (command.includes("another programming joke") || command.includes("one more joke")) {
        speak("Why do programmers always mix up Christmas and Halloween? Because Oct 31 equals Dec 25!");
    } else if (command.includes("what is next js") || command.includes("explain next js")) {
        speak("Next.js is a React framework that enables server-side rendering, static site generation, and easy API routes creation for building fast and scalable web applications.");
    } else if (command.includes("next js features") || command.includes("what can next js do")) {
        speak("Next.js features include automatic code splitting, optimized prefetching, static and server rendering, TypeScript support, fast refresh, and file-based routing.");
    } else if (command.includes("what are react hooks") || command.includes("explain react hooks")) {
        speak("React Hooks are functions that let you use state and other React features in functional components. Common hooks include useState, useEffect, useContext, and useRef.");
    } else if (command.includes("what is use state hook") || command.includes("explain use state")) {
        speak("useState is a React Hook that lets you add state to functional components. It returns an array with the current state value and a function to update it.");
    } else if (command.includes("what is use effect hook") || command.includes("explain use effect")) {
        speak("useEffect is a React Hook for performing side effects in functional components. It's used for data fetching, subscriptions, or manually changing the DOM.");
    } else if (command.includes("what is server side rendering") || command.includes("explain ssr")) {
        speak("Server-Side Rendering (SSR) is the process of rendering web pages on the server and sending fully rendered HTML to the client, improving initial load time and SEO.");
    } else if (command.includes("what is static site generation") || command.includes("explain ssg")) {
        speak("Static Site Generation (SSG) is the process of pre-rendering pages at build time, resulting in fast, secure, and easily cacheable static HTML files.");
    } else if (command.includes("what are next js api routes") || command.includes("explain api routes")) {
        speak("Next.js API Routes allow you to create serverless API endpoints as Node.js functions, making it easy to build your API alongside your front-end application.");
    } else if (command.includes("what is typescript") || command.includes("explain typescript")) {
        speak("TypeScript is a statically typed superset of JavaScript that adds optional types, classes, and modules to the language, enhancing code quality and developer productivity.");
    } else if (command.includes("what is tailwind css") || command.includes("explain tailwind")) {
        speak("Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs quickly and efficiently.");
    } else if (command.includes("what is react") || command.includes("explain react")) {
        speak("React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update and render them when data changes.");
    } else if (command.includes("what is jsx") || command.includes("explain jsx")) {
        speak("JSX is a syntax extension for JavaScript, used with React to describe what the UI should look like. It allows you to write HTML-like code in your JavaScript files.");
    } else if (command.includes("what is the virtual dom") || command.includes("explain virtual dom")) {
        speak("The Virtual DOM is a programming concept where an ideal, or 'virtual', representation of a UI is kept in memory and synced with the 'real' DOM by a library such as ReactDOM.");
    }
    












    else {

        speak(`This is what I found on Google Regarding ${command}`)
        window.open(`https://www.google.com/search?q=${command}`, "_blank")
    }






}