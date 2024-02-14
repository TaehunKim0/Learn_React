import React from "react";

const User = ({userData}) =>{
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
        {email: 'user1@gmail.com', name: 'user1'},
        {email: 'user2@gmail.com', name: 'user2'},
        {email: 'user3@gmail.com', name: 'user3'},
        {email: 'user4@gmail.com', name: 'user4'},
    ];

    return (
        <table>
            <thread>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thread>

            <tbody>
                {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    )
}

export default UserList;