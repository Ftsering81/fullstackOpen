import { useState } from 'react';

// Displays the headings for the page
const Header = (props) => <h1>{props.title}</h1>

// Creates and displays a button for each category and assigns the given event handler to it
const Button = (props) => <button onClick={props.handleClick}> {props.text} </button>

// Displays a single statistic for the feedback given as a table row
const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text} </td>
      <td>{props.value}</td>
    </tr>
  )
}


// Displays all of the statistics for the feedback given if any feedback given
const Statistics = (props) => {
  const {good, neutral, bad, total} = props 

  // This function returns the average score of the feedback given
  const getAverage = (goodCount, badCount, totalCount) => { 
    const average = (goodCount - badCount) / totalCount // average score of the given feedback 
    return(average)
  }

  // This function returns the percentage of positive feedback given
  const getPositive = (goodCount, totalCount) => {
    const positive = (goodCount / totalCount) * 100 // percentage of only positive(good) scores
    return(positive)
  }

  // Display the statistics ONLY IF some feedback has been given. Else display a text saying no feedback given
  if (good !== 0 || neutral !== 0 || bad !== 0 ) { 
    return(
      <table>
        <tbody>
          <StatisticLine text='good' value={good}/>
          <StatisticLine text='neutral' value={neutral}/>
          <StatisticLine text='bad' value={bad}/>
          <StatisticLine text='all' value={total}/>
          <StatisticLine text='average' value={getAverage(good, bad, total)}/>
          <StatisticLine text='positive' value={getPositive(good, total) + '%'}/>
        </tbody>
      </table>
    )
  }
  else {
    return(<div> No feedback given </div>)
  }
}

// The top-most parent component
function App() {

  // 4 pieces of state of this component
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  // Event handlers for each button
  const incrementGood = () => {
    setGood(good + 1)
    setTotal(total + 1)

  }

  const incrementNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const incrementBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }


  return (
    <div className="App">
      <Header title='give feedback'/>
      <Button handleClick={incrementGood} text='good'/>
      <Button handleClick={incrementNeutral} text='neutral'/>
      <Button handleClick={incrementBad} text='bad'/>
      <Header title='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>

    </div>
  );
}

export default App;
