class App extends React.Component {
  state = {
    loading: true,
    test: null
  }
  async componentDidMount() {

    const url ="http://taco-randomizer.herokuapp.com/random/?full-tack=true"
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    this.setState({test: data, loading: false})
  }

  render() {
    return (
      <div>
      {this.state.loading || !this.state.test ? ( <div>loading...</div>
      ) : (


        <div><pre>Recipe: {this.state.test.seasoning.recipe}</pre></div>




    )}
    </div>
  )
  }
}


ReactDOM.render(
  <App/>,
  document.querySelector('.container')
)
