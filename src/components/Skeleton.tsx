import "../styles/components/skeleton.css"

interface ISkeletonProps {
    width?: string | number
    height?: string | number
    circle?: boolean
    rounded?: boolean
}

export const Skeleton = ({
    width = "100%",
    height = "1rem",
    circle = false,
    rounded = false,
}: ISkeletonProps) => {

    const style: React.CSSProperties = {
        width,
        height,
        borderRadius: circle ? "50%" : rounded ? "var(--radius-md)" : "4px"
    }

    return (
        <>
            <div className="skeleton" style={style} />
        </>
    )
}
