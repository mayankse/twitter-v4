/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:
  {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png',
      },
      {
        protocol: 'https',
        hostname: 'w7.pngwing.com',
        port: '',
        pathname: '/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
      }
    ]
    
  }
}

module.exports = nextConfig
