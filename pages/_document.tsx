import { Html, Head, Main, NextScript } from 'next/document';
import { useEffect, useState } from 'react';

export default function Document() {
  const [background, setBackground] = useState(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 20 && hour > 5) {
      return 'bg-gradient-to-r from-cyan-500 to-blue-500';
    } else {
      return 'bg-gradient-to-r from-[#0A2342] to-[#283E51]';
    }
  });

  return (
    <Html lang="en">
      <Head />
      <body className={background}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
