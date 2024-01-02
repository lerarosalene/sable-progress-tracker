const masks = [
  { name: "Whale Ship", item: "AtomicSuitHelmet" },
  { name: "Cartographer's", item: "CartographersMask" },
  { name: "Child's", item: "ChildhoodSetMask" },
  { name: "Chum", item: "ChumMask" },
  { name: "Climber's", item: "ClimbingSetMask" },
  { name: "Machinist's", item: "EngineerSetHelmet" },
  { name: "Entertainer's", item: "EntertainersMask" },
  { name: "Angler", item: "FishingSetMask" },
  { name: "Guard's", item: "GuardMask" },
  { name: "Hercules Beetle", item: "HerculesBeetleMask" },
  { name: "Ibexii", item: "IbexiiSetMask" },
  { name: "Merchant's", item: "MerchantsMask" },
  { name: "Sandwyrm", item: "SandwormMask" },
  { name: "Scrapper", item: "ScrappersMask" },
  { name: "Shade of Eccria", item: "ShadeOfEccriaMask" },
];

export function getMasks(inventory) {
  return masks.map((mask) => {
    return {
      name: mask.name,
      collected: inventory.has(mask.item),
    };
  });
}
