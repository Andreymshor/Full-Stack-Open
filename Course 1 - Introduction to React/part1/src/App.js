// This file defines a component with the name App
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   // any javascript code with the curly braces is evaluated and result is embedded into defined place in HTML produced by component
//   return(
//   <div>
//     <p>Hello world, it is {now.toString()}</p>
//     <p>{a} plus {b} is {a + b}</p>
//   </div>
//   )

// }

// react components must be capitalized
const Hello = (props) => { // we are able to nest components
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const name ='Peter'
  const age = 10
  return ( // Like so:
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10}/>
      <Hello name={name} age={age}/> 
    </>
  )
}

export default App;
