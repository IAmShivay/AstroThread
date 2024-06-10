import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../api/productApi"; // Assuming you have an API function to fetch products
import { RootState } from "../../store";

interface Product {
  _id:string,
  name: string;
  description: string;
  price: number;
  ratings: number;
  images: {
    public_id: string;
    url: string;
  }[];
  category: string;
  stock: number;
  numOfReviews: number;
  Reviews: {
    name: string;
    rating: number;
    comments: string;
  }[];
  createdAt: Date;
}


interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: "",
};

export const fetchProductList = createAsyncThunk(
  "products/fetchProductList",
  async (_, thunkAPI) => {
    try {
      const response = await fetchProducts();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductList.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductList.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectProducts = (state: RootState) => state.products;
export default productSlice.reducer;
