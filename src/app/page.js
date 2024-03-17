import CategorySection from "@/components/CategorySection";
import Setting from "@/components/Setting";


export default function Home() {
  return (
    <main className="flex gap-7 justify-between pt-5">
      <div className="w-[23%] rounded-lg bg-white overflow-hidden">
      <CategorySection></CategorySection>
      </div>
      <div className="flex-1">
        <h1 className="text-green-600 text-3xl font-semibold text-center mt-44">Select a category</h1>
      </div>
      <div className="w-1/6 rounded-3xl bg-white shadow-md overflow-hidden">
      <Setting></Setting>
      </div>

    </main>
  );
}
