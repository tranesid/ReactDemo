
//JSX is not a string or HTML
// it's an extension to javascript
// it allows us to write html in js
// this is a React class component(later)

// this is a React functional component(preffered)
// this is a function => return JSX
function JSXDemo() {
  let name = "Joey";
  let showThing = true
  let hideThing = true
  // function return a string
  const sayHello = () => {
    return `Hello`;
  };

  const getJSX = () => {
    return <p>this is jsx</p>;
  };
  const getMultilineJSX = () => {
    return (
      <div>
        <h1>YO</h1>
        <p>this is jsx</p>
      </div>
    );
  };

  const renderArrayOfObject = ()=>{
    let people = [{name:'tony', age:12},{name:'jill',age:45}]
    return people.map((p)=>{
      return (
        <div>
          <p>name: {p.name}</p>
          <p>age: {p.age}</p>
        </div>
      )
    })
  }
  console.log('YO')
  return (
    <div className="App">
      <h1>Hello JSX World</h1>
      <p>1 + 1 = {1 + 1}</p>
      <h3>call a function that returns a string</h3>
      <p>
        {sayHello()} {name}
      </p>
      <h3>call a function that returns a jsx</h3>
      {getJSX()}
      <h3>call a function that returns more jsx</h3>
      {getMultilineJSX()}
      <h3>call a built js function</h3>
      <p>{new Date().toDateString()}</p>
      <h3>render array of things</h3>
      <p>{[1,2,3,4]}</p>
      <h3>render array of JSX</h3>
      <ul>{[<li>1</li>,<li>2</li>,<li>3</li>]}</ul>
      <h3>render Objects Breaks</h3>
      {/* <p>{name:'TOny'}</p> */}
      <h3>render Objects With JSON.stringify</h3>
      <p>{JSON.stringify({name:'TOny'})}</p>

      <h3>render array of Objects</h3>
      {renderArrayOfObject()}
      
    </div>
  );
}

export default JSXDemo;