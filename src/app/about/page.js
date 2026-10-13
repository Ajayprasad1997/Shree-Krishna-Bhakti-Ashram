import Shell from "@/components/Shell";
import Inner from "@/components/Inner";
export const metadata = { title: "About the Ashram" };
export default function Page() {
  return (
    <Shell>
      <Inner type="about" />
    </Shell>
  );
}
