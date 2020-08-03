let CreationTableauLangages = () => {
    return ['Html', 'CSS', 'Java', 'PHP'];
}

let CreationTableauNombres = () => {
    return [0, 1, 2, 3, 4, 5];
}

let RemplacementElement = (langages) => {
    langages.splice(langages.indexOf('Java'), 1, 'Javascript');
    return langages;
}

let AjoutElementLangages = (langages) => {
    langages.push('Ruby');
    langages.push('Python');
    return langages;
}

let AjoutElementNombres = (nombres) => {
    nombres.unshift(-1);
    nombres.unshift(-2);
    return nombres;
}

let SuppressionPremierElement = (langages) => {
    langages.shift();
    return langages;
}

let SuppressionDernierElement = (langages) => {
    langages.pop()
    return langages;
}

let ConversionChaineTableau = (reseaux_sociaux_chaine) => {
    let reseaux_sociaux = reseaux_sociaux_chaine.split(',');
    return reseaux_sociaux;
}

let ConversionTableauChaine = (langages) => {
    let langages_chaine = langages.join();
    return langages_chaine;
}

let TriTableau = (reseaux_sociaux) => {
    return reseaux_sociaux.sort();
}

let InversionTableau = (reseaux_sociaux) => {
    return reseaux_sociaux.reverse();
}
