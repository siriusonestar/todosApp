import React from "react";
import ReactDom from "react-dom";
// import App from "./App";
import App from "./hooks/App"
import './style.css'
import Counter from "./hooks/Counter";
// import FormsPractice from "./form_practice/FormsPractice";
// import App from "./meme_generator/App";


ReactDom.render( <Counter/>, document.getElementById("root"));


