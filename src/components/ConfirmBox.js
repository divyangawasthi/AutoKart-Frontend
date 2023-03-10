import {
  Button,
  Dialog,
  DialogContent,
  Fade,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

function ConfirmBox({ open, closeDialog, title, yesFunction, message, imgUrl }) {
  return (
    <Dialog
      fullWidth
      open={open}
      maxWidth="sm"
      scroll="body"
      onClose={closeDialog}
      onBackdropClick={closeDialog}
      TransitionComponent={Transition}
    >
      <DialogContent sx={{ px: 8, py: 3, position: "relative" }}>
        <IconButton
          size="medium"
          onClick={closeDialog}
          sx={{ position: "absolute", right: "1rem", top: "1rem" }}
        >
          X
        </IconButton>

        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Box
              sx={{
                mb: 3,
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <img src={imgUrl} width={"300px"} style={{marginLeft:"80px"}}/>
              <div style={{display:"flex"}}>
                <div>
              <Typography variant="h3">{title}</Typography>

              <Typography
                variant="h3"
                style={{ fontSize: "20px", marginTop: "10px" }}
              >
                {message}
              </Typography>
              </div>
              <div style={{marginLeft:"100px", marginTop:"10px"}}>
              <Button
              onClick={closeDialog}
              size="medium"
              variant="contained"
              color="primary"
              style={{ fontSize: "15px", marginRight:"20px"}}
            >
              No
            </Button>
            <Button
              onClick={yesFunction}
              size="medium"
              variant="contained"
              color="error"
              style={{ fontSize: "15px" }}
            >
              Yes
            </Button>{" "}
              </div>
              </div>
              
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmBox;
