// app/page.tsx
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Image src="/favicon.svg" alt="Bodycraft Aqua & Fitness Logo" width={150} height={150} />
        <h1 style={{ margin: '20px 0', color: '#0B3D91' }}>Website is coming very soon.</h1>
      </div>
      <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: '#0B3D91' }}>
        <p style={{ margin: 0 }}>Sunil Agarwal</p>
        <p style={{ margin: 0 }}>
          Phone: <a href="tel:+919821879350">+919821879350</a>
        </p>
      </div>
    </>
  );
};
