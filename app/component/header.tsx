
export type HeaderProps = {
  heading: string
  discription : string
  className?: string
}

export const Header = ({ heading, discription, className }: HeaderProps) => (
  <div>
    <h1
      className={`text-4xl font-bold tracking-tighter text-neutral-700 ${className}`}
    >
      {heading}
    </h1>
    <p className="mt-4 max-w-xl text-base  text-neutral-500">
      {discription}
    </p>
  </div>
);
