import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import LoginCard from "./LoginCard";

import { postData } from "../../utils/requests";

function LoginPage() {


    function loginCb(data) {
        localStorage.setItem("token", data.token);  
        localStorage.setItem("username", data.username);
        console.log(`User ${data.username} logged in successfully`)
        console.log(data);
        window.location.href = "/";
    }

    function registerCb(data) {
        console.log(data);
        console.log(`User ${data.username} registered successfully`)
    }

    function handleLogin(username_prop, password_prop) {

        if (!username_prop || !password_prop) {
            console.log("Username or password is empty");
            return;
        }

        postData(loginCb, "users/login/", {
            username: username_prop,
            password: password_prop,
        })

    }

    function handleRegister(username_prop, password_prop, confirmPassword_prop) {

        if (!username_prop || !password_prop || !confirmPassword_prop) {
            console.log("Username or password is empty");
            return;
        }

        if (password_prop !== confirmPassword_prop) {
            console.log("Passwords don't match");
            return;
        }

        // Register user
        postData(registerCb, "users/", {
            username: username_prop,
            password: password_prop,
            role: "admin",
            verifiedUser: true,
            approvedForSale: true,
        }).then(() => {
            // Login user;
            handleLogin(username_prop, password_prop);
        })

    }

    return (
        <div className="container" style={{ justifyContent: "center"}}>
            <h1>Inicio de sesión</h1>
            <hr/>

            <Tabs defaultActiveKey="login" id="auth-tab" className="mb-3" style={{ justifyContent: "center" }}>
                <Tab eventKey="login" title="Iniciar Sesión">
                    <LoginCard submitHandler={handleLogin} />
                </Tab>
            </Tabs>

        </div>
    )
}

export default LoginPage;
