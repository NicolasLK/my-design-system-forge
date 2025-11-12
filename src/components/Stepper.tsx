import "../styles/components/stepper.css"

interface IStep {
    label: string
    completed?: boolean
}

interface IStepperProps {
    steps: IStep[]
    currentStep: number
}

export const Stepper = ({ steps, currentStep }: IStepperProps) => {
    return (
        <>
            <div className="stepper">
                {steps.map((step, index) => (
                    <div key={index} className="stepper-item">
                        <div
                            className={`stepper-circle ${index < currentStep
                                ? "completed"
                                : index === currentStep
                                    ? "active"
                                    : ""
                                }`}
                        >
                            {index < currentStep ? "✓" : index + 1}
                        </div>
                        <span className="stepper-label">{step.label}</span>
                        {index < steps.length - 1 && <div className="stepper-line"></div>}
                    </div>
                ))}
            </div>
        </>
    )
}
