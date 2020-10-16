import React, {Component} from "react";
import "./home.css"
import Omen from "../../img/omen.png"
import Phoenix from "../../img/phoenix.png"
import Cypher from "../../img/cypher.png"
import Raze from "../../img/raze.png"
import Valorant1 from "../../img/valorant1.png"

class Home extends Component{
    render(){
        return(
            <div className="home">
                <p className="titulo">Home</p>
                <br></br>
                <p className="textos">Após atualizações, personagens do jogo Valorant foram modificados, Confira o novo patch do jogo:</p>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <img className="photologo" src={Valorant1}></img>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <img className="photo" src={Raze}></img>
                        </div>
                    
                        <div className="col-3">
                            <img className="photo" src={Omen}></img>
                        </div>
                    
                        <div className="col-3">
                            <img className="photo" src={Cypher}></img>
                        </div>
                    
                        <div className="col-3">
                            <img className="photo" src={Phoenix}></img>
                        </div>
                    </div>

                    <div className="row mt-5 text-center">
                        
                        <div className="col-3 textos2">
                            <div className="borda">Raze
                            <p className="textos">-Granada Explosiva teve seu dano reduzido a apenas 50.</p>
                            <p className="textos">-Sua Ult dá hit kill se for acertada em apenas 1 jogador, mas se for acertada em mais de 1 jogador ao mesmo tempo, o dano é dividido entre eles.</p>
                            <p className="textos"></p>
                            </div>
                        </div>

                        <div className="col-3 textos2">
                            <div className="borda">Omen
                            <p className="textos">-Sua paranoia tem menos alcance do que antes.</p>
                            <p className="textos">-Seu número de teleportes foi aumentado para 3.</p>
                            <p className="textos">-Sua Ult foi nerfada e é possível apenas saber que ele fez a ult, mas não onde exatamente deu o barulho da ult.</p>
                            </div>
                        </div>
                        
                        <div className="col-3 textos2">
                            <div className="borda">Cypher
                            <p className="textos">-Seu fio foi aumentado para 3.</p>
                            <p className="textos">-Sua jaula some um pouco antes do que o comum.</p>
                            <p className="textos">-Sua Ult dura mais tempo e os cadáveres tem mais tempo para serem usados na ult.</p>
                            </div>
                        </div>

                        <div className="col-3 textos2">
                            <div className="borda">Phoenix
                            <p className="textos">-Se o Phoenix cegar ele mesmo ou seus aliados, a bang durará menos para eles.</p>
                            <p className="textos">-Se ele começar a desarmar ou plantar a spike, sua ult acaba imediatamente.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;