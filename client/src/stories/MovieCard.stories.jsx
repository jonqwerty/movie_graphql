import React from "react"

import MovieCard from "../components/MovieCard"

import { movies } from "./stub"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/Movie card",
  component: MovieCard,
}

const Template = (args) => <MovieCard {...args} />

export const Primary = Template.bind({})

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
Primary.args = { movies: movies[0] }
