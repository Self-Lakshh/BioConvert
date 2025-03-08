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
