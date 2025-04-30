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
        <h3 style={{backgroundColor:"orange",padding:10}}>Header</h3>
        {children}
      </body>
      <h3 style={{backgroundColor:"green",padding:10}}>Footer</h3>
    </html>
  );
}
