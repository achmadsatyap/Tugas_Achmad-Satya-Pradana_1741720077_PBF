import React from "react";
import "./LoginComponent.css";

const LoginComponent = () => {
    return (
        <div className="home">
        <div className="judul">
          <h2>Form Login</h2>
          <br></br>
        <div className="kotak_login">
            <p class="tulisan_login"><h1>Tugas Pertemuan</h1></p>
            <p><h1>Ketiga</h1></p>
            <form>
                <label>Username</label>
                <input type="text" name="username" class="form_login" placeholder="Username atau email .."></input>
                <br></br>
                <label>Password</label>
                <input type="password" name="password" class="form_login" placeholder="Password"></input>
                <input type="submit" class="tombol_login" value="LOGIN"></input>
                <br></br>
                <input type="checkbox"/>Remember Me
                <br></br>
                <br></br>
                <input type="submit" class="tombol_cancel" value="cancel"></input>
                
            </form>
        </div>
        </div>
        </div>
    );
}

export default LoginComponent;