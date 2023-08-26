import "./_tag.scss"

/**
 * Tag Component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {'circle' | 'basic' | 'undefined'} props.layoutType
 * @param {'big' | 'medium' | 'undefined'} props.layoutSize
 * @param {'fill' | 'border' | 'undefined'} props.decorationType
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'white'} props.color
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' } props.whiteTextColor
 * @returns {React.ReactNode}
 */
const Tag = ({children, layoutType="basic", layoutSize="medium", decorationType="border", color="primary", whiteTextColor=false, othersClass=""}) => {
    return(
        <span className={`tag tag--${layoutType} tag--${layoutSize} tag--${decorationType} tag--${color} ${whiteTextColor && `tag--${color}--${whiteTextColor}`} ${othersClass}`}>
            {children}
        </span>
    )
}

export default Tag