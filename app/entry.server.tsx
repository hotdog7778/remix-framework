/*
 * 서버에서 렌더링을 진행할 때 필요한 HTTP Response 를 생성하는 함수를 담은 진입점 파일
 * 현재 요청에 대한 Context 와 URL 을 <RemixServer> 에 넣고 현재 페이지에 대한 마크업을 렌더링 하도록 설계되었음
 * 그리고 선택적으로 요청에 대한 응답을 수정할 수 있는 `handleDataRequest` 라는 함수도 넣을 수 있도록 설계되었음
 */

import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
