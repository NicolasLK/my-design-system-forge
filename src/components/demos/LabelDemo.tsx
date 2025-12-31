import { Checkbox } from '../ui/form-controls/checkbox';
import { Label } from '../ui/foundations/label';

export const LabelDemo = () => {
    return (
        <>
            <div className="u-flex u-flex-col u-gap-4">
                {/* Checkbox + Label */}
                <div className="u-flex u-items-center u-gap-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
            </div>
        </>
    );
};
