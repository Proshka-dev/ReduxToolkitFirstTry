import { NavLink } from "react-router";
import './navigation.css'

const Navigation = () => {

    return (
        <>
            <nav className='navigation'>
                <NavLink className='navigation__link' to="/statechange">StateChange штрихкода</NavLink>
                <NavLink className='navigation__link' to="/todoapp">TodoApp</NavLink>
                <NavLink className='navigation__link' to="/asyncthunk">AsyncThunk</NavLink>
            </nav>
        </>

    )
}

export default Navigation
