import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const welcome = {
  greeting: "Salutations",
  subject: "Web Developer",
};

const list = [
  {
    title: 'YZ',
    url: 'https://reactjs.org/',
    author: 'Y Zhong',
    num_comments: 2,
    points: 3,
    objectID: 0,
}, {
  title: 'AB',
  url: 'https://redux.js.org/',
  author: 'A Booth, C Dean',
  num_comments: 5,
  points: 1,
  objectID: 1,
}, ];

function getNote(note) {
  return note;
}

function App() {
  const [count, setCount] = useState(0)
  const title = 'Kyrie';

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + {title} </h1>

      <h2> {welcome.greeting} {welcome.subject}. {getNote('Welcome to React')}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <label htmlFor="filter"> Filter: </label>
        <input id="filter" type = "text" />
        <hr />
        <ul>
        {list.map(function (item) {
          return <li key ={item.objectID}>{item.title}</li>;
        })}
</ul>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
