import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieApi } from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (searchText) => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&type=movie&s=${searchText}`
    );
    return response.data.Search;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (searchText) => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&type=series&s=${searchText}`
    );
    return response.data.Search;
  }
);
export const fetchAsyncMoviesOrShows = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShows",
  async (id) => {
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: [],
  shows: [],
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMoviveOrShow: (state, { payload }) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, () => {
        // console.log("Pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        return { ...state, movies: payload };
      })
      .addCase(fetchAsyncMovies.rejected, () => {
        console.log("Rejected");
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        return { ...state, shows: payload };
      })
      .addCase(fetchAsyncMoviesOrShows.fulfilled, (state, { payload }) => {
        return { ...state, selectedMovieOrShow: payload };
      });
  },
});

export const { removeSelectedMoviveOrShow } = movieSlice.actions;
export default movieSlice.reducer;
