import avatar from "../../assets/avatar.png"
import AvatarBanner from "../avatarBanner/AvatarBanner";
import "./_aboutAvatar.scss"

const AboutIllustration = ({othersClass=""}) => {
    return(
        <div className={`${othersClass} about-avatar`}>
            <div className="about-avatar__illustration">
                <img src={avatar} alt="Autoportrait"/>
            </div>
            <AvatarBanner />
        </div>
    )
}

export default AboutIllustration