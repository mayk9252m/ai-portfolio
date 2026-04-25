import "./globals.css";

export const metadata = {
  title: "AI/ML Portfolio of Mayank Shrivastava",
  description: "AI Engineer and Machine Learning Engineer Portfolio of Mayank Shrivastava",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-primary text-darkGray">
        {children}
        </body>
    </html>
  );
}