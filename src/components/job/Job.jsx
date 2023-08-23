import {ReactComponent as Star} from '../../assets/star.svg'
import "./_job.scss"

const Job = ({othersClass=''}) => {
    return(
        <div className={`job ${othersClass}`}>
            Directrice Artistique
            <Star className="job__icon" />
        </div>
    )
}

export default Job