import Tag from "../tag/Tag"
import "./_socials.scss"

const Socials = ({color, othersClass=""}) => {
    return(
        <div className={`socials ${othersClass}`}>
            <a href="#" className="socials__item">
                <Tag firstcolor="light" secondcolor="transparent" decorationType="fill">In</Tag>
            </a>
            <a href="#" className="socials__item">
                <Tag firstcolor="light" secondcolor="transparent" decorationType="fill">Be</Tag>
            </a>
            <a href="#" className="socials__item">
                <Tag firstcolor="light" secondcolor="transparent" decorationType="fill">Mon CV</Tag>
            </a>
        </div>
    )
}

export default Socials