"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <p class="opening"><h2>Hello User! :)</h2></p>
        <p><img src="/static/img/balloonicorn.jpg" class="balloonicorn"/></p>
        <p class="link"><a href="/cards">Click here to go to the cards page!</a></p>
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
