// Header component renders the name of the course
const Header = (props) => {
  return(<h1>{props.name}</h1>)
}

// Content component renders Part components
const Content = (props) => {
  const [part1, part2, part3] = props.parts //each part of the parts array is assigned to the variables part1, part2, and part3 respectively.

  return(
    <div>
      <Part part={part1.name} exercises={part1.exercises}/>
      <Part part={part2.name} exercises={part2.exercises}/>
      <Part part={part3.name} exercises={part3.exercises}/>
    </div>
  )
}

// Total component renders the total number of exercises.
const Total = (props) => {
  const [part1, part2, part3] = props.parts 

  return(
  <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises} </p>
  )
}

// Part component renders the part and the number of exercises for given part
const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
}

export default App;
