import Tag from "../tag/Tag"
import "./_card.scss"

const Card = ({title, tag, id}) => {
    return (
        <div className="card">
            <div className='card__illustration'>
                <img alt="chat" src={require(`../../assets/images/projects/${id}/preview.jpg`)}/>
            </div>
            <div className='card__details'>
                <h2 className='card__details__title'>{title}</h2>
                <Tag othersClass='card__details__tag'>{tag}</Tag>
            </div>
        </div>
    )
}

export default Card