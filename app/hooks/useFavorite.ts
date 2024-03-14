import axios from "axios";

import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";

import { useCallback, useMemo } from "react";

import { SafeUser } from "../types";

import useLoginModal from "./useLoginModal";

interface UseFavoriteProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: UseFavoriteProps) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (isFavorite) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }
        await request();
        router.refresh();
        toast.success(
          isFavorite ? "Removed from favorites" : "Added to favorites"
        );
      } catch {
        toast.error("An error occurred");
      }
    },
    [currentUser, isFavorite, listingId, loginModal, router]
  );
  return { isFavorite, toggleFavorite };
};

export default useFavorite;
