import React, {Component} from 'react';
import "./footer.css"
import facebook from "../../img/icon-facebook.png"
import twitter from "../../img/icon-twitter.png"
import instagram from "../../img/icon-instagram.png"
import whatsapp from "../../img/icon-whatsapp.png"
import discord from "../../img/icon-discord.png"

class Footer extends Component {
    render(){
        return(
            <footer className="pt-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="ml-4">Redes Sociais:</p>
                            <div className="row img mr-3">
                                <a href="https://facebook.com"><img src={facebook}></img></a>
                                <a href="https://twittter.com"><img src={twitter}></img></a>
                                <a href="https://instagram.com"><img src={instagram}></img></a>
                                <a href="https://whatsapp.com"><img src={whatsapp}></img></a>
                                <a href="https://discord.com"><img src={discord}></img></a>
                            </div>
                        </div>

                        <div className="col texto">
                            <p className="ml-4">Endereço: <br></br><a href="">Rua Severo da Silva</a></p>
                        </div>

                        <div className="col texto">
                            <p className="ml-4">Email: <a href="mailto:superleogame@gmail.com">superleogame@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col texto mb-4"><p>Telefone: <br></br><a href="tel:51995218066">(51) 99521-8066</a></p></div>
                    </div>
                </div>
                <p className="dir pb-3">Direitos Reservados © Course</p>
            </footer>
        )
    }
}

export default Footer;