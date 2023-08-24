import firstProfilPic from "../../assets/profil-pic1.png";
import "./_profil.scss";

const Profil = ({othersClass=""}) => {
    return(
        <div className={`profil ${othersClass}`}>
            <img className="profil__img" src={firstProfilPic} alt="Image de profil minimaliste"></img>
        </div>
    )
}

export default Profil