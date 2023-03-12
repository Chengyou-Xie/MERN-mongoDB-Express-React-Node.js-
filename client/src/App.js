import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home-component";
import Register from "./components/register-component";
import Login from "./components/login-component";
import Profile from "./components/profile-component";
import Course from "./components/course";
import { useState } from "react";
import authService from "./services/auth-service";
import PostCourse from "./components/postCourse-component";
import Enroll from "./components/enroll-component";

function App() {
    let [currentUser, setCurrentUser] = useState(authService.getCurrentUser());
    // console.log(currentUser);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Layout currentUser={currentUser} setCurrentUser={setCurrentUser} />}
                >
                    <Route index element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/login"
                        element={
                            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />
                        }
                    />
                    <Route
                        path="/course"
                        element={
                            <Course currentUser={currentUser} setCurrentUser={setCurrentUser} />
                        }
                    />
                    <Route
                        path="/postCourse"
                        element={
                            <PostCourse currentUser={currentUser} setCurrentUser={setCurrentUser} />
                        }
                    />
                    <Route
                        path="/enroll"
                        element={
                            <Enroll currentUser={currentUser} setCurrentUser={setCurrentUser} />
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
