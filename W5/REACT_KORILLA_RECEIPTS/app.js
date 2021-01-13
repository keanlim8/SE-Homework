console.table(receipts)

class App extends React.Component {
  state ={
    receipts: receipts
  }

  render(){
    return(
      <div>
        <h1 className='truck-name' color='red'> Korilla </h1>
        <div className='container' style={containerStyle}>
          {this.state.receipts.map(receipt => receipts.paid ? '': <Receipt receipt={receipt} />)}
        </div>
      </div>
    )
  }
}



class Receipts extends React.Component {
  render(){
    console.log(this.props.receipt.order.paid)
    return (
      <div style={receiptStyle}>
      <h2>{this.props.receipt.person}</h2>
        <h5><span>Main: </span>{this.props.receipt.order.main}</h5>
        <h5><span>Protein: </span>{this.props.receipt.order.protein}</h5>
        <h5><span>Rice: </span>{this.props.receipt.order.rice}</h5>
        <h5><span>Sauce: </span>{this.props.receipt.order.sauce}</h5>
        <h5><span>Drink: </span>{this.props.receipt.order.drink}</h5>
        <h5><span>Cost: </span>{this.props.receipt.order.cost}</h5>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)
