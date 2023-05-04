import React, { useState } from "react";
import FormRegister from "../Components/FormRegister";
import UsersList from "../Components/UsersList";

const Home = () => {
    const [users, setUsers] = useState([]);

    return (
        <div>
            <FormRegister users={users} setUsers={setUsers} />
            <UsersList users={users} setUsers={setUsers} />
        </div>
    )

};

export default Home;
