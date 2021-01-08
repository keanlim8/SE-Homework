const message = "Hello World"

// VANILLA JS
// document.addEventListener("DOMContentLoaded", () => {
//     const div = document.querySelector('.container')
//     div.innerHTML = '<h1>' + message + '</h1>'
// })

class Player extends React.Component {
    render() {
        return (
            <div>
                <h2>Player</h2>
                <h3>Wins: </h3>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <h1>React Tac Toe</h1>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Player />
                <Player />
            </div>
        )
    }
}

// REACT
ReactDOM.render(
    <App />,
    document.querySelector('.container')
)