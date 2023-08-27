import "./_credits.scss"

const Credits = ({othersClass=''}) => {
    return(
        <div className={`credits ${othersClass}`}>
            <span>
                © 2023 Lise Denis
            </span>
        </div>
    )
}

export default Credits