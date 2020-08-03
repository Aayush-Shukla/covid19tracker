import React, {Component} from 'react';



class Navbar extends Component {

    render() {



    return (
        <div >

            <nav>
                <div className="nav-wrapper grey darken-2 z-depth-3 ">
                    <a href="#" className="brand-logo grey-text " ><i className="material-icons md-48 ">track_changes  </i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">

                        <li><a className="waves-effect waves-green" href="collapsible.html">Credits</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
    }
}

export default Navbar;
