import { Icon } from "./Icon";

type BackToTopProps = {
    label?: string;
}

export function BackToTop({ label }: BackToTopProps) {
    return(
        <a href="#top" aria-label={label ? label : 'Back to top'}><Icon name="corner-up"/></a>
    );
}