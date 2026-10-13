import "./globals.css";
import { Store } from "@/components/Store";
export const metadata = {
  title: {
    default: "Shree Krishna Bhakti Ashram | Vrindavan",
    template: "%s | Shree Krishna Bhakti Ashram",
  },
  description:
    "Discover spiritual activities, accommodation and devotion in Vrindavan. Booking enquiries only.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Store>{children}</Store>
      </body>
    </html>
  );
}
