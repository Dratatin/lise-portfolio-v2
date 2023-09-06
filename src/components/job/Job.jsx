import {ReactComponent as Star} from '../../assets/star.svg'
import "./_job.scss"

const Job = ({othersClass=''}) => {
    return(
        <div className={`job ${othersClass}`}>
            Directrice Artistique
        </div>
    )
}

export default Job