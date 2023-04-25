import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Info = () => {
    return (
        <div>
            <ol>
                <li>
                    <Link to={'todos'}>Todos</Link>
                </li>
                <li>
                    <Link to={'albums'}>Albums</Link>
                </li>
                <li>
                    <Link to={'coments'}>Coments</Link>
                </li>
            </ol>
            <div>

                <Outlet/>
            </div>
        </div>
    );
};

export default Info;