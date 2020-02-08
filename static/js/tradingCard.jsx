"use strict";

class TradingCard extends React.Component {
  render() {
    return (
      <div className="card">
        <h2>Name: {this.props.name}</h2>
        <img src={this.props.imgUrl} />
        <h2>Skill: {this.props.skill}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  (
    <TradingCard
      name="Balloonicorn"
      skill="video games"
      imgUrl="/static/img/balloonicorn.jpg"
    />
  ),
  document.querySelector('#balloonicorn')
);

ReactDOM.render(
  (
    <TradingCard
      name="Float"
      skill="baking pretzels"
      imgUrl="/static/img/float.jpg"
    />
  ),
  document.querySelector('#float')
);

ReactDOM.render(
  (
    <TradingCard
      name="Llambda"
      skill="knitting scarves"
      imgUrl="/static/img/llambda.jpg"
    />
  ),
  document.querySelector('#llambda')
);

ReactDOM.render(
  (
    <TradingCard
      name="Seedy"
      skill="seeding information"
      imgUrl="/static/img/seedpy.jpg"
    />
  ),
  document.querySelector('#seedy')
);

ReactDOM.render(
  (
    <TradingCard
      name="Polymorphism"
      skill="baking baking cakes 4 ways"
      imgUrl="/static/img/polymorphism.jpg"
    />
  ),
  document.querySelector('#polymorphism')
);

ReactDOM.render(
  (
    <TradingCard
      name="Short-Stack"
      skill="making the perfect waffles"
      imgUrl="/static/img/shortstack-overflow.jpg"
    />
  ),
  document.querySelector('#short-stack')
);
