import * as React from 'react'

/**
 * Button properties
 */
interface IButtonTSProps {
    /** children to render */
    children: JSX.Element[] | JSX.Element
}

/**
 * Button
 */
class ButtonTS extends React.Component<IButtonTSProps, {}> {
    render() {
        return <button>{this.props.children}</button>
    }
}

// const ButtonTS = ({ children }: IButtonTSProps) => <button>{children}</button>

export default ButtonTS
