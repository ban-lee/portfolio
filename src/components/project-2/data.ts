export interface Data {
  id: number;
  title: string;
  location: string;
  googleMapsUrl: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl: string;
}

// Fake data to simulate receiving data from calling an API or a database.
export const data: Data[] = [
  {
    id: 1,
    title: "Final Fantasy XIV Fan Festival 2023",
    location: "Las Vegas",
    googleMapsUrl: "https://goo.gl/maps/hiUiEV1acoahq6aM9",
    startDate: "July 28, 2023",
    endDate: "July 29, 2023",
    description: "We're excited to return to hosting in-person events and to invite our Warriors of Light to celebrate with us in Las Vegas this July!",
    imageUrl: "/src/assets/project-2/ff14_fanfest.jpg",
  },
  {
    id: 2,
    title: "Sandals Montego Bay",
    location: "Jamaica",
    googleMapsUrl: "https://goo.gl/maps/DXYc5dYaGU7iZKeRA",
    startDate: "March 14, 2023",
    endDate: "March 21, 2023",
    description: "The first-ever Sandals all-inclusive resort, Sandals Montego Bay, now has even more ways to enjoy luxury while reveling in the spirit of romance and fun on Jamaica’s coastline.",
    imageUrl: "/src/assets/project-2/sandals_montego_bay.webp",
  }
]
