import React from "react";


const Form = props =>{

    const {userFirstName, userLastName, email, password, confirmpassword, handleChange
        } = props

    const firstNameError = userFirstName.length < 2 && userFirstName.length > 0? "First Name must have at least 2 characters" : null;
    const lastNameError = userLastName.length < 2 && userLastName.length > 0? "Last Name must have at least 2 characters" : null;
    const emailError = !/^$|.+@.+\.com$/.test(email) && email.length > 0 ? "Email must have a valid format (name@example.com)" : null;
    const passwordError = !(password === confirmpassword) && password.length > 0 ? "Passwords must match and have at least 8 characters": null;          


    
    return(
        <form>
            <label htmlFor="userFirstName">First Name</label>
            <input type="text" name="userFirstName" value={userFirstName} onChange={handleChange} required minLength={2} />
            {firstNameError && <div className="validation">{firstNameError}</div>}
            <label htmlFor="userLastName">Last Name</label>
            <input type="text" name="userLastName" value={userLastName} onChange={handleChange} required minLength={2}/>
            {lastNameError && <div className="validation">{lastNameError}</div>}
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={handleChange} required minLength={5} pattern="^$|.+@.+\.com$"/>
            {emailError && <div className="validation">{emailError}</div>}
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} onChange={handleChange} required minLength={8} maxLength={12}/>
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="confirmpassword" value={confirmpassword} onChange={handleChange} required minLength={8} maxLength={12}/>
            {passwordError && <div className="validation">{passwordError}</div>}
            <button type="submit" name="submit">Submit</button>
        </form>
    )

}

// class Form extends Component {
//     render(){
//         const {userFirstName, userLastName, email, password, confirmpassword, handleChange} = this.props
//         return(
//             <form action="">
//                 <label htmlFor="userFirstName">First Name</label>
//                 <input type="text" placeholder="Ej. Anita" name="userFirstName" value={userFirstName} onChange={handleChange}/>
//                 <label htmlFor="userLastName">Last Name</label>
//                 <input type="text" placeholder="Ej. Style" name="userLastName" value={userLastName} onChange={handleChange}/>
//                 <label htmlFor="email">Email</label>
//                 <input type="email" placeholder="Ej. style@gmail.com" name="email" value={email} onChange={handleChange}/>
//                 <label htmlFor="password">Password</label>
//                 <input type="password" name="password" value={password} onChange={handleChange}/>
//                 <label htmlFor="password">Confirm Password</label>
//                 <input type="password" name="confirm password" value={confirmpassword} onChange={handleChange}/>
//                 <button type="submit">Enviar</button>
//             </form>
//         )
//     }
// }

export default Form;