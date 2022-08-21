import React from "react";
const Navbar = ()=>{

    return (
      <nav className="ui raisedvery padded segment">
        <a
         className="ui real inverted segment" href="#/">Image search engine</a>
        <div className="ui right floated header">
          <button className="ui button">
            <a href="/home">Home</a>
          </button>
          <button className="ui button">
            <a href="/about">about</a>
          </button>
          <button className="ui button">
            <a href="/contact">contacus</a>
          </button>
        </div>
      </nav>
    );
}
export default Navbar;
