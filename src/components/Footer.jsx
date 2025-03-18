import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "var(--primary-color)",
                color: "var(--secondary-color)",
                textAlign: "center",
                py: { xs: 1, sm: 2 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
                fontSize: { xs: "0.8rem", sm: "1rem" }, // Adjust font size for mobile
                zIndex: 1000, // Ensure it stays above other content
            }}
        >
            <Typography variant="h6">
                Made By - Lakshya Chopra (23CS002830) and Riya (23CS002792)
            </Typography>
        </Box>
    );
};

export default Footer;
