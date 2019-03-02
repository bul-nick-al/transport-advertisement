import { connect } from 'react-redux';
import * as React from 'react';
import { StepsInterface } from './interfaces';
import { Step } from './Step';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

class StepLineContainer extends React.Component<any, any> {

    constructor(props: StepsInterface) {
        super(props);
        this.state = { activeStep: this.props.activeStep };
    }

    handleStepClick(order: number): void {
        console.warn(order);
        this.setState({activeStep: order});
    }

    render() {
        return (
            <div>
                {this.props.steps.map((step: string, i: number) => (
                    <Step name={step} order={i} isActive={this.state.activeStep === i} onClick={this.handleStepClick}/>
                    )
                )}
            </div>);
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepLineContainer);
