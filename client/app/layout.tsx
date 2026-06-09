import "./globals.css";

export const metadata = {
  title: "Notes App",
  description: "Notes Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}