import prisma from "@/app/libs/prismadb";

import getCurrentUser from "./getCurrentUser";

export default async function getLikedListings() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const liked = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    const safeLiked = liked.map((liked) => ({
      ...liked,
      createdAt: liked.createdAt.toString(),
    }));

    return safeLiked;
  } catch (error: any) {
    throw new Error(error);
  }
}
