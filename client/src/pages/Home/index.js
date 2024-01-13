import React, { useState } from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"
import Pagination from "@mui/material/Pagination"

import { useQuery, gql } from "@apollo/client"

import { MOVIES_QUERY } from "./queries"

import { MovieCard } from "../../components"

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 140px)",
  position: "sticky",
  top: theme.spacing(1),
}))

const Home = () => {
  const [page, setPage] = useState(1)
  const { loading, error, data } = useQuery(MOVIES_QUERY, { variables: { page } })

  const paginationHandler = (event, page) => {
    setPage(page)
  }
  if (error) {
    return "Error"
  }
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filters section</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
              {loading && "Loading..."}
              {data && (
                <Grid container spacing={2}>
                  {data.movies.results.map((movie) => (
                    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                      <MovieCard movie={movie} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
            <Box mt={2} pb={2} sx={{ display: "flex", justifyContent: "center" }}>
              <Pagination
                count={data?.movies?.totalPages}
                page={page}
                onChange={paginationHandler}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMovies>Selected movies</SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
