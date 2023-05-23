import React, { useState } from "react";
import FormRegister from "../Components/FormRegister";
import UsersList from "../Components/UsersList";

const Home = () => {
    const[formularioEnviado, setFormularioEnviado] = useState(false);

    return (
        <div>
            <FormRegister />
            <UsersList formularioEnviado={formularioEnviado} setFormularioEnviado={setFormularioEnviado}/>
        </div>
    )

};

export default Home;
