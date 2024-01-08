import React from "react"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

import { styled } from "@mui/material/styles"
import { CardMenu } from "./components"

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
}))

const MovieCard = () => {
  const onAddClick = (movie) => alert("movie is added")
  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      <CardMenu onAddClick={onAddClick} />

      <CardMedia
        component="img"
        height="250"
        image="https://www.carlsberggroup.com/media/1299/tou.png"
        alt="Paella dish"
      />

      <CardInfo>
        <Typography variant="h5" gutterBottom component="div">
          fhfkjdkdfhkdf d
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          20.20. 20222
        </Typography>
      </CardInfo>
    </Card>
  )
}

export default MovieCard
