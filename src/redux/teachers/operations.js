import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { get, ref } from "firebase/database";

export const getTeachers = createAsyncThunk(
  "teachers/getAll",
  async (_, { rejectWithValue }) => {
    try {
      console.log("🔍 Fetching teachers from Firebase...");
      const snapshot = await get(ref(db, "teachers"));

      if (!snapshot.exists()) {
        console.log("📭 No teachers found in database.");
        return [];
      }

      const data = snapshot.val();
      console.log("📦 Raw data from Firebase:", data);

      const teachers = Object.entries(data).map(([id, teacher]) => ({
        id,
        ...teacher,
      }));

      console.log("✅ Parsed teachers array:", teachers);
      return teachers;
    } catch (error) {
      console.error("❌ Error fetching teachers:", error.message);
      return rejectWithValue(error.message);
    }
  }
);
