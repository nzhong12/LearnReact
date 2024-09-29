import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import PropTypes from 'prop-types'; 
import './App.css';

const welcome = {
  greeting: "Salutations",
  subject: "Web Developer",
};

const list = [
  {
    title: 'site 1, React',
    url: 'https://reactjs.org/',
    author: 'Y Zhong',
    num_comments: 2,
    points: 3,
    objectID: 0,
  }, 
  {
    title: 'site 2, Redux',
    url: 'https://redux.js.org/',
    author: 'A Booth, C Dean',
    num_comments: 5,
    points: 1,
    objectID: 1,
  },
  {
    title: 'site 3, Google',
    url: 'https://Google.com/',
    author: 'People',
    num_comments: 100,
    points: 101,
    objectID: 1,
  },
];

const list2 = [
  {
    title: 'site 1 clone, React',
    url: 'https://reactjs.org/',
    author: 'A B',
    num_comments: 2,
    points: 3,
    objectID: 0,
  }, 
  {
    title: 'site 2 clone, Redux',
    url: 'https://redux.js.org/',
    author: 'C D',
    num_comments: 5,
    points: 1,
    objectID: 1,
  },
];

List.propTypes = {
  items: PropTypes.arrayOf( // prop validation for items which is used in list. This way .map won't complain
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      num_comments: PropTypes.number.isRequired,
      points: PropTypes.number.isRequired,
      objectID: PropTypes.number.isRequired,
    })
  ),
};

Item.propTypes = {
  item: PropTypes.shape({ // prop validation for Item
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    num_comments: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
    objectID: PropTypes.number.isRequired,
  }),
};

function getNote(note) {
  return note;
}

const App = () => { 
  const [count, setCount] = useState(0); // must use () => {  because useState is a named export
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
      <h1>Vite + {title}</h1>
      <h2>{welcome.greeting} {welcome.subject}. {getNote('Welcome to React')}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Search />
        <hr />
        {/* List component can have many instances like below, props are DIFFERENT LISTS. Instance of compoenent is element.*/}
        <List items={list} />
        <List items={list2} />
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

const List = (items) => ( // no bracket needed, IMPLICIT return statement exists
    <ul>
      {items.map((item) => ( /* this mapping is now in the List component, so now a new Item component can be extracted. List will 
      loop through elements of given Items. This contrasts to before where all this work was done in one function */
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
)

function Item({ item }) {  
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>, {item.author}</span>
      <span>, {item.num_comments}</span>
      <span>, {item.points}</span>
    </li>
  );
}

const Search = () => (
    <div>
      <label htmlFor="filter">Filter: </label>
      <input id="filter" type="text" />
    </div>
)

export default App;
