class PropertyService {
  constructor() {}

  get(tokenId) {
    return {
      name: "Test Hot Property",
      description: "A description of a Test HOT Property.",
      imageUrl:
        "https://roofstock-cdn4.azureedge.net/public/properties/1965912/photo/1cfb4826-74d6-44c1-9179-44bde61c0ff9_1_Front_1280.jpg",
    };
  }
}

module.exports = PropertyService;
