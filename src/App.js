import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content'
import Content from "./Content";
import Graph from "./Graph";

function App() {
    return (
        <div>
            <Content>
                <Graph/>
            </Content>
        </div>
    );
}

export default App;
