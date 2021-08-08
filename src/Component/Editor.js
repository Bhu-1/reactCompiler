    import {useState} from 'react'
import AceEditor from 'react-ace'
import { Fragment } from 'react'
// import mode-<language> , this imports the style and colors for the selected language.
import 'ace-builds/src-noconflict/mode-javascript'
// there are many themes to import, I liked monokai.
import 'ace-builds/src-noconflict/theme-monokai'
// this is an optional import just improved the interaction.
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'
import OutputScreen from './OutputScreen'
import Button from './Button'

const demo = `
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        <style>
        </style>
    </head>
    <body>
        <h1>Write Your Code</h1>
    </body>
</html>
`;

function Editor() {
    const [code, setCode] = useState(demo)

    const [htmlCode, setHtmlCode] = useState(demo);
    
    const runCode = () =>{
        setHtmlCode(code);
    }

    const clearCode = () => {
        setHtmlCode('');
        setCode('');
    }

    return (
        <Fragment>
        <div style={{height: '100vh',}}>
                <div>
                    <Button onclick={runCode}>Run</Button>
                    <Button onclick={clearCode}>Clear</Button>
                </div>
                <AceEditor
                style={{
                    height: '94%',
                    width: '100%',
                    overflow: 'hidden',
                }}
                placeholder='Start Coding'
                mode='javascript'
                theme='monokai'
                name='basic-code-editor'
                onChange={currentCode => setCode(currentCode)}
                fontSize={18}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={code}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 4,
                }}
            />
        </div>
        <OutputScreen htmlElement = {htmlCode}/>    
        </Fragment>
    )
}

export default Editor


