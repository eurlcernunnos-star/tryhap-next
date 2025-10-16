import './globals.css';

export const metadata = {
  title: 'HAP – Happy Action Points',
  description: 'Do useful actions, earn HAP.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{background:'#f8fafc',color:'#0f172a'}}>{children}</body>
    </html>
  );
}
