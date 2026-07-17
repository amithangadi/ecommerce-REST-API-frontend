import { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            const response = await login({
                email,
                password
            });

            console.log(response);

            alert(response);

            navigate("/");

        } catch (error) {

            console.error(error);
            alert("Invalid Credentials");

        }

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4"
        >

            <h2 className="text-3xl font-bold text-center">
                Login
            </h2>

            <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                className="w-full border p-3 rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
                Login
            </button>

        </form>

    );
}

export default LoginForm;