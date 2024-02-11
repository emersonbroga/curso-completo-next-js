export const Navbar = () => {
  return (
    <nav className="flex h-screen flex-col gap-4 bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 w-72 p-2">
      <div>
        <img
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"
          alt="Logo EmersonBrogaDev"
          className="max-w-full p-2"
        />
      </div>
      <ul className="flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">Home</li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">Games</li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">Top 10</li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">Walkthroughs</li>
      </ul>
      <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">User</li>
      </ul>
    </nav>
  );
};
