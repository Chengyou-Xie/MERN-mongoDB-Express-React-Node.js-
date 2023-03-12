import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

class AuthService {
    login(email, password) {
        return axios.post(API_URL + "/login", { email, password });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password, role) {
        // axios.post() 會回傳一個物件，在將此物件回傳到 register 頁面
        return axios.post(API_URL + "/register", { username, email, password, role });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();
