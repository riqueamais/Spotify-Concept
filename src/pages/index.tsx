import Head from "next/head";
import { AlertTriangle } from "lucide-react";
import { Footer } from "@/components/commons/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify | Concept</title>
        <meta name="description" content="Spotify | Clone" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="flex flex-grow justify-center items-center">
          <AlertTriangle size={100} />
        </main>
        <Footer />
      </div>
    </>
  );
}
