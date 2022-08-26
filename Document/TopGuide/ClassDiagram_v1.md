@startuml

@startuml PERT
left to right direction
' Horizontal lines: -->, <--, <-->
' Vertical lines: ->, <-, <->
title Country, Currency

object App.vue {
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
    +addRow(): void
    +deleteRow(): void
    +validate(): void
    +confirm(): void
    +save(): void
    +delete(): void
    +showSavedMessage(): Promise<void>
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
    +addRow(): void
    +deleteRow(): void
    +validate(): void
    +confirm(): void
    +save(): void
    +delete(): void
    +showSavedMessage(): Promise<void>
}

object code.service.ts {
    <<code>>
    +get(databaseName: DatabaseName, groupCode: string): Option[]
    +getCountry(databaseName: DatabaseName): Option[]
}

object Code {
    groupCode: string
    code: string
    prentGroupCode: string
    koreanCodeName: string
    englishCodeName: string
    codeDescription: string
    sortOrder: number
    useYn: string
}

object Option {
    name: string
    value: string
    type?: string
    checked?: boolean
}
App.vue --> Currencies.vue : Label 1
App.vue --> Countries.vue : Label 2
Currencies.vue --> Currency.vue
Countries.vue --> Country.vue
code.service.ts --> Code
code.service.ts --> Option
@enduml


@enduml