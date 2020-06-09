import React from "react";
import Tweet from "./Tweet";
//* react lets you return code that will automatically compile into HTML
//* we can add logic before the return statement
function App() {
  //* using {} u can add js components to HTML easily
  //* adding () executes function the second it loads up!
  return (
    <div className="app">
      <Tweet name="Dhruv Patel" tweet="Hello there" />
      <Tweet name="Donald Trump" tweet="China" />
      <Tweet name="Barack Obama" tweet="Obama Out" />
      <Tweet
        name="Bernie Sanders"
        tweet="Im once again asking for your financial support"
      />
    </div>
  );
}

export default App;
