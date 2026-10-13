import Shell from "@/components/Shell";
import Inner from "@/components/Inner";
export const metadata = { title: "Photo Gallery" };
export default function Page() {
  return (
    <Shell>
      <Inner type="gallery" />
    </Shell>
  );
}
