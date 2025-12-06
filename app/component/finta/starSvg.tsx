import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };

const StarIcon: React.FC<IconProps> = ({
  title = "Star icon",
  width = 20,
  height = 20,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path
      fill="#2679F3"
      d="M9.287 4.195c.224-.69 1.202-.69 1.426 0l.915 2.815a.75.75 0 0 0 .713.518h2.96c.726 0 1.028.93.44 1.357l-2.394 1.739a.75.75 0 0 0-.272.838l.914 2.815c.224.69-.566 1.265-1.154.838l-2.394-1.739a.75.75 0 0 0-.882 0l-2.394 1.74c-.588.426-1.378-.148-1.154-.84l.914-2.813a.75.75 0 0 0-.272-.839l-2.394-1.74c-.588-.426-.286-1.356.44-1.356h2.96a.75.75 0 0 0 .713-.518l.915-2.815Z"
    />
  </svg>
);

export default StarIcon;
