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
                py: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
                "@media (max-width: 600px)": {
                    fontSize: "0.8rem", // Make text smaller on smaller screens
                },
                "@media (min-width: 600px) and (max-width: 1200px)": {
                    fontSize: "1rem", // Adjust font size for medium-sized screens
                },
            }}
        >
            <Typography variant="body2">
                Built with ❤️ By Lakshya Chopra (23CS002830) and Riya (23CS002792)
            </Typography>
        </Box>
    );
};

export default Footer;
