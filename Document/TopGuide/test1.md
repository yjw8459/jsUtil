@startuml
interface Country{
    countryCode: string
    koreanCountryName: string
    englishCountryName: string
    localCountryName: string
}

object Countries.vue {
    <<data>>
    -form: object
    -page: object
    -codes: object
    --
    <<setup>>
    -router: vue-router
    -store: vuex
    --
    <<methods>>
    +get(pageIndex, event): void
    +sort(clickedHeader): void
    +setKeyword(event): void
    +goPage(gridItem, target): void
}

object Country.vue {
    <<data>>
    -form: object
    -page: object
    -codes: object
    --
    <<setup>>
    -route: vue-router
    -router: vue-router
    -store: vuex
    --
    <<methods>>
    +getCountry(): void
    +setDefaultForm(): void
    +validate(): void
    +confirm(): void
    +save(): void
    +delete(): void
    +showSavedMessage(): Promise<void>
}

interface Currency{
    currencyCode: string
    countryCode: string
    englishCurrencyCode: string
    koreanCurrencyCode: string
    localCurrencyCode: string
    currencySign: string
    defaultCurrencyYn :string
}

object Currencies.vue {
    <<data>>
    -form: object
    -page: object
    -codes: object
    --
    <<setup>>
    -router: vue-router
    -store: vuex
    --
    <<methods>>
    +get(pageIndex, event): void
    +sort(clickedHeader): void
    +setKeyword(event): void
    +goPage(gridItem, target): void
}



object Currency.vue {
    <<data>>
    -form: object
    -page: object
    -codes: object
    --
    <<setup>>
    -route: vue-router
    -router: vue-router
    -store: vuex
    --
    <<methods>>
    +getCurrency(): void
    +setDefaultForm(): void
    +validate(): void
    +confirm(): void
    +save(): void
    +delete(): void
    +showSavedMessage(): Promise<void>
}
@enduml