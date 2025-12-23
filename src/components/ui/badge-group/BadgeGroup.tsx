import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import { cn } from '@/lib/utils/cn';
import { Badge } from '../badge/Badge';
import './badge-group.css';

interface IBadgeItem {
    text: string;
    color?: string;
    variant?: string;
}

interface IBadgeGroupProps {
    /** Lista de itens para as badges */
    items: IBadgeItem[];
    /** Limita a quantidade visível (opcional) */
    maxVisible?: number;
    /** Tamanho dos badges no grupo */
    size?: ComponentSize;
    /** Classe adicional para customização */
    className?: string;
}

export const BadgeGroup = ({
    items,
    maxVisible = 4,
    size = 'medium',
    className,
}: IBadgeGroupProps) => {
    const visibleItems = items.slice(0, maxVisible);
    const remaining = items.length - maxVisible;

    const sizeClass = getComponentSize(size, 'badge-group');

    return (
        <>
            <div
                data-slot="badge-group-root"
                className={cn('badge-group', sizeClass, className)}
            >
                {visibleItems.map((item, i) => (
                    <div
                        key={i}
                        data-slot="badge-group-item"
                        className="badge-group-item"
                        style={{ zIndex: visibleItems.length + 1 }}
                    >
                        <Badge
                            text={item.text}
                            color={item.color}
                            variant={item.variant}
                            size={size}
                        />
                    </div>
                ))}

                {remaining > 0 && (
                    <div
                        data-slot="badge-group-more"
                        className="badge-group-item"
                        style={{ zIndex: visibleItems.length + 1 }}
                    >
                        <Badge
                            size={size}
                            className="badge-group-more-badge"
                            text={`+${remaining}`}
                        />
                    </div>
                )}
            </div>
        </>
    );
};
