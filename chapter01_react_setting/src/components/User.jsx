import React from 'react';

export default function User({name,age}) {
    return (
        <tr>
            <td>{name}</td>
            <td>{age}</td>
        </tr>
    );
};;