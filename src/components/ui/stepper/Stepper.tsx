import { getComponentSize, type ComponentSize } from "@/models/get-component-size"
import { cn } from "@/lib/utils/cn"
import "./stepper.css"


interface IStep {
    label: string
}

interface IStepperProps {
    steps: IStep[]
    currentStep: number
    size?: ComponentSize
    className?: string
}

export const Stepper = ({
    steps,
    currentStep,
    size = 'medium',
    className,
}: IStepperProps) => {

    const sizeClass = getComponentSize(size, "stepper");

    return (
        <>
            <div
                data-slot="stepper-root"
                className={cn("stepper", sizeClass, className)}
            >
                {steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = stepNumber < currentStep;
                    const isActive = stepNumber === currentStep;
                    const isLast = index === steps.length - 1;

                    return (
                        <div key={index} data-slot="stepper-item" className="stepper-item">

                            {/* Círculo do Passo */}
                            <div
                                data-status={isActive ? "active" : (isCompleted ? "completed" : "pending")}
                                className={cn(
                                    "stepper-circle",
                                    isActive && "active",
                                    isCompleted && "completed"
                                )}
                            >
                                {isCompleted ? "✓" : stepNumber}
                            </div>

                            {/* Rótulo */}
                            <span
                                data-status={isActive ? "active" : (isCompleted ? "completed" : "pending")}
                                className="stepper-label"
                            >
                                {step.label}
                            </span>

                            {/* Linha de Conexão */}
                            {!isLast && (
                                <div
                                    data-status={isCompleted ? "completed" : "pending"}
                                    className={cn(
                                        "stepper-line",
                                        isCompleted && "completed"
                                    )}
                                ></div>
                            )}
                        </div>
                    )
                })}
            </div>
        </>
    )
}
