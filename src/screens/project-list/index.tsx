import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useEffect, useState} from "react";
import React from "react";
import {cleanObject, useMount, useDebounce} from "utils";
import {useHttp} from "utils/http";


export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const debouncedParam = useDebounce(param, 1000)

    const [list, setList] = useState([]);
    const [users, setUsers] = useState([]);
    const client = useHttp()

    useEffect(() => {
        client('projects', {data: cleanObject(debouncedParam)}).then((res) => {
            setList(res);
        });
    }, [debouncedParam])

    useMount(() => {
        client('users').then(setUsers)
    })

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List users={users} list={list}/>
    </div>
}
