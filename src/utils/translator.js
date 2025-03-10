// Detect Input Type: DNA, RNA, or Protein
export const detectInputType = (sequence) => {
    const dnaRegex = /^[ATCG]+$/i; // DNA: A, T, C, G
    const rnaRegex = /^[AUCG]+$/i; // RNA: A, U, C, G
    const proteinRegex = /^[ACDEFGHIKLMNPQRSTVWY-]+$/i; // Protein: 20 amino acids + "-"

    const cleanedSeq = sequence.replace(/-/g, ""); // Remove dashes for DNA/RNA

    if (dnaRegex.test(cleanedSeq)) {
        return "DNA";
    } else if (rnaRegex.test(cleanedSeq)) {
        return "RNA";
    } else if (proteinRegex.test(sequence)) {
        return "Protein";
    } else {
        return "Unknown";
    }
};

// DNA → RNA
export const dnaToRna = (dna) => dna.toUpperCase().replace(/T/g, "U");

// RNA → DNA
export const rnaToDna = (rna) => rna.toUpperCase().replace(/U/g, "T");

// Codon Table for RNA → Protein
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

// RNA → Protein
export const rnaToProtein = (rna) => {
    let protein = "";
    const rnaUpper = rna.toUpperCase().replace(/[^ACGU]/g, ""); // Clean input

    for (let i = 0; i < rnaUpper.length; i += 3) {
        const codon = rnaUpper.substring(i, i + 3);
        protein += codonTable[codon] || "?";
    }

    return protein;
};

// DNA → Protein
export const dnaToProtein = (dna) => rnaToProtein(dnaToRna(dna));

// Reverse Translation: Protein → DNA
const aminoAcidToCodon = {
    "F": "TTT", "L": "TTA", "S": "TCT", "Y": "TAT", "C": "TGT",
    "W": "TGG", "P": "CCT", "H": "CAT", "Q": "CAA", "R": "CGT",
    "I": "ATT", "M": "ATG", "T": "ACT", "N": "AAT", "K": "AAA",
    "V": "GTT", "A": "GCT", "D": "GAT", "E": "GAA", "G": "GGT"
};

export const proteinToDna = (protein) => {
    let dna = "";
    const proteinUpper = protein.toUpperCase().replace(/[^A-Z-]/g, ""); // Strip non-relevant characters

    for (let i = 0; i < proteinUpper.length; i++) {
        const aminoAcid = proteinUpper[i];
        if (aminoAcid === "-") {
            dna += "TAA"; // Stop codon
        } else {
            dna += aminoAcidToCodon[aminoAcid] || "???";
        }
    }

    return dna;
};

// Reverse Translation: Protein → RNA
export const proteinToRna = (protein) => dnaToRna(proteinToDna(protein));
