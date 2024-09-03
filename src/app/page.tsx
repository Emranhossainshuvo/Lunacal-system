import Empty from "@/components/Empty/Empty";
import TabWidget from "@/components/TabWidget/TabWidget";

export default function Home() {
  return (
    <main className="flex justify-between mt-10 items-center">
      <Empty />
      <TabWidget />
    </main>
  );
}
