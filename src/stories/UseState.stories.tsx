import React, {useState} from "react";

export default {
    title: "useState.memo demo",
};


const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>;
};


const UsersSecret = (props: { users: string[] }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>;
};

const Users = React.memo(UsersSecret);

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Mark", "Valera", "Artem"]);
    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <div>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>+
            </button>
            <button onClick={addUser}>add user
            </button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </div>
    );

};

export const Example2 = () => {
    const [counter, setCounter] = useState(0);


    return (
        <div>
            <button onClick={() => {setCounter(counter + 1)}}>+</button>
        </div>
    );

};