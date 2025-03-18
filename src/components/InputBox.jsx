import { useState, useEffect } from "react";
import { Box, TextField, MenuItem, Button, Paper } from "@mui/material";
import { detectInputType, dnaToRna, dnaToProtein, rnaToDna, rnaToProtein, proteinToDna, proteinToRna } from "../utils/translator";

const conversionOptions = {
    DNA: [
        { value: "dnaToRna", label: "DNA → RNA" },
        { value: "dnaToProtein", label: "DNA → Protein" }
    ],
    RNA: [
        { value: "rnaToDna", label: "RNA → DNA" },
        { value: "rnaToProtein", label: "RNA → Protein" }
    ],
    Protein: [
        { value: "proteinToDna", label: "Protein → DNA" },
        { value: "proteinToRna", label: "Protein → RNA" }
    ]
};

const conversionFunctions = {
    dnaToRna,
    dnaToProtein,
    rnaToDna,
    rnaToProtein,
    proteinToDna,
    proteinToRna
};

const InputBox = ({ setResult }) => {
    const [input, setInput] = useState("");
    const [inputType, setInputType] = useState("Unknown");
    const [conversionType, setConversionType] = useState("");

    useEffect(() => {
        if (conversionOptions[inputType]) {
            setConversionType(conversionOptions[inputType][0].value);
        } else {
            setConversionType("");
        }
    }, [inputType]);

    const handleInputChange = (e) => {
        const value = e.target.value.toUpperCase();
        setInput(value);
        setInputType(detectInputType(value));
    };

    const handleConvert = () => {
        const conversionFunction = conversionFunctions[conversionType];
        setResult(conversionFunction ? conversionFunction(input) : "Invalid conversion");
    };

    return (
        <Paper elevation={3} sx={{ padding: 2, width: "100%", height: "50vh", textAlign: "center", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Box sx={{ bgcolor: "var(--primary-color)", padding: 1, borderRadius: "8px", color: "var(--secondary-color)", fontWeight: "bold", fontSize: "1.2rem" }}>
                Conversion Input
            </Box>

            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
                <TextField
                    label="Enter Sequence"
                    variant="outlined"
                    value={input}
                    onChange={handleInputChange}
                    sx={{
                        borderRadius: "8px",
                        fontSize: "1rem", // Increased font size
                        padding: "10px"  // Increase input padding
                    }}
                />
                <TextField
                    select
                    label="Convert To"
                    value={conversionType}
                    onChange={(e) => setConversionType(e.target.value)}
                    sx={{
                        borderRadius: "8px",
                        fontSize: "1rem", // Increased font size
                        padding: "10px"  // Increase input padding
                    }}
                    disabled={!conversionOptions[inputType]}
                >
                    {conversionOptions[inputType]?.map((option) => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                    ))}
                </TextField>
            </Box>

            <Button
                variant="contained"
                size="small" // Button size
                sx={{
                    bgcolor: "#9b84e5",
                    color: "white",
                    borderRadius: "8px",
                    padding: "6px 12px", // Smaller padding for button
                    fontWeight: "bold",
                    fontSize: "0.85rem", // Smaller font size for button
                    "&:hover": {
                        bgcolor: "var(--primary-color)"
                    },
                    "&:disabled": {
                        bgcolor: "var(--primary-color)",
                        color: "white"
                    }
                }}
                onClick={handleConvert}
                disabled={!conversionType}
            >
                Translate
            </Button>
        </Paper>
    );
};

export default InputBox;
