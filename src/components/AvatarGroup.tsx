import "../styles/components/avatarGroup.css"
import { Avatar } from "./Avatar"

interface IAvatarGroupProps {
    users: { name?: string; src?: string }[]
    maxVisible?: number
    size?: "small" | "medium" | "large"
}

export const AvatarGroup = ({
    users,
    maxVisible = 4,
    size = "medium",
}: IAvatarGroupProps) => {
    const visibleUsers = users.slice(0, maxVisible)
    const remaining = users.length - maxVisible

    return (
        <>
            <div className={`avatar-group avatar-group-${size}`}>
                {visibleUsers.map((user, i) => (
                    <div
                        key={i}
                        className="avatar-group-item"
                        style={{ zIndex: visibleUsers.length - i }}
                    >
                        <Avatar
                            src={user.src}
                            name={user.name}
                            size={size}
                        />
                    </div>
                ))}

                {remaining > 0 && (
                    <div className="avatar-group-more" style={{ zIndex: 0 }}>
                        +{remaining}
                    </div>
                )}
            </div>
        </>
    )
}
