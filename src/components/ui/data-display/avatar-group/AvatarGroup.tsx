import { cn } from '@/lib/utils/cn';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import { Avatar } from '../avatar';
import './avatar-group.css';

/* ============================================================
 * 🟦 DEFINIÇÕES
 * ============================================================ */

interface IAvatarUser {
    name?: string;
    src?: string;
    alt?: string;
    shape?: 'circle' | 'square';
}

interface IAvatarGroupProps {
    users: IAvatarUser[];
    maxVisible?: number;
    size?: ComponentSize;
    className?: string;
}

export const AvatarGroup = ({
    users,
    maxVisible = 4,
    size = 'medium',
    className,
}: IAvatarGroupProps) => {
    const visibleUsers = users.slice(0, maxVisible);
    const remaining = users.length - maxVisible;

    const sizeClass = getComponentSize(size, 'avatar-group');

    return (
        <>
            <div
                data-slot="avatar-group-root"
                className={cn('avatar-group', sizeClass, className)}
            >
                {visibleUsers.map((user, i) => (
                    <div
                        key={i}
                        data-slot="avatar-group-item"
                        className="avatar-group-item"
                        // Controla a sobreposição: itens mais à direita (i maior) devem ter z-index maior
                        style={{ zIndex: visibleUsers.length + i }} // Aumenta o z-index da esquerda para a direita (item mais à frente = z-index maior)
                    >
                        {/* Usa o componente composto Avatar */}
                        <Avatar.Root size={size} shape={user.shape || 'circle'}>
                            {user.src && (
                                <Avatar.Image
                                    src={user.src}
                                    alt={user.alt || user.name}
                                />
                            )}
                            <Avatar.Fallback name={user.name} />
                        </Avatar.Root>
                    </div>
                ))}

                {remaining > 0 && (
                    // Contador "+N" - Z-index deve ser alto para não ficar atrás do item i=0
                    <div
                        data-slot="avatar-group-more"
                        className="avatar-group-more"
                        style={{ zIndex: visibleUsers.length + 10 }}
                    >
                        +{remaining}
                    </div>
                )}
            </div>
        </>
    );
};
