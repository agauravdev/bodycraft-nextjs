// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Bodycraft Aqua & Fitness',
  description: 'Website is coming very soon.',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head />
    <body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', margin: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#E6F7F9', color: '#0B3D91' }}>
    {children}
    </body>
    </html>
  );
}
