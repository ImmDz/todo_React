import { FC } from "react";
import {Link} from  "react-router-dom";

export const PageNotFound: FC = () => {
    return (
        <>
            <h1>Задача не найдена</h1>
            <Link to="/">Вернуться на главную страницу</Link>
        </>
    )
}