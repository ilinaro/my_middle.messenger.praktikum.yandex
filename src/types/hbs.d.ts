declare module '*.hbs' {
  import { TemplateDlegate } from 'handlebars'

  declare const template: TemplateDlegate

  export default template
}
declare module 'handlebars-layouts'
declare module 'handlebars/dist/handlebars.runtime'
