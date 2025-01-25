
const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1", {}, "h1 tag"),React.createElement("h2",{ },"h2 tag")]    
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1", {}, "I'm h1"),React.createElement("h2",{ },"I'm h2")]    
    )
)
console.log(parent); //object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);






