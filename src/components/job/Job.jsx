import {ReactComponent as Star} from '../../assets/star.svg'
import "./_job.scss"

const Job = ({othersClass=''}) => {
    return(
        <div className={`job ${othersClass}`}>
            <span className='job__text'>
                Directrice Artistique
                <Star className="job__text__icon" />
            </span>
        </div>
    )
}

export default Job