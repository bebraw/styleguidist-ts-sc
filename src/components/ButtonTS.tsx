import * as React from 'react'

interface IButtonTSProps {
    children: JSX.Element[] | JSX.Element
}

class ButtonTS extends React.Component<IButtonTSProps, {}> {
    render() {
        return <button>{this.props.children}</button>
    }
}

// const ButtonTS = ({ children }: IButtonTSProps) => <button>{children}</button>

export default ButtonTS
