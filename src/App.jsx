const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />
      <Find />

      <hr />
 
      <List list={stories} /> {/* entire list of stories is passed as props to List*/}
    </div>
  );
};

const Search = () => {
  const handleChange = (event) => { // notice how event handler function is concise with arrow function. Can have parametere with handleChange(param)])
    //ALL the stuff below happens after search bar input CHANGES
    // synthetic event, console object is recorded
    console.log(event);
    // value of target, CURRENT VALUE of input field is logged (here: input HTML element)
    console.log(event.target.value);
    // overall, handleChange  wraps event handler in a SyntheticEvent object to standardize the behavior across different browsers
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/> {/* onChange = {}, event name is Change, handleChange is event handler function */}
    </div>
  );
};

const Find = () => {
  const handleClick = (event) => { 
    console.log(event);
    // value of target, CURRENT VALUE of input field is logged (here: input HTML element)
    console.log(event.target.value);
    // overall, handleChange  wraps event handler in a SyntheticEvent object to standardize the behavior across different browsers
  };

  return (
    <div>
      <label htmlFor="find">Find: </label>
      <input id="find" type="text" onClick={handleClick}/> {/* onClick = {}, event name is Click, handleClick is event handler function */}
    </div>
  );
};

const List = (props) => ( // introducing parameter LIST OF ITEMS is props. iterate thru props.list to get items to pass to Item
  <ul>
    {props.list.map((item) => ( // overall props flow from paretn to child, like list to item, etc. Unidirectional! 
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => ( // introducing parameter EACH ITEM is props. display properties of EACH item/story
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

export default App;