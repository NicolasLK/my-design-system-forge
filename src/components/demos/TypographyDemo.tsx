import { Typography } from '../ui/foundations/typography';

export const TypographyDemo = () => {
    return (
        <>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>

            <Typography variant="lead">
                Texto de destaque para introduções.
            </Typography>

            <Typography variant="p">Parágrafo padrão do sistema.</Typography>

            <Typography variant="muted">
                Texto auxiliar ou secundário.
            </Typography>

            <Typography variant="small">Texto pequeno</Typography>

            <Typography variant="code">const x = 10;</Typography>

            <Typography variant="blockquote">
                “Design Systems escalam consistência.”
            </Typography>
        </>
    );
};
