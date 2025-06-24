import Footer from "@/components/Footer";

export const metadata = {
  title: "Manish | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
