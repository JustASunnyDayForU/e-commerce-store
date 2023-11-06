import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
import toast from "react-hot-toast/headless";

interface CartStore {
    items: Product[];
    addItem : (data: Product) => void;
    removeItem : (id : string) => void;
    removeAll : () => void;
};

const useCart = create(
    persist<CartStore>((set,get) => ({
        items: [],
        addItem: (data: Product)  => {
            const currentItems = get().items;
            const existingitems = currentItems.find((item) => item.id === data.id);

            if (existingitems) {
                return toast("Items already added");
        }
        set({ items: [...get().items,data] });
        toast.success("Added to cart");
    },
    removeItem: (id: string) =>{
        set({ items: [...get().items.filter((item) => item.id !== id )] });
        toast.success("Item removed from cart.");
    },
    removeAll: () => set({items:[]}),
    }),{
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    } )
)

export default useCart;