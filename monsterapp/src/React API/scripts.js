const Person = (props) => {
    return React.createElement('div',{},[
       React.createElement('h1',{},props.name),
       React.createElement('p',{},props.role),
    ])
}
const App = () => {
    return React.createElement('div',{class:'App'},[
        React.createElement('h1',{class:'mood'},"Sunny Day"),
        React.createElement(Person,{name:'Rohit',role:'DeveOPs'},null),
        React.createElement(Person,{name:'Rohan',role:'Web3'},null),
        React.createElement(Person,{name:'Roshan',role:'Developer'},null),
    ])    
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
)