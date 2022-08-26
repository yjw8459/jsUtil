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
    +addRow(): void
    +deleteRow(): void
    +validate(): void
    +confirm(): void
    +save(): void
    +delete(): void
    +showSavedMessage(): Promise<void>
}


Countries.vue --> Country.vue
@enduml


@enduml