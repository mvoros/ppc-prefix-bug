namespace de.company;

//Entity with localized text
entity BadLocExamples {
    key ID   : String(2);
        name : localized String(50)
}

//Entity without localized text
entity BadNonlocExamples {
    key ID   : String(2);
        name : String(50)
}