import Tag from "../tag/Tag"
import "./_socials.scss"

const Socials = () => {
    return(
        <div className="socials">
            <a href="#">
                <Tag layoutType="circle" decorationType="fill">In</Tag>
            </a>
            <a href="#">
                <Tag>Mon CV</Tag>
            </a>
            <a href="#">
                <Tag layoutType="circle" decorationType="fill">Be</Tag>
            </a>
        </div>
    )
}

export default Socials