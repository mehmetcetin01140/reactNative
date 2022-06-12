const INITIAL_STATE = {
    laptopData : [
        {
         image:'https://m.media-amazon.com/images/I/81hIXkUh45S._AC_SL1500_.jpg',
         desc: 'TECLAST 15.6 inch Windows Laptop 6GB+128GB SSD 8 GB RAM',
        },
       {
         image:'https://m.media-amazon.com/images/I/31l5g84QKML._AC_SY1000_.jpg',
         desc:
           '2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray',
       },
       {
           image:'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/530863-Product-0-I-637743785558813833_ce4d845c-5a94-4cc8-a758-519a4d9bd383_800x800.jpg?v=1650603336',
           desc:
             'HP Pavilion 15 Laptop, 11th Gen Intel Core i7-1165G7 Processor, 16 GB RAM, 512 GB SSD Storage, Full HD IPS micro-edge Display',
         },
         {
           image:'https://d22k5h68hofcrd.cloudfront.net/catalog/product/3/A/3A8V6LA-1_T1643301027.png',
           desc:
             'HP 2PR71EA 15.6" Notebook, Intel Core i5-8250U, 8GB RAM, 1TB HDD, Windows 10',
         },
       ],
       cellphoneData : [
        {
         image:'https://n11scdn.akamaized.net/a1/640/elektronik/outlet-teshir-cep-telefonu/apple-iphone-x-64-gb-cep-telefonu-id-yok-outlet-urun__0966637772161590.jpg',
         desc: 'Apple İphone X 64 Gb',
        },
       {
         image:'https://cdn.cimri.io/image/1000x1000/xiaomi-mi-note-10-lite-128gb-8gb-ram-647-inc-64mp-akilli-cep-telefonu_280821500.jpg',
         desc:
           'Xiaomi Mi Note 10 Lite 128GB 8GB Ram 6.47 inç 64MP',
       },
       {
           image:'https://www.notebookcheck-tr.com/uploads/tx_nbc2/OppoReno5Lite4G__1_.JPG',
           desc:
             'Oppo Reno5 Lite 4G',
         },
         {
           image:'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/121861_large.jpg',
           desc:
           'Samsung Galaxy A72 128 Gb',
         },
       ],
        tvData : [
        {
         image:'https://cdn.cimri.io/image/1000x1000/samsung-ue-ru7300-televizyon_210204011.jpg',
         desc: 'Samsung Curved 4K UHD LED Android TV',
        },
       {
         image:'https://images-na.ssl-images-amazon.com/images/I/91o08DsRplL._AC_SL1500_.jpg',
         desc:
           'Samsung Curved 4K UHD TV',
       },
       {
           image:'https://brain-images-ssl.cdn.dixons.com/1/5/10206351/u_10206351.jpg',
           desc:
             'LG 55UN81006LB 55" Smart 4K Ultra HD HDR LED TV',
         },
         {
           image:'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/65-2-1_large.jpg',
           desc:
           'SAMSUNG UE 75AU9000 75inc 189 cm 4K UHD Smart TV',
         },
       ],
       hardwareData : [
        {
         image:'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/intel/thumb/v2-92109_large.jpg',
         desc: 'Intel Core i5 9600K Socket 1151',
        },
       {
         image:'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/msi/thumb/109379_large.jpg',
         desc:
           'MSI GEFORCE RTX 3080 GAMING X TRIO 10G 10GB GDDR6X 320Bit',
       },
       {
           image:'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/v2-90612-4_large.jpg',
           desc:
             'ASUSTUF B360-PRO GAM. Intel B360 Socket 8.-9.Nesil 1151 DDR4 2666MHz',
         },
         {
           image:'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/kingston/thumb/TeoriV2-108261_large.jpg',
           desc:
           'Kingston 16GB HyperX Fury RGB DDR4 3200MHz CL16 PC RAM',
         },
       ],                

}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "SET_NAME":
            return{...state,name:action.payload }
          
        default:
          return state
    }
}