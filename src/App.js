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
                <Graph data={[
                    {
                        "name": "A",
                        "value": 46
                    },
                    {
                        "name": "B",
                        "value": 87
                    }
                ]} title={"Your stoinks"} color={"#70CAD1"}/>
            </Content>
        </div>
    );
}

export default App;
