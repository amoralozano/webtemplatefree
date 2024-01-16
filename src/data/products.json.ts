export interface Template {
  title: string;
  description: string;
  image: string;
  price: string;
}

const one: Template = {
  title: "X Assistant",
  description:
    "X assistant will help you with any social media needs with X or twitter. Ask and X is here.",
  image: "https://i.imgur.com/OI2F4gk.png",
  price: "5.99",
};

const two: Template = {
  title: "Essay Master",
  description:
    "Having issues starting an essay or not knowing what to write... you found the right tool.",
  image: "https://i.imgur.com/EAiGx9e.png",
  price: "7.95",
};

const three: Template = {
  title: "Muscle Coach",
  description:
    "The gains AI that many were asking for. Motivation? No issue Muscle coach is here!",
  image: "https://i.imgur.com/QkmctaN.png",
  price: "3.99",
};

export const bytitle = {
  one,
  two,
  three,
};
export const products = Object.values(bytitle);
