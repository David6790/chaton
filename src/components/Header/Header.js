import React, { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const [cartActive, setcartState] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { carts } = props;

  return (
    <header id="header" className={props.topbarNone}>
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <a
                    onClick={ClickHandler}
                    className="navbar-brand"
                    href="#home"
                  >
                    Charlotte & Nicolas
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li>
                      <a href="#home" onClick={ClickHandler}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#couple" onClick={ClickHandler}>
                        Le Lieu
                      </a>
                    </li>
                    <li>
                      <a href="#story" onClick={ClickHandler}>
                        Le programme
                      </a>
                    </li>
                    <li>
                      <a href="#formulaire" onClick={ClickHandler}>
                        RSVP
                      </a>
                    </li>
                    <li>
                      <a href="#info" onClick={ClickHandler}>
                        Infos Pratiques
                      </a>
                    </li>

                    <li>
                      <a href="#temoin" onClick={ClickHandler}>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, { removeFromCart })(Header);
