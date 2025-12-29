import { cn } from '@/lib/utils/cn';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import { usePaginationRange } from '@/models/hooks/usePaginationRange';
import { Button } from '../../form-controls/button';
import './pagination.css';

interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    size?: ComponentSize;
    siblingCount?: number;
    className?: string;
}

const DOTS = '...';

export const Pagination = ({
    totalPages,
    currentPage,
    onPageChange,
    size = 'medium',
    siblingCount = 1,
    className,
}: IPaginationProps) => {
    const sizeClass = getComponentSize(size, 'pagination');

    const paginationRange = usePaginationRange(
        totalPages,
        currentPage,
        siblingCount,
    );

    /**
     * Define o tamanho dos botões de navegação
     */
    const navButtonSize = size === 'large' ? 'medium' : 'small';

    const handleClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const renderPages = () => {
        return paginationRange.map((item, index) => {
            if (item === DOTS) {
                return (
                    <span
                        key={index}
                        className={cn('pagination-ellipsis', sizeClass)}
                    >
                        ...
                    </span>
                );
            }

            const page = item as number;
            const isActive = page === currentPage;

            return (
                <Button
                    key={index}
                    visualVariant={isActive ? 'default' : 'ghost'}
                    colorVariant="primary" // Cor primária para os números
                    size={navButtonSize}
                    className={cn(
                        'pagination-button',
                        isActive && 'active', // Mantém a classe ativa para o CSS
                    )}
                    onClick={() => handleClick(page)}
                    aria-label={`Página ${page}`}
                    aria-current={isActive ? 'page' : undefined}
                >
                    {page}
                </Button>
            );
        });
    };

    return (
        <>
            <nav
                role="navigation"
                aria-label="Paginação"
                data-slot="pagination-root"
                className={cn('pagination', sizeClass, className)}
            >
                {/* Botão Anterior */}
                <Button
                    visualVariant="ghost"
                    colorVariant="neutral"
                    size={navButtonSize}
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Página Anterior"
                    className="pagination-nav-button"
                >
                    ‹
                </Button>

                {renderPages()}

                {/* Botão Próximo */}
                <Button
                    visualVariant="ghost"
                    colorVariant="neutral"
                    size={navButtonSize}
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Próxima Página"
                    className="pagination-nav-button"
                >
                    ›
                </Button>
            </nav>
        </>
    );
};
