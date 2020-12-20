import React from 'react';

interface Props {
    value: 'X' | 'O' | '';
    onClick?: () => void;
    row: number;
    col: number;
};

class Card extends React.Component<Props> {
    /**
     * Remove Border Radius From Card.
     */
    static radius: string[][] = [
        ['bottom', 'left bottom', 'left'],
        ['right bottom', 'left bottom top right', 'left top'],
        ['right', 'top right', 'top'],
    ];
    /**
     * Remove Border From Card.
     */
    static border: string[][] = [
        ['b-bottom b-right', 'b-bottom', 'b-left b-bottom'],
        ['b-right', '', 'b-left'],
        ['b-right b-top', 'b-top', 'b-left b-top']
    ];
    
    render() {
        const { row, col } = this.props;
        const radius = Card.radius[row][col];
        const border = Card.border[row][col];
        return (
            <div className={`card ${radius} ${border} ${this.props.value}`} onClick={this.props.onClick}>
                <span>
                    {this.props.value}
                </span>
            </div>
        );
    }
}


export default Card;