
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    return texte.replace('e', ' ');
}
let concatString = (texte1, texte2) => {
    return texte1.concat(texte2);
}
let afficherCar5 = (texte) => {
    return texte.charAt(4);
}
let afficher9Car = (texte) => {
    return texte.substring(0, 9);
}
let majusculeString = (texte) => {
    return texte.toLocaleUpperCase();
}
let minusculeString = (texte) => {
    return texte.toLocaleLowerCase();
}
let SupprEspaceString = (texte) => {
    return texte.trim();
}
let IsString = (texte) => {
    return typeof texte === 'string';
}

let AfficherExtensionString = (texte) => {
    return texte.split('.').pop();
}
let NombreEspaceString = (texte) => {
    return texte.split(' ').length - 1;
}
let InverseString = (texte) => {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance = (x, y) => {
    return Math.pow(x, y);
}
let valeurAbsolue = (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray = (array) => {
    return array.map(x => Math.abs(x));
}
let sufaceCercle = (rayon) => {
    return Math.round(Math.PI * Math.pow(rayon, 2));
}
let hypothenuse = (ab, ac) => {
    return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
}
let calculIMC = (poids, taille) => {
    return Number((poids / Math.pow(taille, 2)).toFixed(2));
}
