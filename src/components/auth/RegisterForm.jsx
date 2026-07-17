import { useState } from "react";
import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";

function RegisterForm() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    });

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await register(user);

            alert("Registration Successful");

            navigate("/login");

        } catch (err) {

            alert("Registration Failed");

            console.error(err);

        }

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4"
        >

            <h2 className="text-3xl font-bold text-center">
                Register
            </h2>

            <input
                name="name"
                placeholder="Name"
                className="w-full border p-3 rounded-lg"
                onChange={handleChange}
            />

            <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-lg"
                onChange={handleChange}
            />

            <input
                name="mobile"
                type="tel"
                placeholder="Mobile Number"
                className="w-full border p-3 rounded-lg"
                onChange={handleChange}
            />

            <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full border p-3 rounded-lg"
                onChange={handleChange}
            />

            <button
                className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
                Register
            </button>

        </form>

    );
}

export default RegisterForm;