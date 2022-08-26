```bash
mto-webapp

│  App.vue
│  main.ts
│  shims-vue.d.ts
│  Template.vue
│
├─assets
│
├─ ...
│
└─views
    │  Layout.vue
    │
    ├─ ...
    │
    └─country
       │  Countries.vue
       │  Country.vue
       │  Currencies.vue
       │  Currency.vue
       │
       └─type
               index.ts
```

```bash

mto-core

──core
    └─v1
        │
        │
        ├─ ...
        │
        │
        └─country
           │  CountryController.java
           │  CountryMapper.java
           │  CountryRepository.java
           │  CountryService.java
           │  CurrencyMapper.java
           │
           ├─domain
           │      GetCountriesIn.java
           │      GetCountriesOut.java
           │      GetCurrenciesIn.java
           │      GetCurrenciesOut.java
           │
           └─entity
                   Country.java
                   Currency.java

```