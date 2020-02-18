const Drawer = (
    <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
            <ListItem button>
                <ListItemIcon className={classes.icon}>
                    <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
                <ListItemIcon className={classes.icon}>
                    <BarChart />
                </ListItemIcon>
                <ListItemText primary="Portfolio" />
            </ListItem>
            <ListItem button>
                <ListItemIcon className={classes.icon}>
                    <AddCircleOutline />
                </ListItemIcon>
                <ListItemText primary="Create a Goal" />
            </ListItem>
            <ListItem button>
                <ListItemIcon className={classes.icon}>
                    <RoomService />
                </ListItemIcon>
                <ListItemText primary="Help" />
            </ListItem>
            <ListItem button>
                <ListItemIcon className={classes.icon}>
                    <Portrait />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
        </List>
        <Divider />
        <List>
            {['Bank', 'Log out'].map((link, index) => (
            <ListItem button key={index}>
                <ListItemIcon className={classes.icon}>
                {index % 2 === 0 ? <Business /> : <ExitToApp />}
                </ListItemIcon>
                <ListItemText primary={link} />
            </ListItem>
            ))}
        </List>
    </div>
);

export default Drawer