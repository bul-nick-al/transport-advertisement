export interface StepsInterface {
    steps: string[];
    activeStep: number;
}

export interface StepInterface {
    name: string;
    order: number;
    isActive: boolean;
    onClick: (order: number) => void;
}