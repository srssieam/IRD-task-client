
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex gap-7 justify-between pt-5">
      <Link href="/duas/dua's-importance?cat=1">
        <button className="text-2xl font-semibold text-white px-5 py-3 rounded-lg bg-green-700">Click here to see All Duas</button>
      </Link>

    </main>
  );
}
