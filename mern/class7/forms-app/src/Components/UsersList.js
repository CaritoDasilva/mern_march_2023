import React from "react";

const UsersList = ({ users }) => {

    return (
        <div>
            {users?.map((user, idx) => (
                <p>{user.userName}</p>
            ) )}
        </div>
    )

};

export default UsersList;
