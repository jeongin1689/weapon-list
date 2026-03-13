import Card from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: { 
    category: { 
      control: "inline-radio", 
      options: ["돌격소총", "저격소총", "기관단총","지정사수소총","산탄총","권총","기타"], 
    }, 
  }
};

export default meta;

export const Ar = {
  args: {
    weaponData: {
      itemName: "M416",
      itemImage: "/image/M416.png",
    },
    category: "돌격소총",
  },
};

export const Sniper = {
  args: {
    weaponData: {
      itemName: "AWM",
      itemImage: "/image/AWM.png",
    },
    category: "저격소총",
  },
};

export const Smg = {
  args: {
    weaponData: {
      itemName: "VECTOR",
      itemImage: "/image/VECTOR.png",
    },
    category: "기관단총",
  },
};

export const Dmr = {
  args: {
    weaponData: {
      itemName: "DRAGUNOV",
      itemImage: "/image/DRAGUNOV.png",
    },
    category: "지정사수소총",
  },
};

export const Sg = {
  args: {
    weaponData: {
      itemName: "S686",
      itemImage: "/image/S686.png",
    },
    category: "산탄총",
  },
};

export const Pistol = {
  args: {
    weaponData: {
      itemName: "P92",
      itemImage: "/image/P92.png",
    },
    category: "권총",
  },
};

export const Other = {
  args: {
    weaponData: {
      itemName: "판처파우스트",
      itemImage: "/image/panzerfaust.png",
    },
    category: "기타",
  },
};