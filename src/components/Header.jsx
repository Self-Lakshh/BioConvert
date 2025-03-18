import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: "var(--primary-color)" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box
                    component="img"
                    src="src\assets\bioconvertlogo.jpg"
                    alt="Logo"
                    sx={{ height: { xs: "1.5rem", sm: "2rem" }, marginRight: "0.5rem" }}
                />
                <Typography
                    variant="h5"
                    sx={{
                        flexGrow: 1,
                        color: "var(--secondary-color)",
                        fontWeight: "bold",
                        fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Adjust font size on smaller screens
                    }}
                >
                    BioConvert
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
