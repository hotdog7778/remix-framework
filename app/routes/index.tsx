import type { LinksFunction } from "@remix-run/node";

import Stylesheet1 from "~/styles/test.css"; // '~' 표시는 app 폴더를 지칭한다.

export const links: LinksFunction = () => {
  return [
    // 파비콘을 추가하는 코드
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },

    // => <link rel="icon" href="/favicon.png" type="image/png"> 로 렌더링

    // 외부 스타일시트를 추가하는 코드
    {
      rel: "stylesheet",
      href: "https://example-css-six.vercel.app/example.css",
      crossOrigin: "true",
    },

    {
      // 프리패치
      rel: "prefetch",
      as: "image",
      href: "/img/cat.png",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Index</h1>
      <p>Some content</p>
      <input type="text" />
      안녕하세요
    </div>
  );
}
