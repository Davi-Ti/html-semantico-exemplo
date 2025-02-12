import React from "react";

const Aside: React.FC = () => {
	return (
		<aside className="bg-white p-6 rounded-lg shadow-md flex-[2]">
			<h2 className="text-2xl text-blue-500 mb-4">
				Informações Adicionais
			</h2>
			<p className="text-gray-700 mb-4">
				Este é um espaço para informações complementares ou links
				relacionados ao conteúdo principal.
			</p>
			<ul className="space-y-2">
				<li>
					<a
						href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
						target="_blank"
						className="text-blue-500 hover:text-blue-600 transition-colors"
					>
						Link útil 1
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
						target="_blank"
						className="text-blue-500 hover:text-blue-600 transition-colors"
					>
						Link útil 2
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
						target="_blank"
						className="text-blue-500 hover:text-blue-600 transition-colors"
					>
						Link útil 3
					</a>
				</li>
			</ul>
		</aside>
	);
};

export default Aside;
