import React from 'react';

const Link = ({link}) => {
    return (
        <div>
            <li className='px-4 hover:bg-amber-500'>
                <a href={link.path}>{link.name}</a>
            </li>   
        </div>
    );
};

export default Link;