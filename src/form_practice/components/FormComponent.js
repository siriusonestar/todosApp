import React from "react";

function FormComponent(props) {
    return (
        <main>
            <form>
                <input placeholder="First Name"
                       name="firstName"
                       value={props.data.firstName}
                       onChange={props.handleChange}
                /><br/>
                <input placeholder="Last Name"
                       name="lastName"
                       value={props.data.lastName}
                       onChange={props.handleChange}
                /><br/>
                <input placeholder="Age"
                       name="age"
                       value={props.data.age}
                       onChange={props.handleChange}
                /><br/>

                {/* Create radio buttons for gender here */}
                <label>
                    <input type="radio"
                           name="gender"
                           value="male"
                           onChange={props.handleChange}
                    />Male
                </label>
                <br/>
                <label>
                    <input type="radio"
                           name="gender"
                           value="female"
                           onChange={props.handleChange}
                    />Female
                </label>
                <br/>
                <select name="destination"
                        value={props.data.destination}
                        onChange={props.handleChange}
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="Russia">Russia</option>
                    <option value="Canada">Canada</option>
                    <option value="US">US</option>
                </select>
                {/* Create select box for location here */}
                <br/>
                <label>
                    <input type="checkbox"
                           name="dietaryRestrictions"
                           checked={props.data.dietaryRestrictions}
                           onChange={props.handleChange}
                    />dietary restrictions
                </label>
                {/* Create check boxes for dietary restrictions here */}
                <br/>

                <button>Submit</button>
            </form>

            <hr/>
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>
                Your dietary restrictions:
                {props.data.dietaryRestrictions ? "Yes" : "No"}
            </p>
        </main>

    )
}

export default FormComponent;


