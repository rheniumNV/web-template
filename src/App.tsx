import { css } from "@emotion/react";
import TestImage from "./images/test.png";

const appCss = css({
  fontSize: 30,
});

export function App() {
  return (
    <div css={appCss}>
      <p>Hello World!</p>
      <img src={TestImage} />
    </div>
  );
}
