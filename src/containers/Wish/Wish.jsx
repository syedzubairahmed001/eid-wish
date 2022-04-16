import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  makeStyles,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  TextField,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import Lottie from "react-lottie";
import queryString from "query-string";
import { InlineShareButtons } from "sharethis-reactjs";

import moonAnimation from "../../assets/lottiefiles/moon.json";
import EidAnimation from "../../assets/lottiefiles/eidMubarak.json";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    // backgroundColor: "",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  from: {
    fontFamily: " 'Raleway', sans-serif ",
    textTransform: "capitalize",
    color: "#fcd48f",
  },
  wisherName: {
    textShadow: "1px 1px 10px rgba(252, 212, 143, 0.295)",
    fontFamily: "'Dancing Script', 'Raleway', sans-serif ",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#0c232b",
  },
}));

const Wish = (props) => {
  const classes = useStyles();
  const loc = useLocation();
  const [name, setName] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isShare, setShare] = useState(null);
  const moonConfig = {
    loop: true,
    autoplay: true,
    animationData: moonAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const eidConfig = {
    loop: false,
    autoplay: true,
    animationData: EidAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    console.log(loc);
    const values = queryString.parse(loc.search);
    setName(values.from || "Your Name");
  }, []);
  return (
    <Box className={classes.container}>
      <Box mb={2}>
        <Lottie
          options={eidConfig}
          height={300}
          width={300}
          style={{ display: "inline-block" }}
        />
        <Typography className={classes.from + " animatedFrom "} align="center">
          From
        </Typography>
        <Typography
          className={classes.wisherName + " animamteName"}
          align="center"
          variant="h4"
        >
          {name}
        </Typography>
        <Box mt={1} className={"animatedBody"}>
          <Typography
            style={{
              color: "rgb(252, 212, 143, 0.6)",
              fontFamily: "'Dancing Script', 'Raleway', sans-serif ",
            }}
            align="center"
            variant="body1"
          >
            May Allah bless you and your family.
          </Typography>
        </Box>
      </Box>

      <Button
        color="secondary"
        variant="contained"
        onClick={handleClickOpen}
        className={classes.button + " animatedButton"}
        disableElevation
      >
        Edit this
      </Button>
      <Dialog
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <Typography color="primary">Create Greeting</Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            color="primary"
            id="name"
            label="Your Name"
            value={name === "Your Name" ? "" : name}
            onChange={(e) => {
              const v = e.target.value;
              setName(v);
            }}
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (name !== "") {
                setShare(true);
              }
            }}
            color="primary"
          >
            Share
          </Button>
        </DialogActions>
        {isShare && (
          <InlineShareButtons
            config={{
              alignment: "center", // alignment of buttons (left, center, right)
              color: "social", // set the color of buttons (social, white)
              enabled: true, // show/hide buttons (true, false)
              font_size: 16, // font size for the buttons
              labels: "cta", // button labels (cta, counts, null)
              language: "en", // which language to use (see LANGUAGES)
              networks: [
                // which networks to include (see SHARING NETWORKS)
                "whatsapp",
                "linkedin",
                "messenger",
                "facebook",
                "twitter",
              ],
              padding: 12, // padding within buttons (INTEGER)
              radius: 4, // the corner radius on each button (INTEGER)
              show_total: true,
              size: 40, // the size of each button (INTEGER)
              url: `https://surprise.zubs.xyz/?from=${name
                .split(" ")
                .join("%20")}`,
              // OPTIONAL PARAMETERS
              description: `${name} has sent you a surprise, click the link to open`, // (defaults to og:description or twitter:description)
              title: "Surprice", // (defaults to og:title or twitter:title)
              message: "Surprise", // (only for email sharing)
              subject: "Surprise", // (only for email sharing)
            }}
          />
        )}
      </Dialog>
    </Box>
  );
};

export default Wish;
