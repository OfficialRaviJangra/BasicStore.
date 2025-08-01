
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/category/Categories";
import CustomerReview from "./components/reviews/CustomerReview";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <CustomerReview />
    </main>
  );
}
