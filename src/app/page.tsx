
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/category/Categories";
import CustomerReview from "./components/reviews/CustomerReview";
import Posts from "./components/Posts/Posts";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <CustomerReview />
      <Posts />
    </main>
  );
}
