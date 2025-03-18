import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: "var(--primary-color)" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box
                    component="img"
                    src="https://cdn.discordapp.com/attachments/1203219990203858955/1351688943279804538/bioconvertlogo.jpg?ex=67db49ed&is=67d9f86d&hm=7062198470e9ab2f811ce4299af0151d336277201818d8c1dc9a29abbd1d0063&"
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
