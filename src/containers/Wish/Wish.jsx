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

import starEmoji from "../../assets/lottiefiles/star-emoji.json";
import celebration from "../../assets/lottiefiles/celebration.json";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    // backgroundColor: "",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  heading: {
    fontFamily: " 'Raleway', sans-serif ",
    textTransform: "capitalize",
  },
  wish: {
    fontFamily: "'Dancing Script', 'Raleway', sans-serif ",
    textAlign: "center",
  },
}));

const Wish = (props) => {
  const classes = useStyles();
  const loc = useLocation();
  const [name, setName] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isShare, setShare] = useState(null);
  const starEmojiConfig = {
    loop: true,
    autoplay: true,
    animationData: starEmoji,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const celebrationConfig = {
    loop: true,
    autoplay: true,
    animationData: celebration,
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
      <Box>
        <Lottie
          options={celebrationConfig}
          style={{
            display: "inline-block",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
          }}
        />
      </Box>
      <Box mb={1}>
        <Typography variant="h2" className={classes.heading}>
          {name}
        </Typography>
      </Box>
      <Box mb={1}>
        <Typography variant="h5" className={classes.wish}>
          wishes you
        </Typography>
      </Box>
      <Box mb={1}>
        <Typography variant="h2" className={classes.wish}>
          A very happy Ramadan
          <Lottie
            options={starEmojiConfig}
            height={50}
            width={50}
            style={{ display: "inline-block" }}
          />
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h5" className={classes.wish} color="textSecondary">
          This ramadan lets stay at home, may allah bless you all!
        </Typography>
      </Box>
      <Button
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
        disableElevation
      >
        Create mine
      </Button>
      <Dialog
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Create Ramadan Greeting
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Share Ramadan greetings to your loved once
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Yout Name"
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
              url: `https://surprise.zubs.xyz?from=${name}`,
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
