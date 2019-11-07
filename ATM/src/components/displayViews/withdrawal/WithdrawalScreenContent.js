import React from 'react';
import { connect } from 'react-redux';
import {
    View, ViewTextContainer, ViewMainText, ViewColumn, ViewColumnWrapper, ViewButtonDescription, ViewButtonDescriptionContainer, ViewSecondaryText
} from '../reusable/utilityComponents';
import constants from '../../../common/constants';
import PropTypes from 'prop-types';
import DepositScreen from '../deposit/DepositScreen';

class DepositScreenContent extends React.Component {
    render = () => {
        return (
            <View>
                <ViewTextContainer>
                    <ViewMainText>{this.props.language.WITHDRAWAL}</ViewMainText>
                    <ViewSecondaryText>{this.props.language.WITHDRAWAL_SCREEN_DESC}</ViewSecondaryText>
                </ViewTextContainer>
                <ViewColumnWrapper>
                    <ViewColumn side={constants.LEFT}>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side={constants.LEFT}>{this.props.language["20"]}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side={constants.LEFT}>{this.props.language["50"]}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side={constants.LEFT}>{this.props.language["100"]}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side={constants.LEFT}>{this.props.language["200"]}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                    </ViewColumn>
                    <ViewColumn side={constants.RIGHT}>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side={constants.RIGHT}>{this.props.language["500"]}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side={constants.RIGHT}>{this.props.language.CUSTOM_AMOUNT}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side={constants.RIGHT} unsupported={true}></ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side={constants.RIGHT}>{this.props.language.BACK}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                    </ViewColumn>
                </ViewColumnWrapper>
            </View>
        );
    };
}

DepositScreenContent.propTypes = {
    language: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    language: state.paymentsReducer.language,
});

export default connect(mapStateToProps)(DepositScreenContent);