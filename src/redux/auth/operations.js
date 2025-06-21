import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export const registerUserThunk = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, { name, email: user.email, favorites: [] });

      return {
        uid: user.uid,
        name,
        email: user.email,
        favorites: [],
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, _thunkAPI) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    return {
      uid: user.uid,
      email: user.email,
      name: docSnap.exists() ? docSnap.data().name || "" : "",
      favorites: docSnap.exists() ? docSnap.data().favorites || [] : [],
    };
  }
);

export const logoutUserThunk = createAsyncThunk("auth/logoutUser", async () => {
  await signOut(auth);
});

export const updateFavoritesThunk = createAsyncThunk(
  "auth/updateFavorites",
  async (_, { getState }) => {
    const { user, favorites } = getState().auth;
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, { favorites }, { merge: true });
  }
);
