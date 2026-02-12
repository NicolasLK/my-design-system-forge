import { Textarea } from '@/components/ui/form-controls/textarea';
import { Divider } from '@/components/ui/foundations/divider';

export const TextareaDemo = () => {
    return (
        <div className="u-flex u-flex-col u-items-start u-gap-6">
            {/* Default */}
            <div className="u-flex u-gap-4">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    default:
                </span>
                <Textarea placeholder="Escreva algo aqui..." />
            </div>

            <Divider spacing="small" />

            {/* With Label */}
            <div className="u-flex u-gap-4">
                <span className="u-text-sm u-text-gray">With label:</span>
                <Textarea
                    label="Biografia"
                    placeholder="Conte um pouco sobre você..."
                    description="Essa descrição será exibida publicamente no seu perfil."
                />
            </div>

            <Divider spacing="small" />

            {/* Sizes */}
            <div className="u-flex u-gap-4">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    sizes:
                </span>
                <div className="u-flex u-flex-col u-gap-4 u-w-full">
                    <Textarea size="sm" placeholder="Small (sm)" />
                    <Textarea size="md" placeholder="Medium (md)" />
                    <Textarea size="lg" placeholder="Large (lg)" />
                </div>
            </div>

            <Divider spacing="small" />

            {/* Invalid */}
            <div className="u-flex u-gap-4">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    invalid:
                </span>
                <Textarea
                    label="Comentário"
                    placeholder="Digite seu comentário..."
                    error
                    errorMessage="O comentário não pode estar vazio."
                />
            </div>

            <Divider spacing="small" />

            {/* Disabled */}
            <div className="u-flex u-gap-4">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    disabled:
                </span>
                <Textarea
                    label="Feedback Enviado"
                    defaultValue="Obrigado pelo seu feedback! Não é possível editar agora."
                    disabled
                />
            </div>

            <Divider spacing="small" />

            {/* Full Width */}
            <div className="u-flex u-gap-4 u-w-full">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize u-w-20">
                    full width:
                </span>
                <Textarea
                    fullWidth
                    placeholder="Este textarea ocupa 100% da largura do container pai."
                    rows={6}
                />
            </div>
        </div>
    );
};