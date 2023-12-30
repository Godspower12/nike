import { createSlice, nanoid } from '@reduxjs/toolkit'


interface Item {
  item: [] |React.ReactNode
}

interface ProdState {
  loading: boolean
  product: any
}

const productSlice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    product: [],
  } as ProdState,
  reducers: (create) => ({
    deleteProduct: create.reducer<any>((state, action) => {
      state.product.splice(action.payload, 1)
    }),
    addProduct: 
      // action type is inferred from prepare callback
      (state, action) => {
        state.product.push(action.payload)
      },
      toggle:
      (state, action) => {
        state.loading = !state.loading
      },
  }),
})

export const { addProduct, deleteProduct, toggle} = productSlice.actions
export default productSlice.reducer;