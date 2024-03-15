import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getLikedListings from "@/app/actions/getLiked";

import LikedClient from "./LikedClient";

const ListingPage = async () => {
  const listings = await getLikedListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No liked found"
          subtitle="Looks like you have no liked listings."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <LikedClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
