import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useBlogStore = create((set) => ({
  blogPosts: [
    {
      id: uuidv4(),
      image:
        "https://nextluxury.com/wp-content/uploads/trendy-spring-fashion-style.jpg",

      title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
      content: `
      What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      `,
    },
    {
      id: uuidv4(),
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",

      title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
      content: `
      What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      `,
    },
    {
      id: uuidv4(),
      image:
        "https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.jpg",

      title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
      content: `
      What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      `,
    },
    {
      id: uuidv4(),
      image:
        "https://img.freepik.com/free-photo/cute-woman-with-red-lipstick-looks-into-camera-poses-with-white-big-bags-after-good-shopping_197531-17594.jpg",

      title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
      content: `
      What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      `,
    },
    {
      id: uuidv4(),
      image:
        "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbiUyMHNob3BwaW5nfGVufDB8fDB8fHww&w=1000&q=80",

      title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
      content: `
      What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      `,
    },
  ],
  apparelArray: [
    {
      id: uuidv4(),
      title: "21WN",
      desc: "reversible angora cardigan",
      image:
        ["https://www.jennikayne.com/cdn/shop/products/cashmere-cocoon-cardigan-oatmeal-001_9112aba6-6d9e-4f4f-acdc-e22415fbe97e_1024x.jpg?v=1673989158"],
      price: "120",
      liked: false,
    },
    {
      id: uuidv4(),
      title: "21WN",
      desc: "reversible angora cardigan",
      image:
       ["https://cdn-images.farfetch-contents.com/18/88/54/16/18885416_43595192_600.jpg"],
      price: "120",
      liked: false,
    },
    {
      id: uuidv4(),
      title: "21WN",
      desc: "reversible angora cardigan",
      image:
        ["https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/20/550098/4.jpg?5091"],
      price: "120",
      liked: false,
    },
    {
      id: uuidv4(),
      title: "21WN",
      desc: "reversible angora cardigan",
      image:
        ["https://www.jennikayne.com/cdn/shop/products/cashmere-cocoon-cardigan-oatmeal-001_9112aba6-6d9e-4f4f-acdc-e22415fbe97e_1024x.jpg?v=1673989158"],
      price: "120",
      liked: false,
    },
    {
      id: uuidv4(),
      title: "21WN",
      desc: "reversible angora cardigan",
      image:
        ["https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/95/1912942/1.jpg?8997"],
      price: "120",
      liked: false,
    },
    {
      id: uuidv4(),
      title: "21WN",
      desc: "reversible angora cardigan",
      image:
        ["https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/20/550098/4.jpg?5091"],
      price: "120",
      liked: false,
    },
    {
      id: uuidv4(),
      title: "21WN",
      desc: "reversible angora cardigan",
      image:
        ["https://tlyarncrafts.com/cdn/shop/products/2_3b76dd2a-3dc7-4d6b-a1cb-c4561ca8451f_1600x2375.png?v=1627935945"],
      price: "120",
      liked: false,
    },
    {
      id: uuidv4(),
      title: "21WN",
      desc: "reversible angora cardigan",
      image:
        ["https://www.joebrowns.co.uk/media/catalog/product/W/K/WK609A_1.jpg?width=459&height=550&quality=90&bg-color=255,255,255&fit=bounds"],
      price: "120",
      liked: false,
    },
    {
      id: uuidv4(),
      title: "21WN",
      desc: "reversible angora cardigan",
      image:
        ["https://content.purecollection.com/img/f/d997b-80793_lkby5_cloudblue_w_5.jpg"],
      price: "120",
      liked: false,
    },
    {
      id: uuidv4(),
      title: "21WN",
      desc: "reversible angora cardigan",
      image:
        ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2b346b9d-c3d1-4d76-b092-4a406d113d8c/jordan-flight-heritage-mens-cardigan-pLc4v6.png"],
      price: "120",
      liked: false,
    },
    {
      id: uuidv4(),
      title: "21WN",
      desc: "reversible angora cardigan",
      image:
        ["https://images.unsplash.com/photo-1541126006416-0d8c9d9c12d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyZGlnYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"],
      price: "120",
      liked: false,
    },
    {
      id: uuidv4(),
      title: "21WN",
      desc: "reversible angora cardigan",
      image: [
        "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_01_T38_5309_F0_X_EC_0?wid=1024&qlt=80",
        "https://www.mcelhinneys.com/cdn/shop/products/white-stuff-city-cardigan-wff431676-dky_1_1024x1024.jpg?v=1648754186",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyw-dVqZ_g07hTPdtEM0dxM43EYRFVKqysXyiGSAp9MP4H_tRVl5qdicyAK7c_Dk4fuU&usqp=CAU",
      ],
      price: "120",
      liked: false,
    },
  ],
}));

export default useBlogStore;
