import React from 'react';
import './boot/axios';
import './App.scss';
import Header from './components/Header/Header';
import BlogPosts from './components/BlogPosts/BlogPosts';

function App() {
  return (
    <div className="App">
      <Header />
      <BlogPosts />
    </div>
  );
}

export default App;
