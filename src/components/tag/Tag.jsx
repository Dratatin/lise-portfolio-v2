import "./_tag.scss"

/**
 * Tag Component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {'circle' | 'basic' | 'undefined'} props.layoutType
 * @param {'fill' | 'border' | 'undefined'} props.decorationType
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary'} props.color
 * @returns {React.ReactNode}
 */
const Tag = ({children, layoutType = "basic", decorationType="border", color="primary", othersClass = ""}) => {
    return(
        <span className={`tag tag--${layoutType} tag--${decorationType} tag--${color} ${othersClass}`}>
            {children}
        </span>
    )
}

export default Tag