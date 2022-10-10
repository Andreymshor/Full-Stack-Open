// This file defines a component with the name App
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  // any javascript code with the curly braces is evaluated and result is embedded into defined place in HTML produced by component
  return(
  <div>
    <p>Hello world, it is {now.toString()}</p>
    <p>{a} plus {b} is {a + b}</p>
  </div>
  )

}


export default App;
