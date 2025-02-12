export default function Nav() {
	return (
		<nav className="bg-gray-700 text-white py-4 text-center shadow-md">
			<a
				href="#sobre"
				className="mx-4 font-semibold hover:text-purple-400 transition-colors"
			>
				Sobre
			</a>
			<a
				href="#servicos"
				className="mx-4 font-semibold hover:text-purple-400 transition-colors"
			>
				Serviços
			</a>
			<a
				href="#contato"
				className="mx-4 font-semibold hover:text-purple-400 transition-colors"
			>
				Contato
			</a>
			<a
				href="http://linkedin.com/in/davi-network/"
				target="_blank"
				className="mx-4 font-semibold hover:text-purple-400 transition-colors"
			>
				LinkedIn
			</a>
		</nav>
	);
}
