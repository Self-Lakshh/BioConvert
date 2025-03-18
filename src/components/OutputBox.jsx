import { Box, Paper, Typography, Button } from "@mui/material";

const OutputBox = ({ result, input, conversionType }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(result);
        alert("Copied to clipboard!");
    };

    const handleDownload = () => {
        // Format the content to be downloaded
        const fileContent = `
Input Sequence: ${input || "No input provided"}
Conversion Type: ${conversionType || "No conversion selected"}
Output: ${result || "No output yet"}
        `;

        const element = document.createElement("a");
        const file = new Blob([fileContent], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "sequence_output.txt";
        document.body.appendChild(element);
        element.click();
    };

    return (
        <Paper
            elevation={3}
            sx={{
                padding: { xs: 1, sm: 2 }, // Adjust padding for smaller devices
                width: "100%",
                maxHeight: "50vh", // Ensures the box has a minimum height on all devices
                textAlign: "center",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Box
                sx={{
                    bgcolor: "var(--primary-color)",
                    padding: 1,
                    borderRadius: "8px",
                    color: "var(--secondary-color)",
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", sm: "1.2rem" }, // Adjust font size for small screens
                }}
            >
                Output
            </Box>
            <Typography
                variant="body1"
                sx={{
                    bgcolor: "#f5f5f5",
                    padding: 2,
                    minHeight: "9rem",
                    borderRadius: "8px",
                    fontSize: { xs: "0.9rem", sm: "1rem" }, // Adjust font size for small screens
                    overflowWrap: "break-word", // Prevent overflow on smaller screens
                }}
            >
                {result || "No output yet"}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    flexDirection: { xs: "column", sm: "row" }, // Stack buttons on smaller screens
                    alignItems: "center",
                }}
            >
                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        bgcolor: "var(--primary-color)",
                        color: "white",
                        borderRadius: "8px",
                        padding: "6px 12px",
                        fontWeight: "bold",
                        fontSize: "0.85rem",
                        width: { xs: "100%", sm: "150px" }, // Full width on small screens, fixed width on larger screens
                        "&:hover": {
                            bgcolor: "var(--primary-color)",
                        },
                        "&:disabled": {
                            bgcolor: "var(--primary-color)",
                            color: "white",
                        },
                    }}
                    onClick={handleCopy}
                    disabled={!result}
                >
                    Copy
                </Button>
                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        bgcolor: "var(--primary-color)",
                        color: "white",
                        borderRadius: "8px",
                        padding: "6px 12px",
                        fontWeight: "bold",
                        fontSize: "0.85rem",
                        width: { xs: "100%", sm: "150px" }, // Full width on small screens, fixed width on larger screens
                        "&:hover": {
                            bgcolor: "var(--primary-color)",
                        },
                        "&:disabled": {
                            bgcolor: "var(--primary-color)",
                            color: "white",
                        },
                    }}
                    onClick={handleDownload}
                    disabled={!result}
                >
                    Download
                </Button>
            </Box>
        </Paper>
    );
};

export default OutputBox;
