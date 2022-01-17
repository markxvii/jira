import React from "react";
import {User} from "./search-panel";

interface Project {
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string;
}

interface ListProps {
    list: Project[],
    users: User[]
}

export const List = ({list, users}: ListProps) => {
    return <table>
        <thead>
        <tr>
            <th>名称</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {list.map((project, index) =>
            <tr key={index}>
                <td>{project.name}</td>
                <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
            </tr>)}
        </tbody>
    </table>;
}
