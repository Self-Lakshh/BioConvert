export const detectInputType = (sequence) => {
    const dnaRegex = /^[ATCG]+$/i;
    const rnaRegex = /^[AUCG]+$/i;
    const proteinRegex = /^[ACDEFGHIKLMNPQRSTVWY-]+$/i;
    const cleanedSeq = sequence.replace(/-/g, "");
    if (dnaRegex.test(cleanedSeq)) return "DNA";
    if (rnaRegex.test(cleanedSeq)) return "RNA";
    if (proteinRegex.test(sequence)) return "Protein";
    return "Unknown";
};

export const dnaToRna = (dna) => dna.toUpperCase().replace(/T/g, "U");
export const rnaToDna = (rna) => rna.toUpperCase().replace(/U/g, "T");

const codonTable = {
    "UUU": "F", "UUC": "F", "UUA": "L", "UUG": "L",
    "UCU": "S", "UCC": "S", "UCA": "S", "UCG": "S",
    "UAU": "Y", "UAC": "Y", "UAA": "-", "UAG": "-",
    "UGU": "C", "UGC": "C", "UGA": "-", "UGG": "W",
    "CUU": "L", "CUC": "L", "CUA": "L", "CUG": "L",
    "CCU": "P", "CCC": "P", "CCA": "P", "CCG": "P",
    "CAU": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
    "CGU": "R", "CGC": "R", "CGA": "R", "CGG": "R",
    "AUU": "I", "AUC": "I", "AUA": "I", "AUG": "M",
    "ACU": "T", "ACC": "T", "ACA": "T", "ACG": "T",
    "AAU": "N", "AAC": "N", "AAA": "K", "AAG": "K",
    "AGU": "S", "AGC": "S", "AGA": "R", "AGG": "R",
    "GUU": "V", "GUC": "V", "GUA": "V", "GUG": "V",
    "GCU": "A", "GCC": "A", "GCA": "A", "GCG": "A",
    "GAU": "D", "GAC": "D", "GAA": "E", "GAG": "E",
    "GGU": "G", "GGC": "G", "GGA": "G", "GGG": "G"
};

export const rnaToProtein = (rna) => {
    let protein = "";
    const rnaUpper = rna.toUpperCase().replace(/[^ACGU]/g, "");
    for (let i = 0; i < rnaUpper.length; i += 3) {
        const codon = rnaUpper.substring(i, i + 3);
        protein += codonTable[codon] || "?";
    }
    return protein;
};

export const dnaToProtein = (dna) => rnaToProtein(dnaToRna(dna));
