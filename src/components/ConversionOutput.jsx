import { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { motion } from "framer-motion";

const ConversionOutput = ({ result }) => {
    const [copied, setCopied] = useState(false);

    if (!result?.result) return null; // Hide if no result

    const handleCopy = () => {
        navigator.clipboard.writeText(result.result);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        const blob = new Blob(
            [
                `Input: ${result.input}\n` +
                `Detected Type: ${result.inputType}\n` +
                `Conversion: ${result.conversionType}\n` +
                `Result: ${result.result}`
            ],
            { type: "text/plain" }
        );

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "conversion_result.txt";
        link.click();
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
                p={3}
                sx={{ backgroundColor: "var(--primary-color)" }}
            >
                <Typography variant="h5" sx={{ color: "var(--secondary-color)" }}>
                    Conversion Result
                </Typography>

                <TextField
                    label="Converted Sequence"
                    value={result.result}
                    variant="outlined"
                    fullWidth
                    multiline
                    InputProps={{ readOnly: true, style: { color: "var(--text-color)" } }}
                    sx={{
                        "& .MuiInputLabel-root": { color: "var(--text-color)" },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "var(--text-color)" },
                            "&:hover fieldset": { borderColor: "var(--text-color)" },
                            "&.Mui-focused fieldset": { borderColor: "var(--text-color)" },
                        },
                    }}
                />

                <Box display="flex" gap={2}>
                    <Button
                        variant="contained"
                        onClick={handleCopy}
                        sx={{
                            minWidth: 100,
                            backgroundColor: "var(--secondary-color)",
                            color: "#ffffff"
                        }}
                    >
                        {copied ? "Copied!" : "Copy"}
                    </Button>

                    <Button
                        variant="contained"
                        onClick={handleDownload}
                        sx={{
                            minWidth: 100,
                            backgroundColor: "var(--secondary-color)",
                            color: "#ffffff"
                        }}
                    >
                        Download
                    </Button>
                </Box>
            </Box>
        </motion.div>
    );
};

export default ConversionOutput;
