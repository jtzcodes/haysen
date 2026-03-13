import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { Product, ProductVariant } from "@/config/products"

export type CartItem = {
  product: Product
  variant: ProductVariant
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void
  removeItem: (variantId: string) => void
  updateQuantity: (variantId: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, variant, quantity = 1) => {
        const currentItems = get().items
        const existingItem = currentItems.find(
          (item) => item.variant.id === variant.id
        )

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.variant.id === variant.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          })
        } else {
          set({ items: [...currentItems, { product, variant, quantity }] })
        }
      },
      removeItem: (variantId) => {
        set({
          items: get().items.filter((item) => item.variant.id !== variantId),
        })
      },
      updateQuantity: (variantId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(variantId)
          return
        }
        set({
          items: get().items.map((item) =>
            item.variant.id === variantId ? { ...item, quantity } : item
          ),
        })
      },
      clearCart: () => set({ items: [] }),
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.variant.price * item.quantity,
          0
        )
      },
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },
    }),
    {
      name: "haysen-cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
