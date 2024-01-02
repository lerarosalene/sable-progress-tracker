const bikes = [
  {
    name: "Hicaric Ring",
    booster: "MonumentalRingBikeBooster",
    wings: "MonumentalRingBikeWings",
    front: "MonumentalRingBikeFront",
  },
  {
    name: "Whale Ship",
    booster: "AtomicWhaleshipBikeBooster",
    wings: "AtomicWhaleshipBikeWings",
    front: "AtomicWhaleshipBikeFront",
  },
  {
    name: "Beetle",
    booster: "BeetleBooster",
    wings: "BeetleWings",
    front: "BeetleFront",
  },
  {
    name: "Delivery",
    booster: "DeliveryBikeBooster",
    wings: "DeliveryBikeWings",
    front: "DeliveryBikeFront",
  },
  {
    name: "Eyries",
    booster: "EyriesBikeBooster",
    wings: "EyriesBikeWings",
    front: "EyriesBikeFront",
  },
  {
    name: "Giraffe",
    booster: "GiraffeBooster",
    wings: "GiraffeWings",
    front: "GiraffeFront",
  },
  {
    name: "Gliding",
    booster: "GlidingBikeBooster",
    wings: "GlidingBikeWings",
    front: "GlidingBikeFront",
  },
  {
    name: "Lightning Crystal",
    booster: "LightningCrystalBikeBooster",
    wings: "LightningCrystalBikeWings",
    front: "LightningCrystalBikeFront",
  },
  {
    name: "Nomadic",
    booster: "NomadicBooster",
    wings: "NomadicWings",
    front: "NomadicFront",
  },
  {
    name: "Speedster",
    booster: "SpeedsterBikeBooster",
    wings: "SpeedsterBikeWings",
    front: "SpeedsterBikeFront",
  },
  {
    name: "Shade",
    booster: "ShadeOfEccriaBooster",
    wings: "ShadeOfEccriaWings",
    front: "ShadeOfEccriaFront",
  },
  {
    name: "Angler",
    booster: "AnglerBikeBooster",
    wings: "AnglerBikeWings",
    front: "AnglerBikeFront",
  },
  {
    name: "Dragonfly",
    booster: "DragonflyBikeBooster",
    wings: "DragonflyBikeWings",
    front: "DragonflyBikeFront",
  },
  {
    name: "Salt",
    booster: "SaltBikeBooster",
    wings: "SaltBikeWings",
    front: "SaltBikeFront",
  },
  {
    name: "Scrapper's",
    booster: "ScrapperBikeBooster",
    wings: "ScrapperBikeWings",
    front: "ScrapperBikeFront",
  },
  {
    name: "Cartographer's",
    booster: "CartoBikeBooster",
    wings: "CartoBikeWings",
    front: "CartoBikeFront",
  },
];

export function getBikes(inventory) {
  return bikes.map((bike) => {
    return {
      name: bike.name,
      booster: inventory.has(bike.booster),
      wings: inventory.has(bike.wings),
      front: inventory.has(bike.front),
    };
  });
}
