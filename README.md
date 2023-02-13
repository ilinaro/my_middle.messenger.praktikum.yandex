# medium-parcel


Теория шаблонизатора __Hadlebars__

1. Компиляция и рендер на этапе сборки - ```@anikin/parcel-transformer-handlebars```
2. Компиляция и рендер на клинете - ```"@anikin/parcel-transformer-handlebars-precompile```
3. Компиляция на этапе сборки, рендер на клинете;



### 1. Компиляция и рендер на этапе сборки
 
```.parcelrc```
```
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.hbs": ["@anikin/parcel-transformer-handlebars"]
  }
}

```

### 2. Компиляция и рендер на клиете

```.parcelrc```
```.parcelrc
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.hbs": ["@anikin/parcel-transformer-handlebars-precompile"]
  }
}

```

Здесь не используется imort Hadlebars/ все работает из dist во время отображения

```index.js```
```js
import template from './template.hbs'

function render(html) {
  const root = document.querySelector('#root')
  root.innerHTML = html
}

window.addEventListener('DOMContentLoaded', () => {
  const context = { name: { first: 'Leon', last: 'Cooper22' } } 

  const html = template(context)

  render(html)
})

```

шаблон ```template.hbs```
```hbs
<div>Hello, my name {{name.first}} {{name.last}}</div>
```



### 3. Компиляция на этапе сборки, рендер на клиенте


В простом варианте, передавать шаблон (3) ```index.js```
```js

import Handlebars from 'handlebars'
import template from './template'

function render(html) {
  const root = document.querySelector('#root')
  root.innerHTML = html
}

window.addEventListener('DOMContentLoaded', () => {
  const delegate = Handlebars.compile(template)

  const context = { name: { first: 'Leon', last: 'Cooper' } }

  const html = delegate(context)

  render(html)

  //   setTimeout(()=> {
  //     render(delegate({name:  { first: 'firstname', last: 'lastname' }}))
  //   }, 2000)
})
```

Шаблон ```template.js```
```js
const city = 'City 17'
const className = ''

// language=hbs

export default `
        <div class="${className}">
            <div>Hello, my name {{name.first}} {{name.last}}! </div>
            <div>From ${city}*</div>
        </div>
`

```