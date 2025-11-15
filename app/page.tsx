export default function Home() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Pattern />
      <div className="h-80 relative z-10 w-40 border bg-white border-neutral-200 shadow-2xl rounded-xl"> </div>
    </div>
  );
}







const Pattern = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 m-auto rounded-lg bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
  );
}
