import Popup from "./Popup";

const meta = {
  title: "Components/Popup",
  component: Popup,
  tags: ["autodocs"],
  argTypes: {
    category: {
      control: "select",
      options: ["돌격소총", "저격소총", "기관단총", "산탄총", "권총"],
      description: "무기 카테고리",
    },
    weaponData: {
      description: "무기 데이터 객체",
    },
    onClose: {
      action: "closed",
      description: "팝업 닫기 핸들러",
    },
  },
};

export default meta;

const createWeaponData = (overrides = {}) => ({
  itemImage: "/image/M416.png",
  itemName: "M416",
  gunParts: {
    bullet: [
      {
        image: "/image/556mm.png",
        name: "5.56mm",
        desc: "5.56mm 탄환",
      },
    ],
    muzzle: [
      {
        image: "/image/weapons-add-on-muzzle-compensator_large.png",
        name: "보정기",
        desc: "수직/수평 반동 감소",
      },
      {
        image: "/image/weapons-add-on-muzzle-suppressor_large.png",
        name: "소음기",
        desc: "총성 감소",
      },
      {
        image: "/image/weapons-add-on-muzzle-flashhider_large.png",
        name: "소염기",
        desc: "총구 화염 감소",
      },
    ],
    grip: [
      {
        image: "/image/weapons-add-on-rail-fore_grip.png",
        name: "수직 손잡이",
        desc: "수직 반동 감소",
      },
      {
        image: "/image/weapons-add-on-rail-angled_fore_grip.png",
        name: "앵글 손잡이",
        desc: "조준 속도 증가",
      },
    ],
    scope: [
      {
        image: "/image/weapons-add-on-sights-red.png",
        name: "레드 도트 사이트",
        desc: "1배율 조준경",
      },
      {
        image: "/image/weapons-add-on-sights-holosight.png",
        name: "홀로그램 사이트",
        desc: "1배율 조준경",
      },
      {
        image: "/image/weapons-add-on-sights-aimpoint2X.png",
        name: "2배율 스코프",
        desc: "2배율 조준경",
      },
      {
        image: "/image/weapons-add-on-sights-aimpoint4X.png",
        name: "4배율 스코프",
        desc: "4배율 조준경",
      },
    ],
    magazine: [
      {
        image: "/image/weapons-add-on-magazines-extended_large.png",
        name: "대용량 탄창",
        desc: "탄약 용량 증가",
      },
      {
        image: "/image/weapons-add-on-magazines-quickdraw_large.png",
        name: "퀵드로우 탄창",
        desc: "재장전 속도 증가",
      },
    ],
    stock: [
      {
        image: "/image/weapons-add-on-buttstock-composite.png",
        name: "전술 개머리판",
        desc: "반동 안정성 증가",
      },
    ],
  },
  ...overrides,
});

export const Ar = {
  args: {
    category: "돌격소총",
    weaponData: createWeaponData(),
  },
};

export const Sniper = {
  args: {
    category: "저격소총",
    weaponData: createWeaponData({
      itemImage: "/image/KAR98K.png",
      itemName: "Kar98k",
      gunParts: {
        bullet: [
          {
            image: "/image/762mm.png",
            name: "7.62mm",
            desc: "7.62mm 탄환",
          },
        ],
        muzzle: [
          {
            image: "/image/weapons-add-on-muzzle-suppressor_large.png",
            name: "저격총 소음기",
            desc: "총성 감소",
          },
        ],
        scope: [
          {
            image: "/image/weapons-add-on-sights-aimpoint4X.png",
            name: "4배율 스코프",
            desc: "4배율 조준경",
          },
          {
            image: "/image/weapons-add-on-sights-aimpoint8X.png",
            name: "8배율 스코프",
            desc: "8배율 조준경",
          },
        ],
        stock: [
          {
            image: "/image/weapons-add-on-buttstock-sniperrifle_cheekpad.png",
            name: "칙 패드",
            desc: "반동 안정성 증가",
          },
        ],
        grip: [],
        magazine: [],
      },
    }),
  },
};

export const Smg = {
  args: {
    category: "기관단총",
    weaponData: createWeaponData({
      itemImage: "/image/UMP45.png",
      itemName: "UMP45",
      gunParts: {
        bullet: [
          {
            image: "/image/9mm.png",
            name: "9mm",
            desc: "9mm 탄환",
          },
        ],
        muzzle: [
          {
            image: "/image/weapons-add-on-muzzle-compensator_medium.png",
            name: "SMG 보정기",
            desc: "반동 감소",
          },
        ],
        grip: [
          {
            image: "/image/weapons-add-on-rail-fore_grip.png",
            name: "수직 손잡이",
            desc: "수직 반동 감소",
          },
        ],
        scope: [
          {
            image: "/image/weapons-add-on-sights-red.png",
            name: "레드 도트 사이트",
            desc: "1배율 조준경",
          },
        ],
        magazine: [
          {
            image: "/image/weapons-add-on-magazines-extended_small.png",
            name: "SMG 대용량 탄창",
            desc: "탄약 용량 증가",
          },
        ],
        stock: [],
      },
    }),
  },
};

export const Pistol = {
  args: {
    category: "권총",
    weaponData: createWeaponData({
      itemImage: "/image/P92.png",
      itemName: "P92",
      gunParts: {
        bullet: [
          {
            image: "/image/9mm.png",
            name: "9mm",
            desc: "9mm 탄환",
          },
        ],
        muzzle: [
          {
            image: "/image/weapons-add-on-muzzle-suppressor_small.png",
            name: "권총 소음기",
            desc: "총성 감소",
          },
        ],
        magazine: [
          {
            image: "/image/weapons-add-on-magazines-extended_small.png",
            name: "권총 대용량 탄창",
            desc: "탄약 용량 증가",
          },
        ],
        grip: [],
        scope: [],
        stock: [],
      },
    }),
  },
};
