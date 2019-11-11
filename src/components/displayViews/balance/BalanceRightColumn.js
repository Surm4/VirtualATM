import React from 'react';
import { connect } from 'react-redux';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';
import { pushTransactionMsgRequest } from '../../../actions/actions';
import constants from '../../../common/constants';
import PropTypes from 'prop-types';

class BalanceRightColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button data-test="button-column" disabled buttonBlocked={true} />
                <Button data-test="button-column" disabled buttonBlocked={true} />
                <Button data-test="button-column" disabled buttonBlocked={true} />
                <Link to={constants.GET_HOMEPAGE}>
                    <Button data-test="button-column" onClick={() => this.props.pushTransactionMsgRequest()} />
                </Link>
            </ButtonsColumn>
        );
    };
}

BalanceRightColumn.propTypes = {
    pushTransactionMsgRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    pushTransactionMsgRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(BalanceRightColumn);