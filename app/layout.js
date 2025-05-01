export const metadata = {
  title: {
    default: 'Technical Agency',
    template: '%s | Technical Agency',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        {children}
      </body>
    </html>
  );
}
