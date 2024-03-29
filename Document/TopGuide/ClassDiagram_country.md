@startuml

@startuml PERT
left to right direction
' Horizontal lines: -->, <--, <-->
' Vertical lines: ->, <-, <->
title Country

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

object http.ts{
    +get(params: HttpParam): Promise<AxiosResponse>
    +post(params: HttpParam): Promise<AxiosResponse>
    +delete(params: HttpParam): Promise<AxiosResponse>
}

object type.ts{
    Country: Country
    Currency: Currency
}

object Country{
    countryCode: string
    koreanCountryName: string
    englishCountryName: string
    localCountryName: string
}

object Currency{
    currencyCode: string
    countryCode: string
    englishCurrencyCode: string
    koreanCurrencyCode: string
    localCurrencyCode: string
    currencySign: string
    defaultCurrencyYn :string
}


@enduml