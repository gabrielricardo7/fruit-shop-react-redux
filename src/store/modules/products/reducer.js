const fruits = [
    { id: 1, name: "Abacaxi", price: 8, image: "/images/pixel-pineapple.png" },
    { id: 2, name: "Banana", price: 1, image: "/images/pixel-banana.png" },
    { id: 3, name: "Cereja", price: 7, image: "/images/pixel-cherry.png" },
    { id: 4, name: "Kiwi", price: 3, image: "/images/pixel-kiwi.png" },
    { id: 5, name: "Laranja", price: 0.75, image: "/images/pixel-orange.png" },
    { id: 6, name: "Limão", price: 0.5, image: "/images/pixel-lemon.png" },
    { id: 7, name: "Maçã", price: 1.5, image: "/images/pixel-apple.png" },
    { id: 8, name: "Melancia", price: 9, image: "/images/pixel-watermelon.png" },
    { id: 9, name: "Morango", price: 0.25, image: "/images/pixel-strawberry.png" },
    { id: 10, name: "Pêssego", price: 1.25, image: "/images/pixel-peach.png" },
];

const productsReducer = (state = fruits, action) => {
    return state;
};

export default productsReducer;
