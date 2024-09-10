export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-[1px] rounded p-6 min-w-[300xp] max-w-[400px] bg-white shadow-md hover:scale-[105%] hover:cursor-pointer transition-all ease-in-out duration-300">
        {children}
    </div>
  );
}