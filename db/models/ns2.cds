namespace company;

//Entity with localized text
entity LocExamples {
    key ID   : String(2);
        name : localized String(50)
}

//Entity without localized text
entity NonlocExamples {
    key ID   : String(2);
        name : String(50)
}