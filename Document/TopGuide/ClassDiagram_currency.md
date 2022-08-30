@startuml

@startuml PERT
left to right direction
' Horizontal lines: -->, <--, <-->
' Vertical lines: ->, <-, <->
title Currency


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

Currencies.vue --> Currency.vue
@enduml


@enduml