import { NavLink } from "react-router";
import './navigation.css'

const Navigation = () => {

    return (
        <>
            <nav className='navigation'>
                <NavLink className='navigation__link' to="/statechange">StateChange</NavLink>
                <NavLink className='navigation__link' to="/todoapp">TodoApp</NavLink>
                <NavLink className='navigation__link' to="/asyncthunk">AsyncThunk</NavLink>
                <NavLink className='navigation__link' to="/postsbyrtx">PostsByRtx</NavLink>
            </nav>
        </>

    )
}

export default Navigation
