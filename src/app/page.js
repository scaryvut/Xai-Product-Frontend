import DashboardPreview from "@/Component/DashboardPreview";
import Hero from "@/Component/Hero";
import InsightFlow from "@/Component/InsightFlow";
import SignatureInteraction from "@/Component/signature/SignatureInteraction";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Hero></Hero>
        <InsightFlow></InsightFlow>
        <DashboardPreview></DashboardPreview>
        <SignatureInteraction></SignatureInteraction>
    </div>
  );
}
