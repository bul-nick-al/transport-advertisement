export interface StepsInterface {
    steps: string[];
    activeStep: number;
    disabled?: string[];
}

export interface StepInterface {
    name: string;
    order: number;
    isActive: boolean;
    isClickable?: boolean;
    onClick: (order: number, isClickable: boolean) => void;
}
