

// import '../app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//     <body className={`${inter.className} antialiased`}>{children}</body>
//     </html>
//   );
// }

import '../app/ui/global.css';
import AcmeLogo from './ui/acme-logo';
import { inter } from '../app/ui/fonts';
 import {lusitana } from '../app/ui/fonts'
 import Link from 'next/link'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

// export default function Page() {
//   return (
//     // ...
//     <p
//       className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
//     >
//       <strong>Welcome to Acme.</strong> This is the example for the{' '}
//       <a href="https://nextjs.org/learn/" className="text-blue-500">
//         Next.js Learn Course
//       </a>
//       , brought to you by Vercel.
//     </p>
//     // ...
//   );
// }

// export default function Page() {
//   return (
//     <main className="flex min-h-screen flex-col p-6">
//       <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
//         <AcmeLogo />
//         {/* ... */}
//       </div>
//     </main>
//   );
// }