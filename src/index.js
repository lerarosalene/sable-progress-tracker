import { getOutfits } from "./tabs/outfits";
import { getMasks } from "./tabs/masks";
import { getBikes } from "./tabs/bikes";
import outfitsTemplate from "./tabs/outfits_pug";
import masksTemplate from "./tabs/masks_pug";
import bikesTemplate from "./tabs/bikes_pug";

const generate = document.getElementById("generate");
const outfitsDiv = document.getElementById("outfits");
const masksDiv = document.getElementById("masks");
const bikesDiv = document.getElementById("bikes");
const screenReport = document.getElementById("screen-report");

function parseSave(file) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => {
      try {
        resolve(JSON.parse(fr.result));
      } catch (error) {
        reject(error);
      }
    };
    fr.onerror = () => reject(fr.error);
    fr.readAsText(file);
  });
}

function chooseFile() {
  return new Promise((resolve) => {
    const fInput = document.createElement("input");
    fInput.type = "file";
    fInput.multiple = false;
    fInput.style.display = "none";
    document.body.appendChild(fInput);

    fInput.addEventListener("change", () => {
      resolve(fInput.files[0]);
      document.body.removeChild(fInput);
    });

    fInput.click();
  });
}

generate.addEventListener("click", async () => {
  const saveFile = await chooseFile();
  if (!saveFile) {
    return;
  }

  const data = await parseSave(saveFile);

  const inventorySet = new Set(
    data.PlayerInventory.value.inventorySlots.map((slot) => slot.item),
  );

  const outfitsData = getOutfits(inventorySet);
  const outfitsHTML = outfitsTemplate({ outfits: outfitsData });

  const masksData = getMasks(inventorySet);
  const masksHTML = masksTemplate({ masks: masksData });

  const bikesData = getBikes(inventorySet);
  const bikesHTML = bikesTemplate({ bikes: bikesData });

  outfitsDiv.innerHTML = outfitsHTML;
  masksDiv.innerHTML = masksHTML;
  bikesDiv.innerHTML = bikesHTML;

  screenReport.classList.remove("hidden");
});
