import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth-service";

const LoginComponent = ({ currentUser, setCurrentUser }) => {
    const navigate = useNavigate();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let [message, setMessage] = useState("");

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = async () => {
        try {
            let response = await authService.login(email, password);
            localStorage.setItem("user", JSON.stringify(response.data));
            alert("登入成功，您將被導向個人資料頁面");
            setCurrentUser(authService.getCurrentUser());
            navigate("/profile");
        } catch (e) {
            setMessage(e.response.data);
        }
    };

    return (
        <div style={{ padding: "3rem" }} className="col-md-12">
            {message ? <div className="alert alert-danger">{message}</div> : null}
            <div>
                <div className="form-group">
                    <label htmlFor="username">電子信箱：</label>
                    <input
                        onChange={handleChangeEmail}
                        type="text"
                        className="form-control"
                        name="email"
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="password">密碼：</label>
                    <input
                        onChange={handleChangePassword}
                        type="password"
                        className="form-control"
                        name="password"
                    />
                </div>
                <br />
                <div className="form-group">
                    <button onClick={handleLogin} className="btn btn-primary btn-block">
                        <span>登入系統</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
