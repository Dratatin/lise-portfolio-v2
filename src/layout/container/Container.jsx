import "./_container.scss";

const Container = ({children, layoutType="medium", othersClass=""}) => {
    return(
        <div className={`container container--${layoutType} ${othersClass}`}>
            {children}
        </div>
    )
}

export default Container