[Макет проекта](https://www.figma.com/file/7XYjjppAZ95Ohc71xUSn5u/Pineapple?node-id=0%3A1&t=G6MMcIFyJkWsXjgc-0)

Шаблонизатор Hadlebars

Компиляция и рендер на клинете - "@anikin/parcel-transformer-handlebars-precompile

[Deploy](https://deploy--comforting-tartufo-7c50a9.netlify.app/)

Компиляция и рендер на клиенте
.parcelrc

{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.hbs": ["@anikin/parcel-transformer-handlebars-precompile"]
  }
}
