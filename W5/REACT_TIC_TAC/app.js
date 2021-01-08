const message = "Hello World"

// VANILLA JS
// document.addEventListener("DOMContentLoaded", () => {
//     const div = document.querySelector('.container')
//     div.innerHTML = '<h1>' + message + '</h1>'
// })

// class Player extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>Player</h2>
//                 <h3>Wins: </h3>
//             </div>
//         )
//     }
// }

class Player extends React.Component {
  render() {
    return (
      <div className={this.props.id}>
        <h2 className={this.props.id}>Player {this.props.id}</h2>
        <h3>Wins: </h3>
      </div>
    );
  }
}

class Header extends React.Component {
    render() {
        return (
            <h1>React Tac Toe</h1>
        )
    }
}

class Board extends React.Component {
  render () {
    return (
      <div className='board'>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
  }
}

class Square extends React.Component {
  render () {
    return (
      <div>
        <h4>square</h4>
      </div>
    )
  }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Player id='X'/>
                <Player id='O'/>
                <Board />
            </div>
        )
    }
}

// REACT
ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
