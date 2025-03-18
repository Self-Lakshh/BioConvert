import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: "var(--primary-color)" }}>
            <Toolbar>
                <Box
                    component="img"
                    src="/logo.png" // Replace with your actual logo path
                    alt="Logo"
                    sx={{ height: "2rem", marginRight: "0.5rem" }}
                />
                <Typography variant="h6" sx={{ flexGrow: 1, color: "var(--secondary-color)" }}>
                    Protein DNA RNA Translator App
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
