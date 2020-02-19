import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="card">
          <table class="table table-item"
          style={{width: "100%",height :"50%"}}
          rowspan="0">
            <tbody>
             
              <tr>
              <td rowspan="10" align="center">
                <img src={require("../src/saya.jpeg")}
                align-image="center"
                width="500px"
                height="500px"
                ></img>
                </td>
                <th scope="row"></th>
                <th>Nama</th>
                <td>:</td>
                <td>Achmad Satya Pradana</td>
              </tr>
              <tr>

                <th scope="row"></th>
                <th>TTL</th>
                <td>:</td>
                <td>Malang, 27 Agustus 1998</td>
              </tr>
              <tr>

                <th scope="row"></th>
                <th>Jeni Kelamin</th>
                <td>:</td>
                <td>Laki-laki</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>Alamat</th>
                <td>:</td>
                <td>Perum Muara Sarana Indah G-10</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>No. Hp</th>
                <td>:</td>
                <td>082330068806</td>
              </tr>
              <tr>

                <th scope="row"></th>
                <th>Status</th>
                <td>:</td>
                <td>Mahasiswa</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>Hobi</th>
                <td>:</td>
                <td>Game</td>
              </tr>
              <tr>

                <th scope="row"></th>
                <th>Email</th>
                <td>:</td>
                <td>satyapradana98@gmail.com</td>
              </tr>
              <tr>

                <th scope="row"></th>
                <th>Github</th>
                <td>:</td>
                <td>achmadsatyap</td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
          <p>satyapradana98@gmail.com</p>
          </nav>
      </header>
    </div>
  );
}

export default App;