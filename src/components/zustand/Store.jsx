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
  allArray: [
    {
      women: [
        {
          id: uuidv4(),
          category: "bag",
          title: "Numer 1 bag - women",
          desc: "reversible angora cardigan",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-GmxI83_8b_W_t9zDlvb7Prk8USHmVgXSw&usqp=CAU",
            "https://img.ltwebstatic.com/images3_pi/2023/04/29/1682773484a3e9936f825c968046d4e51beb70aca1_thumbnail_720x.webp",
            "https://img.ltwebstatic.com/images3_pi/2023/05/01/1682920631c170427068c1079bb2a3b9a8d3d1aa0e_thumbnail_720x.webp",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "apparel",
          title: "Ladies Denim Shorts Pants",
          desc: "reversible angora cardigan",
          image: [
            "https://image.made-in-china.com/2f0j00mQuogVMCCbrc/Ladies-Denim-Shorts-Pants-Skinny-Casual-Women-Hole-Jean-Short-Women-Apparel.jpg",
            "https://image.made-in-china.com/44f3j00HZPidnQFAauk/Ladies-Denim-Shorts-Pants-Skinny-Casual-Women-Hole-Jean-Short-Women-Apparel.webp",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "apparel",
          title: "Stylish Office & Work clothing",
          desc: "reversible angora cardigan",
          image: [
            "https://i.insider.com/634d9bda6bd527001914fa0e",
            "https://www.yournextshoes.com/wp-content/uploads/2021/02/Everlane-Oversized-Blazer.jpg",
            "https://minimumfashion.com/cdn/shop/products/224019953-999_600x.jpg?v=1691025247",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "apparel",
          title: "Casual Fashion long sleeve sexy apparel",
          desc: "reversible angora cardigan",
          image: [
            "https://image.made-in-china.com/2f0j00qbAuDZmPLaoc/New-Design-Ladies-Apparel-Casual-Style-Long-Sleeve-Fashion-Sexy-Women-Tops-and-Blousee.webp",
            "https://image.made-in-china.com/2f0j00KkwpHfdsLtob/New-Design-Ladies-Apparel-Casual-Style-Long-Sleeve-Fashion-Sexy-Women-Tops-and-Blousee.webp",
            "https://image.made-in-china.com/202f0j00MoJpDHdPETbc/New-Design-Ladies-Apparel-Casual-Style-Long-Sleeve-Fashion-Sexy-Women-Tops-and-Blousee.webp",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "apparel",
          title: "Women T-shirts Jacket",
          desc: "reversible angora cardigan",
          image: [
            "https://swansapparel.com/cdn/shop/files/367809279_1036690121116528_8766716793083960801_n.jpg?v=1692828703&width=1500",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmdFDh37rtjd1ocGR2Mw7Mwncbtx7RC5SvHnzLFIzH95QqolYHm-ERdczMB6g2t63q6fE&usqp=CAU",
            "https://cdn.shopify.com/s/files/1/1136/2606/files/TheMerlyJacket-OriginalWash-ABLE-2_180x.png?v=1691705433%20180w%20241h,%20https://cdn.shopify.com/s/files/1/1136/2606/files/TheMerlyJacket-OriginalWash-ABLE-2_360x.png?v=1691705433%20360w%20481h,%20https://cdn.shopify.com/s/files/1/1136/2606/files/TheMerlyJacket-OriginalWash-ABLE-2_540x.png?v=1691705433%20540w%20722h,%20https://cdn.shopify.com/s/files/1/1136/2606/files/TheMerlyJacket-OriginalWash-ABLE-2_720x.png?v=1691705433%20720w%20963h,%20https://cdn.shopify.com/s/files/1/1136/2606/files/TheMerlyJacket-OriginalWash-ABLE-2_900x.png?v=1691705433%20900w%201203h,%20https://cdn.shopify.com/s/files/1/1136/2606/files/TheMerlyJacket-OriginalWash-ABLE-2_1080x.png?v=1691705433%201080w%201444h,%20https://cdn.shopify.com/s/files/1/1136/2606/files/TheMerlyJacket-OriginalWash-ABLE-2_1296x.png?v=1691705433%201296w%201733h,%20https://cdn.shopify.com/s/files/1/1136/2606/files/TheMerlyJacket-OriginalWash-ABLE-2_1512x.png?v=1691705433%201512w%202021h,%20https://cdn.shopify.com/s/files/1/1136/2606/files/TheMerlyJacket-OriginalWash-ABLE-2.png?v=1691705433%201532w%202048h,",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "bag",
          title: "Crocodile Embossed Square Bag",
          desc: "reversible angora cardigan",
          image: [
            "https://img.ltwebstatic.com/images3_spmp/2023/05/25/1684984630a4301452063c8250f96d34976e14b32c_thumbnail_405x552.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYdwexoKdhguhJRa83Y3hEI39HJKFxZ-TE4lkNJg8-QrZR4MIp2k-CdjfAYeK6CsQL38&usqp=CAU",
            "https://img.ltwebstatic.com/images3_spmp/2023/05/26/1685069880f03a7d31f85fd6ecf0822f3c924c855f_thumbnail_720x.webp",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "bag",
          title:
            "Women Handbag For Women Bag Ladies Purse Crossbody Satchel - White",
          desc: "reversible angora cardigan",
          image: [
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/30/316606/1.jpg?3322",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/30/316606/2.jpg?3322",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/30/316606/3.jpg?7076",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "bag",
          title: "3 In 1 Women Bag Crossbody Bag Handbag Ladies Purse",
          desc: "reversible angora cardigan",
          image: [
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/19/928937/1.jpg?8762",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/19/928937/2.jpg?8762",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/19/928937/4.jpg?8762",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "shoes",
          title: "FLAT FEMALE SHOE - WOMEN OUTDOOR CANVAS - BLACK",
          desc: "reversible angora cardigan",
          image: [
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/46/1012152/1.jpg?8222",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/46/1012152/2.jpg?8222",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/46/1012152/3.jpg?8222",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "shoes",
          title: "Zara women Shoe",
          desc: "reversible angora cardigan",
          image: [
            "https://static-uc.olist.ng/upload/20200722/1291jurrqtq9.jpg",
            "https://static-uc.olist.ng/upload/20200722/1291kkf1olj7.jpg",
            "https://static-uc.olist.ng/upload/20200722/1291lhyp4gzl.jpg",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "shoes",
          title: "BETSEY JOHNSON IVORY EMBELLISHED STRAP BLOCK HEEL SANDAL",
          desc: "reversible angora cardigan",
          image: [
            "https://shoepifystore.com/cdn/shop/files/BETSEYJOHNSONIVORYEMBELLISHEDSTRAPBLOCKHEELSANDAL1.webp?v=1692902533&width=800",
            "https://shoepifystore.com/cdn/shop/files/BETSEYJOHNSONIVORYEMBELLISHEDSTRAPBLOCKHEELSANDAL7.webp?v=1692902552&width=800",
            "https://shoepifystore.com/cdn/shop/files/BETSEYJOHNSONIVORYEMBELLISHEDSTRAPBLOCKHEELSANDAL5.webp?v=1692902552&width=800",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "shoes",
          title: "NEXT BROWN LOW BLOCK HEEL MULE",
          desc: "reversible angora cardigan",
          image: [
            "https://shoepifystore.com/cdn/shop/files/NEXTBROWNLOWBLOCKHEELMULE1.webp?v=1692964180&width=300",
            "https://shoepifystore.com/cdn/shop/files/NEXTBROWNLOWBLOCKHEELMULE.webp?v=1692964180&width=300",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "shoes",
          title: "Number 3 shoe - women",
          desc: "reversible angora cardigan",
          image: [
            "https://www.sojoee.com/wp-content/uploads/2023/09/FTW-1211-Mid-heel-womens-black-work-shoes-450x450.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVkpISGhWDCNU7u-nwKeO4px4wYNhzFuzBuY-7_6XJ2Er-Pb95xOPSE82M0yDwvJNx6k&usqp=CAU",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "acceesories",
          title: "Women's Computer Glasses Cateye TR90 Optical Eyewear Frames",
          desc: "reversible angora cardigan",
          image: [
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/48/927299/1.jpg?6610",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/48/927299/2.jpg?6610",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/48/927299/3.jpg?6611",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "acceesories",
          title: "LZQpeARL Fashion Sunglasses Chain",
          desc: "reversible angora cardigan",
          image: [
            "https://m.media-amazon.com/images/I/71drFmFFtWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71bhQcrf39L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51igThK7DfL._AC_SL1500_.jpg",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "acceesories",
          title: "female jewelry sets Bracelet Necklace Earrings and ring gift",
          desc: "reversible angora cardigan",
          image: [
            "https://static-uc.olist.ng/upload/i03/20220823/37k7jbvgc4xu.jpg",
            "https://static-uc.olist.ng/upload/i03/20220823/37k7jbvedwjl.jpg",
            "https://static-uc.olist.ng/upload/i03/20220823/37k7jbvgc4xt.jpg",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "acceesories",
          title: "Women Earring & Necklace Jewelry Set-Gold",
          desc: "reversible angora cardigan",
          image: [
            "https://images.yaoota.com/gIrVcOOv4EZ7e_d9gwLojk7Lq2o=/trim/fit-in/500x500/filters:quality(80)/yaootaweb-production-ng/media/crawledproductimages/3bf973d5b7d49a9bdc76a4c75d9ff1a608e72e3c.jpg",
            "https://images.yaoota.com/2mAMLMwi3rg_fO509k48ITFIodY=/trim/fit-in/500x500/filters:quality(80)/yaootaweb-production-ng/media/crawledproductimages/f91edfb7d0dcc493a34e3e3cf8e9471308d1e2cd.jpg",
            "https://images.yaoota.com/vsUT_Jo71QoLSI6XdPOlPnD6Ld0=/trim/fit-in/500x500/filters:quality(80)/yaootaweb-production-ng/media/crawledproductimages/a25137590970a070d9f57a7061c010d142c6644b.jpg",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
      ],
    },
    {
      men: [
        {
          id: uuidv4(),
          title: "no 1 tops - men",
          category: "tops",
          desc: "reversible angora cardigan",
          image: [
            "https://images-cdn.ubuy.co.in/633b5404fb8f763d6e3009ab-woman-harajuku-cardigan-peach-print.jpg",
            "https://m.media-amazon.com/images/I/61WZhbWIvJL._AC_SX385_.jpg",
            "https://i.ebayimg.com/images/g/qBEAAOSw-lVfvOpE/s-l1200.webp",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          title: "no. 2 shoes - men",
          category: "shoes",
          desc: "reversible angora cardigan",
          image: [
            "https://tlycblog.com/wp-content/uploads/2018/11/Toni-Fall-2018-Sweater-Weather-Cardi-0004-683x1024.jpg",
            "https://www.marymaxim.ca/cdn/shop/files/95196c.jpg?v=1685647626&width=1080",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaeLPJ682x9w-QgFXJeQT8BT4IBpzydhJQUbuLKHqIxOR1Uf8y-VpRDnG6MsyeA00Xyc&usqp=CAU",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "accessories",
          title: "no. 3 accessories - men",
          desc: "reversible angora cardigan",
          image: [
            "https://hudsonvalleystylemagazine.com/wp-content/uploads/2021/05/IMG_1407.jpg",
            "https://hudsonvalleystylemagazine.com/wp-content/uploads/2021/05/IMG_9862.jpg",
            "https://hudsonvalleystylemagazine.com/wp-content/uploads/2021/12/IMG_0893wdw.jpg",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "men",
          title: "no.4 - men",
          desc: "reversible angora cardigan",
          image: [
            "https://tlyarncrafts.com/cdn/shop/products/2_3b76dd2a-3dc7-4d6b-a1cb-c4561ca8451f_1600x2375.png?v=1627935945",
            "data:image/jpeg;base64,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",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQeo2zqRaB0b97Dm6dVs9Ku0SJwHN4EQ9HiamXQxAfMGRkieEXM6zED9l1NTgv-4WMC8&usqp=CAU",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
      ],
    },
    {
      kids: [
        {
          id: uuidv4(),
          category: "bag",
          title: "21WN",
          desc: "reversible angora cardigan",
          image: [
            "https://www.joebrowns.co.uk/media/catalog/product/W/K/WK609A_1.jpg?width=459&height=550&quality=90&bg-color=255,255,255&fit=bounds",
            "https://www.joebrowns.co.uk/media/catalog/product/W/K/WK609A_5.jpg?quality=90&bg-color=255,255,255&fit=bounds&height=&width=",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_A7lMta6GHLDnTiVaoODpuSOfYgUeL_u-iSTf6z5EDKFo1r3X26gSac0Om61cSkBtuvY&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKoAQUU2vC4UF_tkdJNHJumSgslsgExGEoakohEbbGJAf0RnOrrHyEXNpLmBmv6f4hDTk&usqp=CAU",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "apparel",
          title: "21WN",
          desc: "reversible angora cardigan",
          image: [
            "https://m.media-amazon.com/images/I/61eTgplwZJL._AC_SY450_.jpg",
            "https://cdn.shopify.com/s/files/1/0565/1234/8333/files/cashmere-cocoon-cardigan-sweater-ivory-v6.jpg?v=1691440748",
            "https://assets.ajio.com/medias/sys_master/root/20221125/OQXr/6380e6faf997ddfdbd9e543c/-473Wx593H-469293861-lbeige-MODEL.jpg",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "apparel",
          title: "21WN",
          desc: "reversible angora cardigan",
          image: [
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2b346b9d-c3d1-4d76-b092-4a406d113d8c/jordan-flight-heritage-mens-cardigan-pLc4v6.png",
            "https://static.nike.com/a/images/t_default/65e4df11-b268-44f2-9aaf-ae93630e83f0/jordan-flight-heritage-mens-cardigan-pLc4v6.png",
            "https://static.nike.com/a/images/t_default/1dbe5942-6e69-4ebc-aa30-27b529c21110/jordan-flight-heritage-mens-cardigan-pLc4v6.png",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "apparel",
          title: "21WN",
          desc: "reversible angora cardigan",
          image: [
            "https://www.knitcroaddict.com/wp-content/uploads/2022/06/Etsy-pics-crochet-lightweight-cardigan.png",
            "https://i5.walmartimages.com/asr/c8ce0356-07dd-4d37-a03b-049c836d7d1d.7e50715fe09838d6ecac9a6fb15ee976.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
            "https://i5.walmartimages.com/asr/66eee7e8-a01c-44c3-82d2-93f71f81c90c.5595c815a8d75b06ed4e61d3f0bf2991.jpeg",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
        {
          id: uuidv4(),
          category: "apparel",
          title: "21WN",
          desc: "reversible angora cardigan",
          image: [
            "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_01_T38_5309_F0_X_EC_0?wid=1024&qlt=80",
            "https://www.mcelhinneys.com/cdn/shop/products/white-stuff-city-cardigan-wff431676-dky_1_1024x1024.jpg?v=1648754186",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyw-dVqZ_g07hTPdtEM0dxM43EYRFVKqysXyiGSAp9MP4H_tRVl5qdicyAK7c_Dk4fuU&usqp=CAU",
          ],
          price: "120",
          qty: 1,
          liked: false,
          otherInfo: [
            {
              title: "Materials",
              desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
            },
            {
              title: "Care",
              desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
            },
          ],
          caution: [
            "Do not use bleach",
            "Do not tumble dry",
            "Dry clean with tetrachloroethylene",
            "iron at a maximum of 110C/230F",
          ],
          shipping: {
            status: "free",
            price: "",
            from: "",
            to: "",
          },
          policy: {
            cod: "Dummy text for COD policy",
            return:
              "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
          },
        },
      ],
    },
  ],
  preview: {},
  cart: [
    // {
    //   id: uuidv4(),
    //   category: "apparel",
    //   name: "Lameri",
    //   desc: "Recycle Boucle knit Cardigan Pink",
    //   price: "$120",
    //   image: "https://m.media-amazon.com/images/I/61RUMc7+vSL._AC_UY1100_.jpg",
    //   qty: 1,
    // },
    // {
    //   id: uuidv4(),
    //   category: "apparel",
    //   name: "5252 Bag",
    //   desc: "2021 Signature Bag",
    //   price: "$120",
    //   image:
    //     "https://www.stylecraze.com/wp-content/uploads/2018/01/50-Fashion-Tips-Every-Girl-Should-Know.jpg",
    //   qty: 1,
    // },
    // {
    //   id: uuidv4(),
    //   category: "apparel",
    //   name: "Croc Top",
    //   desc: "2021 Signature Top",
    //   price: "$120",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnpgtQ1aXqIbAQJF0OAFjhkvlIFVidfTgpQ&usqp=CAU",
    //   qty: 1,
    // },
    // {
    //   id: uuidv4(),
    //   category: "apparel",
    //   name: "Fashion Dress",
    //   desc: "2021 Fashion Modeling dress",
    //   price: "$120",
    //   image:
    //     "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/09/1734902/1.jpg?7883",
    //   qty: 1,
    // },
  ],
  setPreview: (prev) => set((state) => ({ preview: prev })),
  addToBasket: (newCart) =>
    set((state) => ({ cart: [...state.cart, newCart] })),
}));

export default useBlogStore;
