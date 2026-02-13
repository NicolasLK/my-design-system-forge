import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/form-controls/select/Select';
import { Divider } from '../ui/foundations/divider';

export const SelectDemo = () => {
    return (
        <div className="u-flex u-flex-col u-items-start u-gap-6" style={{ paddingBottom: '200px' }}>
            {/* Basic Usage */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Basic Usage:
                </span>
                <SelectRoot defaultValue="apple">
                    <SelectTrigger className="u-w-64">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                        <SelectItem value="grape">Grape</SelectItem>
                    </SelectContent>
                </SelectRoot>
            </div>

            <Divider spacing="small" />

             {/* Sizes */}
             <div className="u-flex u-flex-col u-gap-4 u-w-full">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Sizes:
                </span>
                <div className="u-flex u-items-start u-gap-4">
                    {/* Small */}
                    <div className="u-flex u-flex-col u-gap-1">
                         <span className="u-text-xs u-text-gray">Small</span>
                        <SelectRoot selectSize="sm">
                            <SelectTrigger className="u-w-40">
                                <SelectValue placeholder="Small Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sm1">Option 1</SelectItem>
                                <SelectItem value="sm2">Option 2</SelectItem>
                            </SelectContent>
                        </SelectRoot>
                    </div>

                    {/* Medium (Default) */}
                    <div className="u-flex u-flex-col u-gap-1">
                         <span className="u-text-xs u-text-gray">Medium</span>
                        <SelectRoot selectSize="md">
                            <SelectTrigger className="u-w-40">
                                <SelectValue placeholder="Medium Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="md1">Option 1</SelectItem>
                                <SelectItem value="md2">Option 2</SelectItem>
                            </SelectContent>
                        </SelectRoot>
                    </div>

                    {/* Large */}
                    <div className="u-flex u-flex-col u-gap-1">
                         <span className="u-text-xs u-text-gray">Large</span>
                        <SelectRoot selectSize="lg">
                            <SelectTrigger className="u-w-40">
                                <SelectValue placeholder="Large Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="lg1">Option 1</SelectItem>
                                <SelectItem value="lg2">Option 2</SelectItem>
                            </SelectContent>
                        </SelectRoot>
                    </div>
                </div>
            </div>

            <Divider spacing="small" />

            {/* With Placeholder */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    With Placeholder:
                </span>
                <SelectRoot>
                    <SelectTrigger className="u-w-64">
                        <SelectValue placeholder="Choose a framework..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="react">React</SelectItem>
                        <SelectItem value="vue">Vue</SelectItem>
                        <SelectItem value="angular">Angular</SelectItem>
                        <SelectItem value="svelte">Svelte</SelectItem>
                    </SelectContent>
                </SelectRoot>
            </div>

            <Divider spacing="small" />

            {/* Disabled State */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Disabled State:
                </span>
                <div className="u-flex u-gap-4">
                    <SelectRoot disabled>
                        <SelectTrigger className="u-w-48">
                            <SelectValue placeholder="Disabled Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">Option 1</SelectItem>
                        </SelectContent>
                    </SelectRoot>

                    <SelectRoot>
                        <SelectTrigger className="u-w-48">
                            <SelectValue placeholder="Disabled Options" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="enabled">Enabled Option</SelectItem>
                            <SelectItem value="disabled" disabled>
                                Disabled Option
                            </SelectItem>
                        </SelectContent>
                    </SelectRoot>
                </div>
            </div>

            <Divider spacing="small" />

            {/* Grouped Options */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Grouped Options:
                </span>
                <SelectRoot>
                    <SelectTrigger className="u-w-64">
                        <SelectValue placeholder="Select a timezone" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectLabel>North America</SelectLabel>
                        <SelectItem value="est">Eastern Standard Time</SelectItem>
                        <SelectItem value="cst">Central Standard Time</SelectItem>
                        <SelectItem value="pst">Pacific Standard Time</SelectItem>
                        
                        <div className="u-h-px u-bg-gray-200 u-my-1" /> {/* Divider visual */}
                        
                        <SelectLabel>Europe</SelectLabel>
                        <SelectItem value="gmt">Greenwich Mean Time</SelectItem>
                        <SelectItem value="cet">Central European Time</SelectItem>
                        <SelectItem value="eet">Eastern European Time</SelectItem>
                    </SelectContent>
                </SelectRoot>
            </div>

            <Divider spacing="small" />

            {/* Error State */}
            <div className="u-flex u-flex-col u-gap-2">
                <span className="u-text-sm u-text-gray u-text-transform-capitalize">
                    Error State:
                </span>
                <SelectRoot error>
                    <SelectTrigger className="u-w-64">
                        <SelectValue placeholder="Invalid selection" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">Option 1</SelectItem>
                        <SelectItem value="2">Option 2</SelectItem>
                    </SelectContent>
                </SelectRoot>
                <span className="u-text-xs u-text-red-500">
                    Please select a valid option.
                </span>
            </div>
        </div>
    );
};
