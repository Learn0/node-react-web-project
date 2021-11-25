import {NavLink} from "react-router-dom";

function Header(){
    return (
        <nav className={"navbar navbar-inverse"}>
            <div className={"container-fluid"}>
                <div className={"navbar-header"}>
                    <NavLink className={"navbar-brand"} to="/">Front-End</NavLink>
                </div>
                <ul className={"nav navbar-nav"}>
                    <li><NavLink to={"/music/list"}>음악</NavLink></li>
                    <li className={"}dropdown"}>
                        <a className={"dropdown-toggle"} data-toggle="dropdown" href="#">서브
                            <span className={"caret"}></span></a>
                        <ul className={"dropdown-menu"}>
                            <li><NavLink to={"/"}>1</NavLink></li>
                            <li><NavLink to={"/"}>2</NavLink></li>
                            <li><NavLink to={"/"}>3</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header