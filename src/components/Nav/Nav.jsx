import './Nav.css'
import NavItem from './NavItem';

export default function Nav(props) {
    return(
        <nav className="nav-bar">
            <div className="upper-nav">
                <div className="logo-nav"></div>
                <div className="right-upper-nav-wrapper">
                    <div className="link-socialmedia">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-youtube-play"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div>
                        <p>CALL US! <strong>555-8707</strong></p>
                    </div>
                    <div className="right-upper-nav">
                        <ul className="cover-contact-about">
                            <li className="trigger"><a href="/#">VISIT SPRINGFIELD!</a></li>
                            <NavItem title="Visit Krusty"/>
                        </ul>
                        <button className="btn-donate">DONATE</button>
                    </div>
                </div>
            </div>

            <div className="lower-nav">
                <ul className="lower-nav-ul">
                <NavItem title="Duff Brewery"/>
                <NavItem title="Prank Ideas"/>
                <NavItem title="Visit the Nuclear Plant"/>
                <NavItem title="Save the world with Lisa"/>
                <NavItem title="Donut Shop Directions"/>
                <NavItem title="Quik E Mart" />
                    <i className="fa fa-search"></i>            
                </ul>
            </div>
        </nav>
    );
}