import { Divider } from '../ui/foundations/divider';

export const DividerDemo = () => {
    return (
        <>
            <div className="u-flex u-flex-col u-gap-6">
                {/* Default */}
                <div className="u-flex u-flex-col u-gap-2">
                    <span className="u-text-sm u-text-gray">
                        Default (horizontal)
                    </span>
                    <Divider />
                </div>

                {/* Vertical */}
                <div className="u-flex u-flex-col u-gap-2">
                    <span className="u-text-sm u-text-gray">Vertical</span>

                    <div className="u-flex u-items-center u-gap-4 u-h-6">
                        <span>Item A</span>
                        <Divider orientation="vertical" />
                        <span>Item B</span>
                    </div>
                </div>

                {/* Strong */}
                <div className="u-flex u-flex-col u-gap-2">
                    <span className="u-text-sm u-text-gray">
                        Variant: strong
                    </span>
                    <Divider variant="strong" />
                </div>

                {/* Spacing */}
                <div className="u-flex u-flex-col u-gap-2">
                    <span className="u-text-sm u-text-gray">
                        Spacing: large
                    </span>
                    <Divider spacing="large" />
                </div>

                {/* Acessibilidade */}
                <div className="u-flex u-flex-col u-gap-2">
                    <span className="u-text-sm u-text-gray">
                        Não decorativo (acessível)
                    </span>
                    <Divider decorative={false} />
                </div>
            </div>
        </>
    );
};
