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
        this.handleStepClick = this.handleStepClick.bind(this);
    }

    handleStepClick(order: number, isClickable: boolean): void {
        if (isClickable) {
            this.setState({ activeStep: order });
        }
    }

    render() {
        return (
            <div>
                {this.props.steps.map((step: string, i: number) => (
                    <Step
                        name={step}
                        order={i}
                        isActive={this.state.activeStep === i}
                        isClickable={
                            this.props.disabled
                                ? !this.props.disabled.includes(step)
                                : true
                        }
                        onClick={this.handleStepClick}
                    />
                ))}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepLineContainer);
