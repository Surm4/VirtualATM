import React from 'react';
import { connect } from 'react-redux';
import { changeLanguageRequest } from '../../../actions/actions';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import constants from '../../../common/constants';
import PropTypes from 'prop-types';

class LanguageLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button data-test="button-column-1" onClick={() => this.props.changeLanguageRequest(constants.LANG_EN)}/>
                <Button data-test="button-column-2" onClick={() => this.props.changeLanguageRequest(constants.LANG_PL)}/>
                <Button data-test="button-column-3" disabled buttonBlocked={true} />
                <Button data-test="button-column-4" disabled buttonBlocked={true} />
            </ButtonsColumn >
        );
    };
}

LanguageLeftColumn.propTypes = {
    changeLanguageRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    changeLanguageRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageLeftColumn);