
import "./globals.css";

export const metadata = {
  title: "BhajiWala Delivery Partner",
  description: "BhajiWala Delivery Partner Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
