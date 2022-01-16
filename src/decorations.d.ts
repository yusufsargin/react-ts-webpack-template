declare module '*.png'
declare module '*.svg?react' {
  import React = require('react')
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}
declare module '*.svg'
declare module '*.ico'
