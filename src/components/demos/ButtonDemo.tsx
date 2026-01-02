import { Button } from '../ui/form-controls/button';
import { Divider } from '../ui/foundations/divider';

export const ButtonDemo = () => {
    return (
        <>
            <div className="u-flex u-flex-col u-items-start u-gap-6">
                {/* ------ */}
                <div className="u-flex u-gap-4">
                    <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                        default:
                    </span>
                    <Button className="u-text-transform-capitalize">
                        button
                    </Button>
                </div>
                {/* ------ */}
                <Divider spacing="small" />
                {/* ------ */}
                <div className="u-flex u-gap-4">
                    <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                        size:
                    </span>
                    <div className="u-flex u-items-start u-gap-2">
                        <Button
                            size="small"
                            visualVariant="outline"
                            className="u-text-transform-capitalize"
                        >
                            small
                        </Button>
                        <Button
                            visualVariant="outline"
                            className="u-text-transform-capitalize"
                        >
                            medium
                        </Button>
                        <Button
                            size="large"
                            visualVariant="outline"
                            className="u-text-transform-capitalize"
                        >
                            large
                        </Button>
                    </div>
                </div>
                {/* ------ */}
                <Divider spacing="small" />
                {/* ------ */}
                <div className="u-flex u-flex-col u-items-start u-gap-6">
                    <div className="u-flex u-gap-4">
                        <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                            outline:
                        </span>
                        <Button
                            visualVariant="outline"
                            className="u-text-transform-capitalize"
                        >
                            outline
                        </Button>
                    </div>
                </div>
                {/* ------ */}
                <Divider spacing="small" />
                {/* ------ */}
                <div className="u-flex u-flex-col u-items-start u-gap-6">
                    <div className="u-flex u-gap-4">
                        <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                            secondary:
                        </span>
                        <Button
                            colorVariant="secondary"
                            className="u-text-transform-capitalize"
                        >
                            secondary
                        </Button>
                    </div>
                </div>
                {/* ------ */}
                <Divider spacing="small" />
                {/* ------ */}
                <div className="u-flex u-flex-col u-items-start u-gap-6">
                    <div className="u-flex u-gap-4">
                        <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                            link/ghost:
                        </span>
                        <div className="u-flex u-items-start u-gap-2">
                            <Button
                                visualVariant="link"
                                className="u-text-transform-capitalize"
                            >
                                link
                            </Button>
                            <Button
                                visualVariant="ghost"
                                className="u-text-transform-capitalize"
                            >
                                ghost
                            </Button>
                        </div>
                    </div>
                </div>
                {/* ------ */}
                <Divider spacing="small" />
                {/* ------ */}
                <div className="u-flex u-flex-col u-items-start u-gap-6">
                    <div className="u-flex u-gap-4">
                        <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                            status:
                        </span>
                        <div className="u-flex u-items-start u-gap-2">
                            <Button
                                colorVariant="success"
                                className="u-text-transform-capitalize"
                            >
                                success
                            </Button>
                            <Button
                                colorVariant="destructive"
                                className="u-text-transform-capitalize"
                            >
                                destructive
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
