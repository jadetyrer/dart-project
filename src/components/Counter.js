import React, { useState } from 'react';
import { Container, Card, Button, Letter, Time } from './StyledComponents'
const data = require('./data.json');

const Counter = () => {
  let startTime = performance.now();
  const groups = data.groups
  const selection = data.selections
  const [showResult, setShowResult] = useState(false)

  const mostMatches = (checkMatches) => {
    let counts = []
    let letters = "ABCDEF"
    for(let group in groups) {
      counts.push(checkMatches(groups[group]))
    }
    return letters.charAt(counts.indexOf((Math.max(...counts))))
  }

  const checkMatches = (group) => {
    let matches = []
    for(let lettersGroup of group) {
      for(let lettersSelection of selection) {
        if(lettersGroup === lettersSelection) {
          matches.push(lettersGroup)
        }
      }
    }
    return matches.length
  }
  
  const handleClick = () => {
    setShowResult(true)
  }
  let endTime = performance.now()
  let executionTime = endTime - startTime 
  
  return (
    <Container>
      <Button onClick={handleClick}>Calculate</Button>
      <Card>
        <p>Set:</p>
        {showResult && (<Letter>{mostMatches(checkMatches)}</Letter>)}<br/>
        {showResult && (<Time>Execution time:<br/>{executionTime}ms</Time>)}
      </Card>
    </Container>
  )
}

export default Counter