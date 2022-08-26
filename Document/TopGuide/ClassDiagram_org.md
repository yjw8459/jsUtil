@startuml

scale 3
title My first Diagram

A -> B : Hello
B -> C : Good Morning
C --> A : Bye Bye

class Event {
    +startTime: DateTime
    +venue: string
    +registrationClosed: boolean
    -notifyAttendes()
}

class ApplicationUser {
    -userName: string
    -password: string
    +isLocked: boolean
    -suggestRandomPasswod()
    +changeProfilePic()
}

class Speaker {
    +openForSpeaking: boolean
    -callForAction()
    +applyAsSpokePerson()
}

class Topic {
    +title: string
    +sourceCodeUrl: string
    +downloadMaterials()
}

class Attendee {
    -eventAttended: number
    -suggestEventBasedOnPreference()
    +registerForTicket()
}

ApplicationUser <|-- Speaker
ApplicationUser <|-- Attendee
Speaker "1" *-- "*" Topic
Event "1" o-- "*" Speaker
Event "1" o-- "*" Attendee


@enduml