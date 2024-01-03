import Dexie from "dexie";

const taxDb = new Dexie("TaxDb");
taxDb.version(1).stores({
  tax: "++id, price",
});

const defaultPrice = 10;

async function setTaxPrice(price) {
  try {
    await taxDb.tax.clear();
    await taxDb.tax.add({ price });
  } catch (error) {
    console.error("Error setting tax price:", error);
  }
}

async function getTaxPrice() {
  try {
    const tax = await taxDb.tax.toArray();
    return tax.length > 0
      ? tax[0].price
      : () => {
          setDefaultTaxPrice();
          return defaultPrice;
        };
  } catch (error) {
    console.error("Error getting tax price:", error);
    return null;
  }
}

async function setDefaultTaxPrice() {
  try {
    await taxDb.tax.clear();
    await taxDb.tax.add({ price: defaultPrice });
  } catch (error) {
    console.error("Error setting default tax price:", error);
  }
}

export { setTaxPrice, getTaxPrice, setDefaultTaxPrice };
