
import Image from "next/image";
import { Page1 } from "./view/Page1/page";
import { Page2 } from "./view/Page2/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Page1></Page1>
      <Page2></Page2>
    </main>
  );
}
