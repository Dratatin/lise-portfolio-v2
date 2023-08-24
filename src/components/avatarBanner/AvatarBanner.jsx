import { Fragment } from 'react';
import {ReactComponent as Star} from '../../assets/star.svg'
import "./_avatarBanner.scss"

const banner = ["brand design", "web design", "motion design", "photographie", "illustration", "direction artistique"];

const AvatarBanner = () => {
    return(
        <div className="avatar-banner">
            <div className="avatar-banner__content">
                {banner.map((item, index) => (
                    <Fragment key={index}>
                        <span className="avatar-banner__content__label">{item}</span>
                        <Star className="avatar-banner__content__icon" width={22} height={22}/>
                    </Fragment>
                ))}
            </div>
            <div className="avatar-banner__content">
                {banner.map((item, index) => (
                    <Fragment key={index}>
                        <span className="avatar-banner__content__label">{item}</span>
                        <Star className="avatar-banner__content__icon" width={22} height={22}/>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default AvatarBanner