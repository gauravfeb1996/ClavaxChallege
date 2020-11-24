import { connect } from 'react-redux';
import './Header.scss';
import logo from '../../images/logo.png'

function Header() {
    return (
        <div className="header-wrapper">
            <img src={logo}/>
        </div>
    );
}

export default Header;