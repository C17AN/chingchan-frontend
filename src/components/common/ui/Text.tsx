import React, { HTMLAttributes, PropsWithChildren } from "react";
import { SwitchCase } from "@toss/react";
import { css } from "@emotion/react";
import colors from "material-colors";

interface Props extends HTMLAttributes<HTMLDivElement> {
  typography?: "h1" | "h2" | "h3" | "p" | "small";
  color?: string;
}

const baseTextStyle = css`
  color: ${colors.grey[900]};
`;

const h1Style = css`
  ${baseTextStyle}
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 700;
`;

const h2Style = css`
  ${baseTextStyle}
  font-size: 1.375rem;
  line-height: 1.4;
  font-weight: 600;
`;

const h3Style = css`
  ${baseTextStyle}
  font-size: 1.25rem;
  line-height: 1.3;
  font-weight: 600;
`;

const pStyle = css`
  ${baseTextStyle}
  font-size: 0.875rem;
  line-height: 1.2;
  font-weight: 500;
`;

const smallStyle = css`
  ${baseTextStyle}
  font-size: 0.875rem;
  line-height: 1.2;
  font-weight: 500;
`;

const Text = ({
  typography = "p",
  color,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <SwitchCase
      value={typography}
      caseBy={{
        h1: (
          <h1 css={h1Style} style={{ color }} {...props}>
            {children}
          </h1>
        ),
        h2: (
          <h2 css={h2Style} style={{ color }} {...props}>
            {children}
          </h2>
        ),
        h3: (
          <h3 css={h3Style} style={{ color }} {...props}>
            {children}
          </h3>
        ),
        p: (
          <p css={pStyle} style={{ color }} {...props}>
            {children}
          </p>
        ),
        small: (
          <p css={smallStyle} style={{ color }} {...props}>
            {children}
          </p>
        ),
      }}
    />
  );
};

export default Text;
