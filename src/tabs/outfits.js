const outfits = [
  {
    name: "Atomic Priesthood",
    top: "AtomicPriesthoodSetTop",
    bottom: "AtomicPriesthoodSetTrousers",
  },
  { name: "Whale Ship", top: "AtomicSuitTop", bottom: "AtomicSuitTrousers" },
  { name: "Beetle Station", top: "BeetleSetTop", bottom: "BeetleSetTrousers" },
  { name: "Biker", top: "BikerSetTop", bottom: "BikerSetTrousers" },
  {
    name: "Hakoan",
    top: "BlackDesertSetTop",
    bottom: "BlackDesertSetTrousers",
  },
  {
    name: "Ibexii Children",
    top: "ChildhoodSetTop",
    bottom: "ChildhoodSetTrousers",
  },
  { name: "Chum", top: "ChumTop", bottom: "ChumBottoms" },
  { name: "Bouldering", top: "ClimbingSetTop", bottom: "ClimbingSetBottoms" },
  { name: "Eccrine", top: "EccrianSetTop", bottom: "EccrianSetTrousers" },
  { name: "Machinist", top: "EngineerSetTop", bottom: "EngineerSetTrousers" },
  { name: "Eyries", top: "FingerClanSetTop", bottom: "FingerClanSetTrousers" },
  { name: "Angler", top: "FishingSetTop", bottom: "FishingSetTrousers" },
  {
    name: "Eccrine Guard",
    top: "GuardOutfitTop",
    bottom: "GuardOutfitBottoms",
  },
  { name: "Ibexii Glider", top: "IbexiiSetTop", bottom: "IbexiiSetTrousers" },
  { name: "Monumental", top: "MonumentalTop", bottom: "MonumentalBottom" },
  { name: "Scrapper", top: "ScrapperSetTop", bottom: "ScrapperSetTrousers" },
  { name: "Sand Surfer", top: "SurferSetTop", bottom: "SurferSetTrousers" },
  { name: "Wash", top: "WhiteDesertSetTop", bottom: "WhiteDesertSetTrousers" },
  { name: "Shade", top: "ShadeSetTop", bottom: "ShadeSetTrousers" },
  { name: "Butterfly", top: "DragonFlySetTop", bottom: "DragonFlySetTrousers" },
];

export function getOutfits(inventory) {
  return outfits.map((outfit) => {
    return {
      name: outfit.name,
      top: inventory.has(outfit.top),
      bottom: inventory.has(outfit.bottom),
    };
  });
}
