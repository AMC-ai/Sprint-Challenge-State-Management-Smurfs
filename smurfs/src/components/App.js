import React, { Component } from "react";
import "./App.css";
// import PostForm from "./componentFiles/PostForm";
import PostList from "./componentFiles/PostList";
import SmurfForm from "./componentFiles/SmurfForm";
import PostCard from "./componentFiles/PostCard";



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <PostList />
        {/* <PostCard /> */}
        <SmurfForm />

      </div>
    );
  }
}

export default App;
