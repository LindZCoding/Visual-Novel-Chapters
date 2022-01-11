import React from "react";
import { useState } from "react";

const FirstPage = (props) => {

    let [currentLine, setCurrentLine] = useState(localStorage.getItem('storySave') ? localStorage.getItem('storySave') : 0)



    const nextButton = () => {
        setCurrentLine(currentLine + 1)
        localStorage.setItem('storySave', currentLine + 1)
    }

    const mapDialogues = props.dialogues.map((dialogue) => {
        // console.log('dialogue: ', dialogue.dialogueLine)
        return dialogue.dialogueLine
    })

    

    return (
        <div className="dialogues">
            {mapDialogues[currentLine]}
            <button onClick={() => nextButton()}>Next</button>
        </div>
    )
}

export default FirstPage;