import firstProfilPic from "../../assets/profil-pic1.jpg";
import "./_profil.scss";

const Profil = () => {
    return(
        <div className="profil">
            <img className="profil__img" src={firstProfilPic} alt="Image de profil minimaliste"></img>
        </div>
    )
}

export default Profil