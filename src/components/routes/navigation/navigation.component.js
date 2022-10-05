import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';
import { ReactComponent as Logo} from '../../../assets/crown.svg';
import { userContext } from '../../context/context';
import { signOutUser } from '../../utils/firebase.utils';

const Navigation = () => {
    const { currentUser } = useContext(userContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>) :
                            (                    
                            <Link className='nav-link' to='/authentication'>
                                SIGN IN
                            </Link>)
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;