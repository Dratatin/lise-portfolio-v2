import "./_container.scss";

const Container = ({children, layoutType="medium"}) => {
    return(
        <div className={`container container--${layoutType}`}>
            {children}
        </div>
    )
}

export default Container