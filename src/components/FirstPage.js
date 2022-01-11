import React from "react";
import { useState } from "react";
import './Story.css'
import axios from "axios";
import { useEffect } from "react";
import apiUrl from '../apiConfig'


const FirstPage = (props) => {

    let [currentLine, setCurrentLine] = useState(localStorage.getItem('storySave') ? localStorage.getItem('storySave') : 0)
    const [choices, setChoices] = useState([])
    const [currentChoice, setCurrentChoice] = useState([])
    const [currentBackground, setCurrentBackground] = useState(props.dialogues[currentLine].dialogueLine[0].background)

    useEffect(() => {
        if (!props.user) {
            return;
        }
        axios.get(`${apiUrl}/choices`, {
            headers: {
                Authorization: `Bearer ${props.user.token}`,
            },
        })
            .then((resp) => {
                // console.log('resp for getting choices', resp.data)
                setChoices(resp.data)
            })
            .catch(err => console.log(err))
    }, [])


    const nextButton = () => {
        let pd = props.dialogues
        let index = currentLine + 2 > pd.length ? 0 : currentLine + 1

        setCurrentLine(index)

        localStorage.setItem('storySave', index)

        if (pd[index].dialogueLine[0].background !== null) {
            
            setCurrentBackground(pd[index].dialogueLine[0].background)
        }
    }

    const mapDialogues = props.dialogues.map((dialogue) => {
        // console.log('dialogue: ', dialogue.dialogueLine[0].dialogueLine)
        return dialogue.dialogueLine[0].dialogueLine
    })


    const mapChoices = choices.map((choice) => {
        console.log('choice array mapping', choice.choiceLine)
        if (currentLine === 3) {
            return choice.choiceLine
        } else {
            return;
        }

    })



    return (
        <div className="dialogues">
            <div className="story">
                <div className="text">
                    {mapDialogues[currentLine]}
                    {mapChoices[0]}
                    <br></br>
                    {mapChoices[1]}
                </div>
                <div className="background-image">
                    <img className="background-img" src={currentBackground} alt="background-image" />
                </div>
            </div>
            <button className="next-button" onClick={() => nextButton()}>Next</button>
        </div>
    )
}

export default FirstPage;