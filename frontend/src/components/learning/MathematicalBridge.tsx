import type { ReactNode } from "react";
import type { MathematicalBridgeContent } from "../../types/learning";

type MathematicalBridgeProps = {
  content: MathematicalBridgeContent;
  children?: ReactNode;
};

export function MathematicalBridge({ content, children }: MathematicalBridgeProps) {
  return (
    <div className="bridge-content">
      <p className="depth-intro">{content.intro}</p>

      <ol className="bridge-steps">
        {content.steps.map((step, index) => (
          <li key={index} className="bridge-step">
            <p className="bridge-step-statement">{step.statement}</p>
            {step.equation && <code className="bridge-step-equation">{step.equation}</code>}
          </li>
        ))}
      </ol>

      <div className="bridge-result">
        {content.result.label && <p className="equation-block-label">{content.result.label}</p>}
        <code className="equation-block-expression">{content.result.expression}</code>
        {content.result.note && <p className="equation-block-note">{content.result.note}</p>}
      </div>

      {children}
    </div>
  );
}
