import Navbar from '../component/Navbar/Navbar';
import Hero from '../component/Hero/Hero';
import Categories from '../component/Categories/Category';
import FeaturedPosts from '../component/FeaturedPost/FeaturedPost';
import BetterExperience from '../component/BetterExperience/BetterExperience';
import Testimonial from '../component/Testimonial/Testimonial';
import Newsletter from '../component/NewsLetter/NewsLetter';
import Footer from '../component/Footer/Footer';
import '../index.css';


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedPosts />
            <Newsletter />
            <Categories />
            <Testimonial />
            <BetterExperience />
            <Footer />
        </>
    )
}

export default Home;