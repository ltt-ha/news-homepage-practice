import './navbar.styles.scss';
import { useState } from 'react';
import {ReactComponent as IconMenu} from '../../assets/images/icon-menu.svg'
import {ReactComponent as IconMenuClose} from '../../assets/images/icon-menu-close.svg'
import {ReactComponent as Logo} from '../../assets/images/logo.svg'
const Navbar=()=>  {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const onClickhandler=()=>{
        console.log(isNavExpanded)
        return setIsNavExpanded(!isNavExpanded)
    }
return <div className='navbar-container'>
<div className='logo-container'> <Logo/> </div>
<div className='mobile-menu' onClick={onClickhandler} >
<IconMenu />
</div>
{isNavExpanded ? <div className='navlinks'>
    <div className='navlink'>Home </div>
    <div className='navlink'>New </div>
    <div className='navlink'>Popular </div>
    <div className='navlink'>Trending </div>
    <div className='navlink'>Categories </div>
</div> : 
<div className='navlinks expanded'>
<div className='mobile-menu-close' onClick={onClickhandler} > <IconMenuClose/> </div>
    <div className='navlink'>Home </div>
    <div className='navlink'>New </div>
    <div className='navlink'>Popular </div>
    <div className='navlink'>Trending </div>
    <div className='navlink'>Categories </div>
</div>}

</div>

}
export default Navbar