import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Login } from './Login';

export const Header: FC = () => {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <>
            <p><Link to="/">Main</Link></p>
            {isAuth ? <Link to="/profile">Profile</Link> : <Login onClick={() => setIsAuth(true)}/>}
        </>
    )
}