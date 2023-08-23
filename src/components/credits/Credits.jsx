import "./_credits.scss"

const Credits = ({othersClass=''}) => {
    return(
        <div className={`credits ${othersClass}`}>
            <span>
                © 2023 Lise Denis
            </span>
            <span>
                Développé par Mathys Chirouze
            </span>
        </div>
    )
}

export default Credits