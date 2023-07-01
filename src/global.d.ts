declare module '*.module.scss' {
    const classes: { [key: string]: string }
    export default classes
}

declare module 'TicTacToeApp/TicTacToe' {
    const TicTacToe: React.FC
    export default TicTacToe
}

declare module 'HoverBoardApp/HoverBoard' {
    const HoverBoard: React.FC
    export default HoverBoard
}

declare module "*.svg" {
    import * as React from "react";
  
    const ReactComponent: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & { title?: string }
    >;
  
    export default ReactComponent;
  }