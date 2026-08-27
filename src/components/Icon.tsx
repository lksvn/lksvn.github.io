type IconName = "squirrel" | "linkedin" | "github" | "instagram" | "email" | "resume" | "book-open" | "arrow-right" | "rat" | "file-coding" | "coffee" | "toolbox" | "external-link" | "images" | "corner-up" | "whatsapp" | "monitor-pause" | "graduation-cap" | "gamepad" | "sun-moon";

type IconProps = {
    className?: string,
    name: IconName
}

export function Icon({ className, name}: IconProps) {
    return (
        <svg className={`icon${className ? ' ' + className : ''}`} aria-hidden="true"><use href={`/icons.svg#${name}`} /></svg>
    );
}