import Tag from "../tag/Tag"
import "./_socials.scss"

const Socials = ({color, othersClass=""}) => {
    return(
        <div className={`socials ${othersClass}`}>
            <a href="#">
                <Tag layoutType="circle" decorationType="fill" color={color === "white" ? "white" : "primary"} whiteTextColor={color === "white" && "tertiary"}>In</Tag>
            </a>
            <a href="#">
                <Tag color={color === "white" ? "white" : "primary"}>Mon CV</Tag>
            </a>
            <a href="#">
                <Tag layoutType="circle" decorationType="fill" color={color === "white" ? "white" : "primary"} whiteTextColor={color === "white" && "tertiary"}>Be</Tag>
            </a>
        </div>
    )
}

export default Socials