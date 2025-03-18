import { Box, Paper, Typography, Button } from "@mui/material";

const OutputBox = ({ result, input, conversionType }) => {
    const handleCopy = () => {
        if (result) {
            navigator.clipboard.writeText(result);
            alert("Copied to clipboard!");
        }
    };

    const handleDownload = () => {
        if (!result) return; // Don't proceed if there's no result

        // Format the content to be downloaded
        const fileContent = `
Output: ${result || "No output yet"}
        `;

        const element = document.createElement("a");
        const file = new Blob([fileContent], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "sequence_output.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element); // Clean up the DOM
    };

    return (
        <Paper
            elevation={3}
            sx={{
                padding: { xs: 1, sm: 2 },
                width: "100%",
                maxHeight: { xs: "40vh", sm: "50vh" },
                textAlign: "center",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    bgcolor: "var(--primary-color)",
                    padding: 1,
                    borderRadius: "8px",
                    color: "var(--secondary-color)",
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", sm: "1.2rem" }, // Adjust font size for mobile
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
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                }}
            >
                {result || "No output yet"}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    flexDirection: { xs: "column", sm: "row" },
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
                        width: { xs: "100%", sm: "150px" },
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
                        width: { xs: "100%", sm: "150px" },
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
