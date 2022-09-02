@startuml

' hide the spot
hide circle

entity "T_CURRENCY" as e01{
    ...
    --
    PK CURRENCY_CODE
    PK COUNTRY_CODE <<FK>>
}

entity "T_CURRENCY_SIGN" as e02{  
    CURRENCY_SIGN
    --
    PK CURRENCY_CODE
}

e01 }o..| e02


@enduml