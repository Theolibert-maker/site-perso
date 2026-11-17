export default function Page() {
  return (
    <>
      <h1 className="m-4 text-xl font-bold md:text-5xl">Hello world!</h1>
      <p className="m-4 rounded bg-blue-600 p-4 text-white hover:bg-blue-800">
        2 times 2 is {2 * 2}
      </p>
      <img src="/next.svg" alt="Next.js logo" className="m-4 w-40 dark:invert" />
    </>
  );
}