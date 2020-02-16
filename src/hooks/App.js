import React, {Component, useState} from "react";

function App() {
    const [answer] = useState("Yes")

    return (
        <div>
            <p>Is that important? {answer}</p>
        </div>
    )

}

export default App;
