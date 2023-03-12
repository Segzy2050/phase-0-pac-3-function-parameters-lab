function introduction(name) {
    const String = `Hi, my name is ${name}.`;
    return String;
}

function introductionWithLanguage(name, language) {
    const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return phrase;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return phrase;
}

