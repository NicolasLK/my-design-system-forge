import { useAccordion } from '@/models/hooks/useAccordion';
import { Accordion } from '../ui/advanced/accordion';

export const AccordionDemo = () => {
    const { isOpen, toggle } = useAccordion(['item-1']);

    return (
        <>
            <Accordion.Root>
                {/* ITEM 1 */}
                <Accordion.Item value="item-1" open={isOpen('item-1')}>
                    <Accordion.Trigger
                        open={isOpen('item-1')}
                        onToggle={() => toggle('item-1')}
                    >
                        Geral
                    </Accordion.Trigger>

                    <Accordion.Content open={isOpen('item-1')}>
                        Conteúdo da aba geral controlado via hook.
                    </Accordion.Content>
                </Accordion.Item>

                {/* ITEM 2 */}
                <Accordion.Item value="item-2" open={isOpen('item-2')}>
                    <Accordion.Trigger
                        open={isOpen('item-2')}
                        onToggle={() => toggle('item-2')}
                    >
                        Configurações
                    </Accordion.Trigger>

                    <Accordion.Content open={isOpen('item-2')}>
                        Configurações técnicas controladas via hook.
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        </>
    );
};
