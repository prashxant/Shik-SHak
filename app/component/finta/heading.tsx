


type HeadingProps = {
  headingBlack: string
  headingBlue: string
  subheading: string
}





export const FintaHeading = ({headingBlack,headingBlue ,subheading}: HeadingProps) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-4xl font-medium  text-neutral-800">
        {headingBlack}{"  "}
        <span className="text-[#2579F4]">{headingBlue}</span>
      </h1>
      <p className="mt-2 text-sm font-medium tracking-tight text-neutral-800">
      {subheading}
      </p>
    </div>
  );
}
