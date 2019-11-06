import React from 'react';
import { connect } from 'react-redux';
import { setMoneyAmountRequest } from '../../../actions/actions';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';

class DepositRightColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Link to="/confirm">
                    <Button onClick={() => this.props.setMoneyAmountRequest(500)} />
                </Link>
                <Link to="/confirm">
                    <Button onClick={() => this.props.setMoneyAmountRequest(0)} />
                </Link>
                <Button disabled buttonBlocked={true} />
                <Link to="/">
                    <Button />
                </Link>
            </ButtonsColumn>
        );
    };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    setMoneyAmountRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(DepositRightColumn);