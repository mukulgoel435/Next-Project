export default function RootLayout({ children }) {
  return (
    <>
      <header style={{backgroundColor:"orange",padding:10}}>Header (Application)</header>
        {children}
      <footer style={{backgroundColor:"green",padding:10}}>Footer (Application)</footer>
    </>   
  );
}
