export default function RootLayout({ children }) {
  return (
    <>
      <header style={{backgroundColor:"orange",padding:10}}>Header (Marketing)</header>
        {children}
      <footer style={{backgroundColor:"green",padding:10}}>Footer (Marketing)</footer>
    </>   
  );
}
