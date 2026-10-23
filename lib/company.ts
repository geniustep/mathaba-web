/** Public company data cross-checked against published business information.
 * Phone is shown as a company contact, not as a WhatsApp or Mathaba support line.
 * The owner has supplied the Mathaba contact address; delivery is not yet tested.
 */
export const developer = {
  name: "Genius Step SARL",
  legalName: "GENIUS STEP",
  registration: "RC 66039 · ICE 000210358000072",
  email: "contact@mathaba.online",
  phone: "+212620976497",
  phoneDisplay: "+212 620 976 497",
  postalAddress: {
    street: "37 Rue 40, Aouama Zemmouri, Lot 271",
    city: "Tangier",
    postalCode: "90080",
    country: "Morocco",
  },
} as const;
