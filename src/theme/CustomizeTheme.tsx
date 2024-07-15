
import Toolbar from '@mui/material/Toolbar';
import Tab from '@mui/material/Tab';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Typography from '@mui/material/Typography';
import { styled,alpha  } from '@mui/material/styles';
import { Button, Grid, AppBar} from "@mui/material";

export const StyledGrid = styled(Grid)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) { /* adjust the breakpoint value as needed */
    top: 60%;
  }
`;

export const appbarStyle = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'rgba(25, 118, 210, 0.7)',
    [theme.breakpoints.down('sm')]: {
        padding: '0.5rem',
        fontSize: '1rem',
    }

}));

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(5),
        width: 'auto',
    },
  }));



export const TitleRsponsive = styled(Grid)(({ theme }) => ({
    fontSize:"40px",

    [theme.breakpoints.down('sm')]: {
        fontSize:"20px",
    },
}));


export const GridLayout = styled(Grid)(({ theme }) => ({
    width: '100%',
    minHeight: '70vh', 

    [theme.breakpoints.down('sm')]: {
        width: '100%',
        minHeight: '100vh', 
        
    },
}));
export const ButtonResponsive = styled(Button)(({ theme }) => ({
    width: '180px',
    height: '180px',
    borderRadius: "10px", 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop:'10px',

    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '100px',

    },
}))

export const ImgResponsive = styled('img')(({ theme }) => ({
    width: '40%',
    height: '40%',
    marginTop: "20px",
    


    [theme.breakpoints.down('sm')]: {
        width: '30%',
        height: '30%',
    },
})) 
export const LogoImg = styled('img')(({ theme }) => ({
    width: '40px',
    height: '40px',
    [theme.breakpoints.down('sm')]: {
        width: '20px',
        height: '20px',
    },
})) 

export const Title = styled(Typography)(({ theme }) => ({
    fontFamily: 'monospace',
    fontWeight: 700,
    alignSelf: "center",
    color: "white",
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.6rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.25rem',
    },
}))

export const ToolStyle = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        minHeight: 35,
    },
    [theme.breakpoints.up('md')]: {
        minHeight: 54,
    },
})) 

export const TabStyle = styled(Tab)(({  }) => ({
    margin: 1,
    color: "white",
    display: "block",
    fontFamily: "hebrewFont",
    fontSize: 16,
    fontWeight: 700,
    transition: "transform 0.2s",
    "&:hover": {
        transform: "translateY(-4px)",
    },
})) 

export const IconMenuStyle = styled(MenuIcon)(({ theme }) => ({
    [theme.breakpoints.only('sm')]: {
        
        minHeight: 20,
        marginRight: 10,
    },


    [theme.breakpoints.up('md')]: {
        fontSize: 54,
    },
}))

export const IconCartStyle = styled(ShoppingCartIcon)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        fontSize : 20,
    },



    [theme.breakpoints.up('md')]: {
        fontSize : 30,
    },
})) 
