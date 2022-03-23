import React from "react";

export class ShadowView extends React.Component {
  attachShadow = (host: HTMLDivElement) => {
    host.attachShadow({ mode: "open" });
  };
  render() {
    const { children } = this.props;
    return <div ref={this.attachShadow}>{children}</div>;
  }
}

export function App() {
  return (
    <ShadowView>
      <span>This is isolated</span>
    </ShadowView>
  );
}
