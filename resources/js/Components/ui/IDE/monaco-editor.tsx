

import { useState } from "react";

import Editor from "@monaco-editor/react";
import { PulseLoader as Loader } from "react-spinners";

import examples from "./examples";


export default function MonacoEditorDefault() {
    //const [theme, setTheme] = useState("vs-dark");
    const theme = "vs-dark";
    const [language, setLanguage] = useState("php");
    const [isEditorReady, setIsEditorReady] = useState(false);

    function handleEditorDidMount() {
        setIsEditorReady(true);
    }

    // function toggleTheme() {
    //     setTheme(theme === "light" ? "vs-dark" : "light");
    // }

    function toggleLanguage() {
        switch (language) {
            case "javascript":
                setLanguage("python");
                break;
            case "python":
                setLanguage("php");
                break;
            case "php":
                setLanguage("javascript");
                break;
            default:
                setLanguage("javascript");
        }
    }

    return (
        <>
            {/* <button onClick={toggleTheme} disabled={!isEditorReady}>
                Toggle theme
            </button>*/}
            <button onClick={toggleLanguage} disabled={!isEditorReady}>
                Toggle language
            </button>

            <Editor
                height={'100vh'}
                // height="calc(100% - 19px)" // By default, it fully fits with its parent (was 19px)
                theme={theme}
                language={language}
                value={examples[language]}
                onMount={handleEditorDidMount}
                loading={
                    <div className='hidden'><Loader color={'white'} /></div>
                }
                options={{
                    fontSize: 15,
                    //fontFamily: 'Jetbrains-Mono',
                    fontLigatures: true,
                    wordWrap: 'on',
                    minimap: {
                        enabled: false
                    },
                    bracketPairColorization: {
                        enabled: true
                    },
                    cursorBlinking: 'blink',
                    formatOnPaste: true,
                    suggest: {
                        showFields: false,
                        showFunctions: false
                    }
                }}


            />



        </>
    );
}
