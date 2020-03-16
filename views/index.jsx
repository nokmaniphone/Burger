const React = require('react')
const Html = require('./layouts/default.jsx')
const Form = require('./components/form.jsx')

const Index = props => {
  return (
    <Html>
      {/* Row for Title and Image */}
      <img src="https://media.istockphoto.com/vectors/cartoon-hamburger-beer-characters-taking-selfie-smartphone-isolated-vector-id647801686" alt="burger" className="imageStyle" />
      <h1 className="title" >Eat Da Burger</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 burgerHead">
            {/* Undevoured burgers here */}
            <h3>Undevoured</h3>
            <hr></hr>
            <div id="undevoured" className="list-group">
              {/* <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
              <button href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button> */}
            </div>

          </div>
          <div className="col-md-6" id="inputForm">
            {/* Input Form here */}
            <Form />
          </div>
          <div className="col-md-3 burgerHead">
            {/* Devoured burgers here */}
            <h3>Devoured it</h3>
            <hr></hr>
            <div id="devoured" className="list-group">
              {/* <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
              <button href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button> */}
            </div>
          </div>
        </div>
      </div>

    </Html>
  )
}

module.exports = Index