import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // width:"550px",
    maxWidth: "550px",
    minWidth:"350px",
    // margin: theme.spacing(4),
    margin: "0rem 0rem 0rem 0rem",
    background:"linear-gradient(to right, #aaa8a8, #696969, #424242) !important",
    border:"1px solid black",
   
  },
  headImg: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center"
  },
  media: {
    height: 0,
    width: "100%",
    paddingTop: '70%', // 16:9
    marginBottom:theme.spacing(2)
  },
  rowStyle:{
    display:"flex",
    justifyContent:"space-around",
    // marginTop: theme.spacing(5),
    marginRight: "0px !important" ,
    marginLeft: "0px !important",
  },
  headGoogle: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#616161",
  },
  typo: {
    fontWeight: "bold",
    fontSize: "16px",
    display:"flex",
    justifyContent:"center",
    marginBottom: theme.spacing(1)
  },
  headMap: {
    fontWeight: "bold",
    fontSize: "20px",
    display:"flex",
    fontWeight:"bolder",
    justifyContent:"center",
    padding:"0",
    margin: theme.spacing(1,1,0),
    borderRadius:"10px",
    background: "linear-gradient(to right, #347227, #ffffff, #ff0101)",
    color:"black",
    fontFamily: '"Titillium Web", sans-serif !important',
    "&:hover": {
      background: "linear-gradient(to left, #347227, #ffffff, #ff0101)",
      textDecoration:"none",
      
    }
  },
  email: {
    color: "black",
    fontWeight: "bolder",
    background: "linear-gradient(to right, #347227, #ffffff, #ff0101)",
    textDecoration:"none",
    borderRadius:"10px",
    "&:hover": {    
      background: "linear-gradient(to left, #347227, #ffffff, #ff0101)", 
      textDecoration:"none",
    }
  },
  googleMaps:{
    height:"100vh",
    width:"100%", 
    position:"fixed"
}

}));

export default useStyles;