import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "go.dev",
				pathname: "/blog/gopher/header.jpg",
			},
		], // Adicione o domínio aqui
	},

	/* Outras opções de configuração podem ser adicionadas aqui */
};

export default nextConfig;
