

import { useState } from "react";

import Editor from "@monaco-editor/react";
import { PulseLoader as Loader } from "react-spinners";

import { cn } from '@/lib/utils';
import examples from "./blade-example";

interface MonacoEditorProps {
    className?: string;
}
export default function MonacoEditorBlade({ className }: MonacoEditorProps) {
    //const [theme, setTheme] = useState("vs-dark");
    const theme = "vs-dark";
    const [language, setLanguage] = useState("blade");
    const [isEditorReady, setIsEditorReady] = useState(false);

    function handleEditorDidMount() {
        setIsEditorReady(true);
    }


    return (
        <>
            <Editor
                className={cn("w-full h-full", className)}
                // height="calc(100% - 19px)" // By default, it fully fits with its parent (was 19px)
                theme={theme}
                language={language}
                value={examples["blade"]}
                onMount={handleEditorDidMount}
                loading={
                    <div className='hidden'><Loader color={'white'} /></div>
                }
                options={{
                    fontSize: 15,
                    //fontFamily: 'Jetbrains-Mono',
                    fontLigatures: true,
                    wordWrap: 'off',
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
