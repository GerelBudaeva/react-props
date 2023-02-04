import React from 'react';

const Menu = (props) => {
    return (
        <div>
            <ul className="nav">
                {props.menu.map(el =>
                <li key={el.id} className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{el.title}</a>
                </li>
                )}
            </ul>
        </div>
    );
};

export default Menu;
