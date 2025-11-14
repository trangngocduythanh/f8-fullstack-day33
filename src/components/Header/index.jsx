import { NavLink } from "react-router";

function Header() {
    const items = [
        {
            path: "/",
            title: "Home",
        },
        {
            path: "/news",
            title: "News",
        },
        {
            path: "/about",
            title: "About",
        },
    ];

    const renderItems = () => {
        return items.map((item, index) => (
            <li key={index} className="nav-item">
                <NavLink to={item.path}>{item.title}</NavLink>
            </li>
        ));
    };

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">{renderItems()}</ul>
            </nav>
        </header>
    );
}

export default Header;
