let CreationTableauLangages = () => {
    const langages = ['Html', 'CSS', 'Java', 'PHP'];
    return langages;
}

let CreationTableauNombres = () => {
    const nombres = [];
    for (let i = 0; i <= 5; i++) {
        nombres.push(i);
    }
    return nombres;
}

let RemplacementElement = (langages) => {
    langages[langages.indexOf('Java')] = 'Javascript';
    return langages;
}

let AjoutElementLangages = (langages) => {
    langages.push('Ruby');
    langages.push('Python');
    return langages;
}

let AjoutElementNombres = (nombres) => {
    nombres.push(-1);
    nombres.push(-2);
    return nombres.sort((a, b) => a - b);
}

let SuppressionPremierElement = (langages) => {
    const x = langages;
    x.shift();
    return x;
}

let SuppressionDernierElement = (langages) => {
    const x = langages;
    x.pop()
    return x;
}

let ConversionChaineTableau = (reseaux_sociaux_chaine) => {
    return reseaux_sociaux_chaine.split(',');
}

let ConversionTableauChaine = (langages) => {
    return langages.join(',');
}

let TriTableau = (reseaux_sociaux) => {
    return reseaux_sociaux.sort();
}

let InversionTableau = (reseaux_sociaux) => {
    return reseaux_sociaux.reverse();
}
