import avatar from "../../assets/avatar.png"
import "./_profil.scss";

const Profil = ({othersClass=""}) => {
    return(
        <div className={`profil ${othersClass}`}>
            <div className="profil__img">
                <img src={avatar} alt="Image de profil minimaliste"></img>
            </div>
            <h2 className="profil__title">Lise Denis</h2>
        </div>
    )
}

export default Profil