import React from 'react';

class Menu extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="#" className="navbar-brand">TubeChatXYZ</a>
                </div>
                <div className="navbar-collapse collapse" id="navbar">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/">Featured</a></li>
                        <li><a href="/f">Female</a></li>
                        <li><a href="/m">Male</a></li>
                        <li><a href="/c">Couple</a></li>
                        <li><a href="/ts">Trans</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Menu;
