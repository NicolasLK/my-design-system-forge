import { Button } from '../ui/form-controls/button';
import { Divider } from '../ui/foundations/divider';
import { CogIcon } from './IconsDemo';

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
                            size="sm"
                            variant="outline"
                            className="u-text-transform-capitalize"
                        >
                            small
                        </Button>
                        <Button
                            variant="outline"
                            className="u-text-transform-capitalize"
                        >
                            medium
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
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
                            variant="outline"
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
                            color="secondary"
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
                                variant="link"
                                className="u-text-transform-capitalize"
                            >
                                link
                            </Button>
                            <Button
                                variant="ghost"
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
                                color="success"
                                className="u-text-transform-capitalize"
                            >
                                success
                            </Button>
                            <Button
                                color="destructive"
                                className="u-text-transform-capitalize"
                            >
                                destructive
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
                            icon:
                        </span>
                        <Button size="icon-xs">
                            <CogIcon />
                        </Button>
                        <Button size="icon-sm">
                            <CogIcon />
                        </Button>
                        <Button size="icon">
                            <CogIcon />
                        </Button>
                        <Button size="icon-lg">
                            <CogIcon />
                        </Button>
                    </div>
                </div>
                {/* ------ */}
                <Divider spacing="small" />
                {/* ------ */}
                <div className="u-flex u-flex-col u-items-start u-gap-6">
                    <div className="u-flex u-gap-4">
                        <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                            with icon:
                        </span>
                        <Button className="u-text-transform-capitalize">
                            <CogIcon /> settings
                        </Button>
                        <Button
                            className="u-text-transform-capitalize"
                            disabled
                        >
                            <CogIcon /> settings
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
