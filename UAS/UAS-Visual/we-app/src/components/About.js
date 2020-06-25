import React, {Component} from 'react';
import Npp from '../provil.jpg';

class About extends React.Component {
    render() {
      return (
    <div>
        <div class="title1">
            <h1 id="rbh" align = "center">About </h1>
        </div>
            <div className="imgProvil">
                <img src={Npp} alt="provil-diri-plus-plus" width="300px" height="400px" />
            </div>
            <div class="teks">
                <p align="center">
                    Nama    : I Dewa Nyoman Gede Pramana Putra <br />
                    NIM     : 1801010042 <br />
                    Prodi   : SI Pagi 2018 <br />
                    Kampus  : STMIK Primakara <br />
                </p>
            </div>
    </div>
      )
    }
  }
  
  export default About;