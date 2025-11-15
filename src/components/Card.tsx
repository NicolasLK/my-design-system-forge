import './../styles/components/card.css'
import { Button } from './ui/button/Button'

interface ICardProps {
    // Opcional: fullWidth programatico.
    fullWidth?: boolean
}

export const Card = ({ fullWidth = false }: ICardProps) => {

    const widthClass = fullWidth ? 'card-full' : ''

    const cardClasses = `card ${widthClass}`.trim()

    return (
        <>
            <div className={cardClasses}>
                <div className="card-header">Título do Card</div>
                <div className="card-content">Descrição breve sobre o conteúdo.</div>
                <div className="card-footer">
                    <Button variant='primary' size='small'>Ação</Button>
                </div>
            </div>
        </>
    )
}