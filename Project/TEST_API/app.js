//console.table(data)

class App extends React.Component {
  state = {
    loading: true,
    test: null
  }
  async componentDidMount() {
    const url ="https://coronavirus-19-api.herokuapp.com/countries/malaysia" //change to any country of your choice
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    this.setState({test: data, loading: false})
  }

  render() {
    return (
      <div>
      {this.state.loading || !this.state.test ? ( <div>loading...</div> ) : (
      <div className='card'>🚨🦠😷🤧🧑‍⚕️🔬🌡🥵🏥🚑💊🩺🧼
      <h2><span>Live Covid Tracker</span></h2>
        <div><span>Country: </span>{this.state.test.country}</div>
        <div><span>Confirmed Cases: </span>{this.state.test.cases}</div>
        <div><span>Daily Confirmed Cases: </span>{this.state.test.todayCases}</div>
        <div><span>Deaths: </span>{this.state.test.deaths}</div>
        <div><span>Recovered: </span>{this.state.test.recovered}</div>
        <div><span>Daily Cases: </span>{this.state.test.active}</div>
        <div><span>Critical Cases in ICU: </span>{this.state.test.critical}</div>
        <div><span>Cases Per Million Popoulation: </span>{this.state.test.casesPerOneMillion}</div>
        <div><span>Deaths Per Million Popoulation: </span>{this.state.test.deathsPerOneMillion}</div>
        <div><span>Total Tests: </span>{this.state.test.totalTests}</div>
        <div><span>Tests Per Million Popoulation </span>{this.state.test.testsPerOneMillion}</div><br/>🧍↔️🧍 🚫🤝 🚫🧑‍🤝‍🧑 🚫🏟 🧍▫️▫️🧍
      </div>
    )}
    </div>
  )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#container')
)
