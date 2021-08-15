/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';

class Menu extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor() {
        super();
        this.state = {
            showingSearch: false
        };
    }

    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    showSearchContainer(e) {
        e.preventDefault();
        this.setState({
            showingSearch: !this.state.showingSearch
        });
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    onSearch(e) {
        // Start Here
        // ...
    }
	showHideNav(e) {
        var navbar = document.getElementById("navbar");
        var chkbox = document.getElementById("checkbox");
//        navbar.style.display = chkbox.checked ? "flex" : "none";

        if (chkbox.checked) {
             navbar.classList.add("open");
             navbar.classList.remove("close");
        } else {
             navbar.classList.remove("open");
             navbar.classList.add("close");
        }
    }

    render() {
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>
                            <a href="#" className="site-logo"> </a>
                        </h1>
                        <input type="checkbox" id="checkbox" onClick={(e) => this.showHideNav(e)}/>
                          <label htmlFor="checkbox">
                          <i className="menu-icon"></i>
                    </label>
                        <nav id="navbar">
                          <ul>
                                   <li><a href="https://www.esteelauder.com/products/708/product-catalog/whats-new" target="_blank" className="nav-item">New</a>              </li>
                                   <li><a href="https://www.esteelauder.com/products/1799/product-catalog/bestsellers" target="_blank" className="nav-item">Best Sellers</a>  </li>
                                   <li><a href="https://www.esteelauder.com/products/681/product-catalog/skin-care" target="_blank" className="nav-item">Skincare</a>         </li>
                                   <li><a href="https://www.esteelauder.com/products/631/product-catalog/makeup" target="_blank" className="nav-item">Makeup</a>          	  </li>
                                   <li><a href="https://www.esteelauder.com/products/571/product-catalog/fragrance" target="_blank" className="nav-item">Fragrance</a>        </li>
                                   <li><a href="https://www.esteelauder.com/products/19045/product-catalog/sets-gifts" target="_blank" className="nav-item">Sets & Gifts</a>  </li>
                                   <li><a href="https://www.esteelauder.com/re-nutriv" target="_blank" className="nav-item">Re-Nutriv</a>       							  </li>
                                   <li><a href="https://www.esteelauder.com/aerin" target="_blank" className="nav-item">Aerin</a>           								  </li>
                                   <li><a href="https://www.esteelauder.com/discover-now" target="_blank" className="nav-item">Discover</a>    							      </li>
                                   <li><a href="https://www.esteelauder.com/virtual-beauty-services" target="_blank" className="nav-item">Services</a>   					  </li>
                            </ul>
                            <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                                <i className="material-icons search">search</i>
                            </a>          
                        </nav>
                    </div>
                </div>
                <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                    <input type="text" onChange={(e) => this.onSearch(e)} />
                    <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                        <i className="material-icons close">close</i>
                    </a>
                </div>
            </header>
        );
    }
}

// Export out the React Component

export default Menu;