console.table(receipts)
class App extends React.Component {
    state = {
            receipts
    }

  render () {
      return(
          <div>
              <h1 className="truck-name">Korilla</h1>
              <div>
                {this.state.receipts.map( (receipt) => !receipt.paid ? <Receipt receipt= {receipt}/> : "")}
              </div>
          </div>
      )
  }
}

class Receipt extends React.Component {
    render () {
        console.log(this.props);
        return (
            <div id="receipts">
                <h2>{this.props.receipt.person}</h2>
                <ul id="items">
                <li><span>Main: </span>{this.props.receipt.order.main}</li>
                <li><span>Protein: </span>{this.props.receipt.order.protein}</li>
                <li><span>Rice: </span>{this.props.receipt.order.rice}</li>
                <li><span>Sauce: </span>{this.props.receipt.order.sauce}</li>
                <li><span>Drink: </span>{this.props.receipt.order.drink}</li>
                <li><span>Cost: </span>{this.props.receipt.order.cost}</li>
                </ul>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));
