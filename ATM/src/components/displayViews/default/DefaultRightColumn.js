import React from 'react';
import { connect } from 'react-redux';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';

class DefaultRightColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button disabled buttonBlocked={true} />
                <Link to="/language"><Button /></Link>
                <Link to="/help"><Button /></Link>
                <Button disabled buttonBlocked={true} />
            </ButtonsColumn>
        );
    };
}

const mapStateToProps = state => ({
    view: state.paymentsReducer.view
});

export default connect(mapStateToProps)(DefaultRightColumn);