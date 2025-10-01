import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* suas outras opções aqui */
  
  eslint: {
    ignoreDuringBuilds: true, // Ignora warnings e erros de ESLint durante o build
  },
};

export default nextConfig;
