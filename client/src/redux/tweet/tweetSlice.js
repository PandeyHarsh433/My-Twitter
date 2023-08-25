import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getAuthToken = () => localStorage.getItem("authToken");

const initialState = {
  tweets: [],
  selectedTweet: null,
};

// Fetch all tweets
export const fetchAllTweets = createAsyncThunk(
  "tweets/fetchAllTweets",
  async () => {
    const response = await fetch("http://localhost:8000/api/tweet/getTweets");
    if (!response.ok) {
      throw new Error("Failed to fetch tweets");
    }
    const data = await response.json();
    return data.tweets;
  }
);

// Fetch a single tweet
export const fetchSingleTweet = createAsyncThunk(
  "tweets/fetchSingleTweet",
  async (tweetId) => {
    const authToken = getAuthToken();
    if (!authToken) {
      throw new Error("Authentication required");
    }

    const response = await fetch(
      `http://localhost:8000/api/tweet/getTweet?tweetId=${tweetId}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch tweet");
    }

    const data = await response.json();
    return data.tweet;
  }
);

// Create a tweet
export const createTweet = createAsyncThunk(
  "tweets/createTweet",
  async (tweetData) => {
    const authToken = getAuthToken();
    if (!authToken) {
      throw new Error("Authentication required");
    }

    const response = await fetch("http://localhost:8000/api/tweet/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(tweetData),
    });

    if (!response.ok) {
      throw new Error("Failed to create tweet");
    }

    const data = await response.json();
    return data.tweet;
  }
);

// Edit a tweet
export const editTweet = createAsyncThunk(
  "tweets/editTweet",
  async ({ id, changeData }) => {
    console.log(id, changeData);
    const authToken = getAuthToken();
    if (!authToken) {
      throw new Error("Authentication required");
    }

    const response = await fetch(
      `http://localhost:8000/api/tweet/edit?tweetId=${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ description: changeData }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to edit tweet");
    }

    const data = await response.json();
    return data.tweet;
  }
);

// Delete a tweet
export const deleteTweet = createAsyncThunk(
  "tweets/deleteTweet",
  async (tweetId) => {
    const authToken = getAuthToken();
    if (!authToken) {
      throw new Error("Authentication required");
    }

    const response = await fetch(
      `http://localhost:8000/api/tweet/delete?tweetId=${tweetId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete tweet");
    }

    const data = await response.json();
    return data.message;
  }
);

const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTweets.fulfilled, (state, { payload }) => {
        state.tweets = payload;
      })
      .addCase(fetchSingleTweet.fulfilled, (state, { payload }) => {
        state.selectedTweet = payload;
      })
      .addCase(createTweet.fulfilled, (state, { payload }) => {
        state.tweets.push(payload);
      })
      .addCase(editTweet.fulfilled, (state, { payload }) => {
        state.selectedTweet = payload;
        const tweetIndex = state.tweets.findIndex(
          (tweet) => tweet._id === payload._id
        );
        if (tweetIndex !== -1) {
          state.tweets[tweetIndex] = payload;
        }
      })
      .addCase(deleteTweet.fulfilled, (state, { payload }) => {
        state.tweets = state.tweets.filter((tweet) => tweet._id !== payload);
      });
  },
});

export const selectAllTweets = (state) => state.tweets.tweets;
export const selectSingleTweet = (state) => state.tweets.selectedTweet;

export default tweetSlice.reducer;
