import Header from "./components/Header";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<Nav />
			<div className="container mx-auto px-4 py-8 flex-1 flex gap-8 max-w-8xl">
				<MainContent />
				<Aside />
			</div>
			<Footer />
		</>
	);
}
