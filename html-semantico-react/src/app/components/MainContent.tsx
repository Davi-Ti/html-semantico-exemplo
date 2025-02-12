import Image from "next/image";

export default function MainContent() {
	return (
		<main className="flex-[5]">
			<section id="sobre" className="mb-8">
				<h2 className="text-3xl text-blue-500 mb-4">Sobre o site</h2>
				<article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
					<p className="text-gray-700">
						Este é um exemplo de site semântico, criado para
						demonstrar a utilização correta de tags HTML semânticas.
						Essas tags são essenciais para melhorar a
						acessibilidade, a organização do código e o SEO (Search
						Engine Optimization). Para explorar como a estrutura foi
						construída, clique com o botão direito do mouse em
						qualquer área do site e selecione a opção Exibir
						código-fonte da página ou Inspecionar no menu de
						contexto.
					</p>
					<figure className="my-4">
						<div className="relative w-full h-64 rounded-lg shadow-md overflow-hidden">
							<Image
								src="https://go.dev/blog/gopher/header.jpg"
								alt="Imagem de exemplo"
								layout="fill"
								objectFit="cover"
								className="rounded-lg"
							/>
						</div>
						<figcaption className="text-sm italic text-gray-600 mt-2">
							Uma imagem de exemplo com uma legenda.
						</figcaption>
					</figure>
				</article>
			</section>

			<section id="servicos" className="mb-8">
				<h2 className="text-3xl text-blue-500 mb-4">Nossos Serviços</h2>
				<article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-4">
					<h3 className="text-2xl text-gray-800 mb-2">
						Desenvolvimento Web
					</h3>
					<p className="text-gray-700">
						Oferecemos serviços de desenvolvimento web utilizando as
						melhores práticas de HTML semântico.
					</p>
				</article>
				<article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
					<h3 className="text-2xl text-gray-800 mb-2">
						Consultoria em SEO
					</h3>
					<p className="text-gray-700">
						Nossa equipe de especialistas em SEO pode ajudar seu
						site a alcançar melhores posições nos mecanismos de
						busca.
					</p>
				</article>
			</section>

			<section id="tabela" className="mb-8">
				<h2 className="text-3xl text-blue-500 mb-4">
					Tabela de Exemplo
				</h2>
				<article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
					<table className="w-full border-collapse">
						<thead>
							<tr className="bg-blue-500 text-white">
								<th className="p-3">Nome</th>
								<th className="p-3">Idade</th>
								<th className="p-3">Cidade</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-gray-200 hover:bg-gray-100">
								<td className="p-3">João Silva</td>
								<td className="p-3">25</td>
								<td className="p-3">São Paulo</td>
							</tr>
							<tr className="border-b border-gray-200 hover:bg-gray-100">
								<td className="p-3">Maria Oliveira</td>
								<td className="p-3">30</td>
								<td className="p-3">Rio de Janeiro</td>
							</tr>
							<tr className="hover:bg-gray-100">
								<td className="p-3">Carlos Souza</td>
								<td className="p-3">22</td>
								<td className="p-3">Belo Horizonte</td>
							</tr>
						</tbody>
					</table>
				</article>
			</section>

			<section id="contato" className="mb-8">
				<h2 className="text-3xl text-blue-500 mb-4">
					Formulário de Contato
				</h2>
				<article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
					<form action="#" method="post" className="space-y-4">
						<div className="flex flex-col">
							<label htmlFor="nome" className="font-semibold">
								Nome:
							</label>
							<input
								type="text"
								id="nome"
								name="nome"
								required
								className="p-2 border border-gray-300 rounded-lg"
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="email" className="font-semibold">
								E-mail:
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								className="p-2 border border-gray-300 rounded-lg"
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="mensagem" className="font-semibold">
								Mensagem:
							</label>
							<textarea
								id="mensagem"
								name="mensagem"
								rows={5}
								required
								className="p-2 border border-gray-300 rounded-lg"
							></textarea>
						</div>
						<button
							type="submit"
							className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
						>
							Enviar
						</button>
					</form>
				</article>
			</section>
		</main>
	);
}
