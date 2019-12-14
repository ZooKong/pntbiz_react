import React from 'react';
import User from "./User.jsx";

export default function UserList() {
    return (
        <div>
            <tabe>
                <User name={'김아무개'} age={25}/>
                <User name={'이아무개'} age={26}/>
            </tabe>
        </div>
    );
};;