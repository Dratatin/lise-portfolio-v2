import avatar from "../../assets/avatar.png"
import {ReactComponent as Star} from '../../assets/star.svg'
import "./_aboutAvatar.scss"

const banner = ["brand design", "web design", "motion design", "photographie", "illustration", "direction artistique"];

const AboutIllustration = ({othersClass=""}) => {
    return(
        <div className={`${othersClass} about-avatar`}>
            <div className="about-avatar__illustration">
                <img src={avatar} alt="Autoportrait"/>
            </div>
            
            <div className="about-avatar__banner">
                {banner.map(item => (
                    <>
                        <span className="about-avatar__banner__label">{item}</span>
                        <Star className="about-avatar__banner__icon" width={22} height={22}/>
                    </>
                ))}
            </div>
        </div>
    )
}

export default AboutIllustration