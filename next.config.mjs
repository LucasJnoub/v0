import nextPwa from 'next-pwa';

const withPWA = nextPwa({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

export default withPWA({
  // outras configurações do Next.js
});
