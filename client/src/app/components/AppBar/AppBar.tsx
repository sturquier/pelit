import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import {
	AppBar as MaterialAppBar,
	Avatar,
	Button,
	Box,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material';
import { Menu as MenuIcon, Savings } from '@mui/icons-material';

function AppBar(): JSX.Element {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>): void => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>): void => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = (): void => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = (): void => {
		setAnchorElUser(null);
	};

	return (
		<MaterialAppBar>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component={Link}
						to="/"
						sx={{
							display: { xs: 'none', md: 'flex' },
							mr: 2,
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						<Savings sx={{ mr: 1 }} />
						PELIT
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="menu"
							aria-controls="appBar-menu"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="appBar-menu"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							<MenuItem component={Link} to="/calendar">
								<Typography textAlign="center">Calendrier</Typography>
							</MenuItem>
							<MenuItem component={Link} to="/expenses">
								<Typography textAlign="center">Dépenses</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component={Link}
						to="/"
						sx={{
							display: { xs: 'flex', md: 'none' },
							mr: 2,
							flexGrow: 1,
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						<Savings sx={{ mr: 1 }} />
						PELIT
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Button
							href="/calendar"
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							Calendrier
						</Button>
						<Button
							href="/expenses"
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							Dépenses
						</Button>
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar />
						</IconButton>
						<Menu
							sx={{ mt: '45px' }}
							id="appBar-menu"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							<MenuItem component={Link} to="/profile">
								<Typography textAlign="center">Profil</Typography>
							</MenuItem>
							<MenuItem onClick={(): void => alert('TODO : logout')}>
								<Typography textAlign="center">Déconnexion</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</MaterialAppBar>
	);
}

export default AppBar;
