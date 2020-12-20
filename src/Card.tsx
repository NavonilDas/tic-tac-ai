import React from 'react';

interface Props {
    value: 'X' | 'O' | '';
    onClick?: () => void;
};

class Card extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={`card ${this.props.value}`} onClick={this.props.onClick}>
                <span>
                    {this.props.value}
                </span>
            </div>
        );
    }
}


export default Card;