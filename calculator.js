import React, { useState } from 'react';

function Calculator() {
    const [equation, setEquation] = useState("")
    const [answer, setAnswer] = useState("")

    function handleSubmission(e) {
        e.preventDefault()

        const regex = /(\d+)\s*([+\-*/])\s*(\d+)/

        const match = equation.match(regex)

        if(match) {
            const num1 = parseInt(match[1], 10)
            const operator = match[2]
            const num2 = parseInt(match[3], 10)

            switch (operator) {
                case '+':
                    return setAnswer(num1 + num2)
                case '-':
                    return setAnswer(num1 - num2)
                case '*':
                    return setAnswer(num1 * num2)
                case '/':
                    if (num2 === 0) {
                        return setAnswer("undefined")
                    }
                    else {             
                        return setAnswer(num1 / num2)
                    }
                default:
                    return setAnswer('Invalid operator')
            } 

        } else {
            return setAnswer('Invalid equation format')
        }
    }

    function handleClick(num) {
        setEquation(equation => equation + num)
    }

    return (
        <>
            <form onSubmit={handleSubmission}>
                <input className="equation-input" name="equation-input" onChange={e => setEquation(e.target.value)} value={equation}/>
                <div>
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(num => (
                        <button type="button" key={num} value={num} name={num} onClick={() => handleClick(num)}>{num}</button>
                    ))}
                </div>
                <div>
                    {["+", "-", "*", "/"].map(op => (
                        <button type="button" key={op} value={op} name={op} onClick={() => handleClick(op)}>{op}</button>
                    ))}
                </div>
                <button name="submit" type='submit'>Enter</button>
            </form>
            <h1 className='answer'>{answer}</h1>
        </>
    )
}

export default Calculator;