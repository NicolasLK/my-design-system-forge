import { forwardRef, useState, type ComponentProps, type ReactNode, type SyntheticEvent } from "react"
import { getComponentSize, type ComponentSize } from "@/models/get-component-size"
import { cn } from "@/lib/utils/cn"
import { getInitials } from "@/models/get-initials"
import "./avatar.css"


/* ============================================================
 * 🟦 Shared Types
 * ============================================================ */

interface IAvatarRootProps extends ComponentProps<"div"> {
    /** Tamanho do avatar (small, medium, large) */
    size?: ComponentSize
    /** Se deve ser circular ou quadrado */
    shape?: "circle" | "square"
}

interface IAvatarImageProps extends ComponentProps<"img"> {
    /** Opcional: Handlers de erro/carregamento para melhor UX */
    onLoadingStatusChange?: (loaded: boolean) => void;
}

interface IAvatarFallbackProps extends ComponentProps<"span"> {
    /** Nome do usuário, usado para gerar iniciais */
    name?: string
    /** Ícone ou elemento customizado opcional */
    icon?: ReactNode
}

/* ============================================================
 * 🟦 ROOT
 * ============================================================ */

export const AvatarRoot = forwardRef<HTMLDivElement, IAvatarRootProps>(
    ({ size = "medium", shape = "circle", className, ...props }, ref) => {

        const sizeClass = getComponentSize(size, "avatar");
        const shapeClass = shape === "circle" ? "avatar-circle" : "avatar-square";

        return (
            <>
                <div
                    data-slot="avatar-root"
                    data-shape={shape}
                    className={cn(
                        "avatar-root",
                        sizeClass,
                        shapeClass,
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </>
        )
    }
)

/* ============================================================
 * 🟦 IMAGE
 * ============================================================ */

export const AvatarImage = forwardRef<HTMLImageElement, IAvatarImageProps>(
    ({ className, onError, onLoad, ...props }, ref) => {
        const [imageError, setImageError] = useState(false);
        const [imageLoaded, setImageLoaded] = useState(false);

        const handleLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => {
            setImageLoaded(true);
            setImageError(false);
            onLoad?.(e);
        };

        const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
            setImageError(true);
            setImageLoaded(false);
            onError?.(e);
        };

        // Se a imagem falhou, não a renderizamos, forçando o Fallback a aparecer.
        if (imageError || !props.src) {
            return null;
        }

        return (
            <>
                <img
                    data-slot="avatar-image"
                    className={cn("avatar-image", imageLoaded && 'avatar-image-loaded', className)}
                    ref={ref}
                    loading="lazy"
                    onLoad={handleLoad}
                    onError={handleError}
                    {...props}
                    style={{ opacity: imageLoaded ? 1 : 0 }} // Esconde enquanto não carrega
                />
            </>
        )
    }
)

/* ============================================================
 * 🟦 FALLBACK
 * ============================================================ */

export const AvatarFallback = forwardRef<HTMLSpanElement, IAvatarFallbackProps>(
    ({ className, name, icon, ...props }, ref) => {

        const content = icon ? icon : getInitials(name);

        return (
            <>
                <span
                    data-slot="avatar-fallback"
                    data-has-icon={!!icon}
                    className={cn("avatar-fallback", className)}
                    ref={ref}
                    {...props}
                >
                    {content}
                </span>
            </>
        )
    }
)
