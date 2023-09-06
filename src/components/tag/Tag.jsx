import "./_tag.scss"

/**
 * Tag Component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {'circle' | 'basic' | 'undefined'} props.layoutType
 * @param {'big' | 'medium' | 'undefined'} props.layoutSize
 * @param {'fill' | 'border' | 'undefined'} props.decorationType
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' } props.firstcolor
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'light' } props.secondcolor
 * @returns {React.ReactNode}
 */
const Tag = ({children, layoutType="basic", layoutSize="medium", decorationType="border", firstcolor="primary", secondcolor="light", othersClass=""}) => {
    return(
        <span className={`tag tag--${layoutType} tag--${layoutSize} tag--${decorationType} tag--firstcolor--${firstcolor} tag--secondcolor--${secondcolor} ${othersClass}`}>
            {children}
        </span>
    )
}

export default Tag