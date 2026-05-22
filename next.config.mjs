/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't advertise the framework.
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tpncpfatthgssttzrchu.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async headers() {
    // Safe on every route — no behavioural impact, real hardening.
    const base = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "X-DNS-Prefetch-Control", value: "on" },
    ];
    return [
      {
        // Whole site EXCEPT /embed — block framing (clickjacking) via the
        // modern `frame-ancestors` directive (X-Frame-Options would be a
        // blunter, less flexible equivalent).
        source: "/((?!embed).*)",
        headers: [
          ...base,
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
        ],
      },
      {
        // /embed/* is an embeddable poll widget — it MUST be framable anywhere.
        source: "/embed/:path*",
        headers: [
          ...base,
          { key: "Content-Security-Policy", value: "frame-ancestors *" },
        ],
      },
    ];
  },
};
export default nextConfig;
