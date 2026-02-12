import { Switch } from '@/components/ui/form-controls/switch';
import { Divider } from '@/components/ui/foundations/divider';

export const SwitchDemo = () => {
    return (
        <div className="u-flex u-flex-col u-items-start u-gap-6">
            {/* Default */}
            <div className="u-flex u-gap-4">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    default:
                </span>
                <Switch />
            </div>

            <Divider spacing="small" />

            {/* With Label */}
            <div className="u-flex u-gap-4">
                <span className="u-text-sm u-text-gray">With label:</span>
                <Switch 
                    label="Notificações" 
                    description="Receba alertas sobre novas mensagens."
                />
            </div>

            <Divider spacing="small" />

            {/* Sizes */}
            <div className="u-flex u-gap-4">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    sizes:
                </span>
                <div className="u-flex u-flex-col u-gap-4">
                    <div className="u-flex u-items-center u-gap-2">
                        <Switch switchSize="sm" label="Small" />
                    </div>
                    <div className="u-flex u-items-center u-gap-2">
                        <Switch switchSize="md" label="Medium" />
                    </div>
                    <div className="u-flex u-items-center u-gap-2">
                        <Switch switchSize="lg" label="Large" />
                    </div>
                </div>
            </div>

            <Divider spacing="small" />

            {/* Invalid */}
            <div className="u-flex u-gap-4">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    invalid:
                </span>
                <Switch
                    label="Termos de uso"
                    error
                    errorMessage="Você precisa aceitar os termos."
                />
            </div>

            <Divider spacing="small" />

            {/* Disabled */}
            <div className="u-flex u-gap-4">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    disabled:
                </span>
                <div className="u-flex u-flex-col u-gap-4">
                    <Switch
                        label="Desabilitado (Off)"
                        disabled
                    />
                    <Switch
                        label="Desabilitado (On)"
                        checked
                        disabled
                    />
                </div>
            </div>
        </div>
    );
};