const customers = [
  {
    id: 76,
    title: "Ms.",
    firstname: "Jacey",
    surname: "Maggio",
    postcode: "VH3 7FH",
    image: "http://lorempixel.com/640/480/people",
    email: "Hilda_Funk85@hotmail.com",
    notes: "Qui ipsam velit."
  },
  {
    id: 18,
    title: "Ms.",
    firstname: "Carrie",
    surname: "Schuster",
    postcode: "LY97 1DD",
    image: "http://lorempixel.com/640/480/people",
    email: "Alexys.Kozey92@hotmail.com",
    notes: "Temporibus molestias non doloremque qui."
  },
  {
    id: 81,
    title: "Dr.",
    firstname: "Newton",
    surname: "Satterfield",
    postcode: "PM56 1UN",
    image: "http://lorempixel.com/640/480/people",
    email: "Precious.Balistreri28@hotmail.com",
    notes:
      "Ipsam iusto aspernatur pariatur repellendus rerum modi in quae voluptate."
  },
  {
    id: 70,
    title: "Mr.",
    firstname: "Trinity",
    surname: "Wisozk",
    postcode: "QX06 2ND",
    image: "http://lorempixel.com/640/480/people",
    email: "Maida62@gmail.com",
    notes: "Praesentium nihil consequatur et."
  },
  {
    id: 14,
    title: "Mrs.",
    firstname: "Bertrand",
    surname: "Marvin",
    postcode: "GZ08 9MB",
    image: "http://lorempixel.com/640/480/people",
    email: "Maybelle_Wyman@yahoo.com",
    notes: "Optio soluta nostrum repellat et sit."
  },
  {
    id: 93,
    title: "Ms.",
    firstname: "Uriel",
    surname: "Nader",
    postcode: "ZU77 4BU",
    image: "http://lorempixel.com/640/480/people",
    email: "Zaria.Bashirian4@yahoo.com",
    notes: "Quam aperiam voluptatem esse omnis."
  },
  {
    id: 32,
    title: "Ms.",
    firstname: "Sadie",
    surname: "Koelpin",
    postcode: "ME1 7YT",
    image: "http://lorempixel.com/640/480/people",
    email: "Guillermo_Kulas@gmail.com",
    notes: "Hic fuga nulla occaecati asperiores corporis sunt quod et."
  },
  {
    id: 80,
    title: "Miss",
    firstname: "Foster",
    surname: "Keebler",
    postcode: "QS02 1LF",
    image: "http://lorempixel.com/640/480/people",
    email: "Fern63@hotmail.com",
    notes: "Rerum velit cupiditate praesentium."
  },
  {
    id: 36,
    title: "Ms.",
    firstname: "Carrie",
    surname: "Quigley",
    postcode: "NA6 0OM",
    image: "http://lorempixel.com/640/480/people",
    email: "Eliezer_Wiza13@hotmail.com",
    notes: "Impedit asperiores rerum in libero."
  },
  {
    id: 61,
    title: "Mrs.",
    firstname: "Jennyfer",
    surname: "Bergnaum",
    postcode: "UY3 6GF",
    image: "http://lorempixel.com/640/480/people",
    email: "Izaiah25@gmail.com",
    notes: "Dolorem dolor modi aliquam et quidem."
  },
  {
    id: 79,
    title: "Dr.",
    firstname: "Reynold",
    surname: "Beier",
    postcode: "KG4 6XD",
    image: "http://lorempixel.com/640/480/people",
    email: "Myra12@gmail.com",
    notes: "Eaque non impedit aut non modi est ut molestiae."
  },
  {
    id: 58,
    title: "Ms.",
    firstname: "Fidel",
    surname: "Heathcote",
    postcode: "IU8 7CM",
    image: "http://lorempixel.com/640/480/people",
    email: "Frederick.Treutel73@gmail.com",
    notes: "Quis laudantium est eos."
  },
  {
    id: 96,
    title: "Mr.",
    firstname: "Wallace",
    surname: "Crist",
    postcode: "DD2 7RH",
    image: "http://lorempixel.com/640/480/people",
    email: "Lizzie.Weimann77@yahoo.com",
    notes: "Ut ut accusantium omnis illum unde iure."
  },
  {
    id: 49,
    title: "Miss",
    firstname: "Everardo",
    surname: "Vandervort",
    postcode: "TV44 9IS",
    image: "http://lorempixel.com/640/480/people",
    email: "Nolan.Wehner@gmail.com",
    notes: "Perspiciatis in voluptatem sequi sint praesentium et."
  },
  {
    id: 17,
    title: "Miss",
    firstname: "Chance",
    surname: "Hettinger",
    postcode: "LC06 2OK",
    image: "http://lorempixel.com/640/480/people",
    email: "Shane.Rath49@yahoo.com",
    notes: "Molestias recusandae qui facere soluta."
  },
  {
    id: 13,
    title: "Miss",
    firstname: "Stuart",
    surname: "Herzog",
    postcode: "WJ24 9SF",
    image: "http://lorempixel.com/640/480/people",
    email: "Nayeli_Ullrich@yahoo.com",
    notes: "Magnam aut cupiditate dolore tenetur sint."
  },
  {
    id: 53,
    title: "Mrs.",
    firstname: "Carolyne",
    surname: "Smith",
    postcode: "PQ61 0AB",
    image: "http://lorempixel.com/640/480/people",
    email: "Danyka.Sipes68@gmail.com",
    notes: "Eaque aperiam eos in cupiditate."
  },
  {
    id: 74,
    title: "Ms.",
    firstname: "Joanne",
    surname: "Romaguera",
    postcode: "YP4 5EQ",
    image: "http://lorempixel.com/640/480/people",
    email: "Lowell60@gmail.com",
    notes: "Dignissimos incidunt quaerat deserunt unde."
  },
  {
    id: 90,
    title: "Mr.",
    firstname: "Abigail",
    surname: "Goldner",
    postcode: "HJ9 2KI",
    image: "http://lorempixel.com/640/480/people",
    email: "Harley.Shields2@hotmail.com",
    notes: "Sit rerum voluptatem."
  },
  {
    id: 88,
    title: "Miss",
    firstname: "Annabelle",
    surname: "Zulauf",
    postcode: "CT50 3OF",
    image: "http://lorempixel.com/640/480/people",
    email: "Brooke.Paucek32@hotmail.com",
    notes: "Praesentium eveniet est corrupti rerum."
  }
];
const reservation = [
  {
    id: 48,
    customerId: 59,
    roomId: 29,
    checkInDate: "2019-01-20",
    checkOutDate: "2019-01-02",
    roomPrice: "103.00",
    note: "Voluptatem error numquam."
  },
  {
    id: 63,
    customerId: 24,
    roomId: 41,
    checkInDate: "2018-09-24",
    checkOutDate: "2018-08-27",
    roomPrice: "51.00",
    note: "Ad dolores vero ullam vel."
  },
  {
    id: 49,
    customerId: 87,
    roomId: 55,
    checkInDate: "2018-02-15",
    checkOutDate: "2018-11-09",
    roomPrice: "175.00",
    note: "Eius unde earum vel quibusdam totam voluptas animi."
  },
  {
    id: 15,
    customerId: 32,
    roomId: 63,
    checkInDate: "2018-01-29",
    checkOutDate: "2018-06-15",
    roomPrice: "84.00",
    note: "Commodi magnam et assumenda sed ad."
  },
  {
    id: 10,
    customerId: 44,
    roomId: 72,
    checkInDate: "2018-10-13",
    checkOutDate: "2018-06-22",
    roomPrice: "169.00",
    note: "Aut molestiae ut deserunt."
  },
  {
    id: 77,
    customerId: 44,
    roomId: 93,
    checkInDate: "2019-01-06",
    checkOutDate: "2018-04-08",
    roomPrice: "59.00",
    note: "Nihil et id esse ipsum iure iusto adipisci."
  },
  {
    id: 90,
    customerId: 94,
    roomId: 85,
    checkInDate: "2018-12-16",
    checkOutDate: "2018-09-29",
    roomPrice: "182.00",
    note: "Delectus illo sapiente rerum nihil ipsa."
  },
  {
    id: 82,
    customerId: 28,
    roomId: 76,
    checkInDate: "2018-12-30",
    checkOutDate: "2018-02-17",
    roomPrice: "184.00",
    note: "Ullam qui alias qui voluptatem tempora."
  },
  {
    id: 11,
    customerId: 22,
    roomId: 8,
    checkInDate: "2018-11-03",
    checkOutDate: "2018-04-01",
    roomPrice: "185.00",
    note: "Placeat velit beatae quisquam."
  },
  {
    id: 72,
    customerId: 71,
    roomId: 8,
    checkInDate: "2018-10-25",
    checkOutDate: "2018-09-02",
    roomPrice: "167.00",
    note: "Est sapiente officiis."
  },
  {
    id: 8,
    customerId: 95,
    roomId: 97,
    checkInDate: "2018-09-28",
    checkOutDate: "2018-02-10",
    roomPrice: "68.00",
    note: "Non adipisci quidem ut iste."
  },
  {
    id: 25,
    customerId: 46,
    roomId: 77,
    checkInDate: "2018-06-05",
    checkOutDate: "2018-07-23",
    roomPrice: "138.00",
    note: "Beatae est ipsum omnis ipsam est omnis quis quo."
  },
  {
    id: 70,
    customerId: 67,
    roomId: 71,
    checkInDate: "2018-11-16",
    checkOutDate: "2018-07-13",
    roomPrice: "58.00",
    note: "Cumque explicabo doloremque nam exercitationem."
  },
  {
    id: 52,
    customerId: 94,
    roomId: 7,
    checkInDate: "2018-07-20",
    checkOutDate: "2018-11-24",
    roomPrice: "76.00",
    note: "Dignissimos dolores tempore voluptatem repellat sed."
  },
  {
    id: 89,
    customerId: 68,
    roomId: 71,
    checkInDate: "2018-04-22",
    checkOutDate: "2018-08-07",
    roomPrice: "124.00",
    note:
      "Nostrum doloremque dolores cupiditate cumque ex voluptatibus ipsa qui."
  },
  {
    id: 90,
    customerId: 79,
    roomId: 89,
    checkInDate: "2018-01-26",
    checkOutDate: "2018-02-01",
    roomPrice: "167.00",
    note: "Doloribus aut accusamus."
  },
  {
    id: 38,
    customerId: 60,
    roomId: 70,
    checkInDate: "2018-02-28",
    checkOutDate: "2018-08-15",
    roomPrice: "50.00",
    note: "Pariatur ut quia iste omnis."
  },
  {
    id: 11,
    customerId: 18,
    roomId: 48,
    checkInDate: "2018-08-31",
    checkOutDate: "2018-04-28",
    roomPrice: "54.00",
    note: "Et tempora vel molestias."
  },
  {
    id: 59,
    customerId: 14,
    roomId: 15,
    checkInDate: "2018-12-31",
    checkOutDate: "2018-12-07",
    roomPrice: "105.00",
    note: "Alias odit est et doloribus autem iure sapiente iste nemo."
  },
  {
    id: 51,
    customerId: 86,
    roomId: 21,
    checkInDate: "2018-10-25",
    checkOutDate: "2019-01-06",
    roomPrice: "45.00",
    note: "Et at qui vero odio numquam qui."
  }
];
const invoices = [
  {
    id: 85,
    reservationId: 31,
    total: "40.00",
    surcharges: "93.00",
    invoiceDateTime: "2017-06-24",
    paid: false
  },
  {
    id: 81,
    reservationId: 35,
    total: "113.00",
    surcharges: "43.00",
    invoiceDateTime: "2017-06-07",
    paid: true
  },
  {
    id: 96,
    reservationId: 97,
    total: "100.00",
    surcharges: "85.00",
    invoiceDateTime: "2017-09-19",
    paid: false
  },
  {
    id: 46,
    reservationId: 1,
    total: "146.00",
    surcharges: "90.00",
    invoiceDateTime: "2017-12-16",
    paid: false
  },
  {
    id: 4,
    reservationId: 6,
    total: "189.00",
    surcharges: "92.00",
    invoiceDateTime: "2017-08-30",
    paid: true
  },
  {
    id: 26,
    reservationId: 97,
    total: "169.00",
    surcharges: "70.00",
    invoiceDateTime: "2017-06-24",
    paid: true
  },
  {
    id: 94,
    reservationId: 22,
    total: "70.00",
    surcharges: "56.00",
    invoiceDateTime: "2017-05-01",
    paid: false
  },
  {
    id: 9,
    reservationId: 60,
    total: "176.00",
    surcharges: "19.00",
    invoiceDateTime: "2017-10-27",
    paid: false
  },
  {
    id: 67,
    reservationId: 19,
    total: "70.00",
    surcharges: "76.00",
    invoiceDateTime: "2018-01-17",
    paid: true
  },
  {
    id: 29,
    reservationId: 26,
    total: "60.00",
    surcharges: "81.00",
    invoiceDateTime: "2017-05-28",
    paid: true
  },
  {
    id: 47,
    reservationId: 25,
    total: "184.00",
    surcharges: "89.00",
    invoiceDateTime: "2017-11-01",
    paid: true
  },
  {
    id: 11,
    reservationId: 80,
    total: "87.00",
    surcharges: "35.00",
    invoiceDateTime: "2017-12-15",
    paid: false
  },
  {
    id: 48,
    reservationId: 15,
    total: "27.00",
    surcharges: "5.00",
    invoiceDateTime: "2017-04-04",
    paid: true
  },
  {
    id: 40,
    reservationId: 43,
    total: "62.00",
    surcharges: "16.00",
    invoiceDateTime: "2017-12-26",
    paid: true
  },
  {
    id: 76,
    reservationId: 75,
    total: "111.00",
    surcharges: "21.00",
    invoiceDateTime: "2017-07-05",
    paid: false
  },
  {
    id: 27,
    reservationId: 41,
    total: "78.00",
    surcharges: "94.00",
    invoiceDateTime: "2017-04-09",
    paid: false
  },
  {
    id: 23,
    reservationId: 9,
    total: "168.00",
    surcharges: "96.00",
    invoiceDateTime: "2017-03-29",
    paid: false
  },
  {
    id: 65,
    reservationId: 69,
    total: "98.00",
    surcharges: "98.00",
    invoiceDateTime: "2017-05-09",
    paid: true
  },
  {
    id: 44,
    reservationId: 54,
    total: "113.00",
    surcharges: "34.00",
    invoiceDateTime: "2017-04-09",
    paid: false
  },
  {
    id: 13,
    reservationId: 15,
    total: "117.00",
    surcharges: "29.00",
    invoiceDateTime: "2017-06-30",
    paid: false
  }
];

function customerGen(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(
      `INSERT INTO customers (title, first_name, surname, email) VALUES ("${
        array[i].title
      }" , "${array[i].firstname}" , "${array[i].surname}" , "${
        array[i].email
      }");`
    );
  }
}

customerGen(customers);

function roomGen() {
  for (let i = 0; i < 10; i++) {
    const type = Math.ceil(Math.random() * 4);
    const seaView = Math.round(Math.random());
    console.log(
      `INSERT INTO rooms (room_type_id, sea_view) VALUES (${type}, ${seaView});`
    );
  }
}

function reservationGen(array) {
  for (let i = 0; i < array.length; i++) {
    const customersId = Math.ceil(Math.random() * 21);
    const roomId = Math.ceil(Math.random() * 10);
    console.log(
      `INSERT INTO reservations (customer_id, room_id, chek_in_date, check_out_date, room_price) VALUES (${customersId}, ${roomId}, "${
        array[i].checkInDate
      }", "${array[i].checkOutDate}", ${array[i].roomPrice});`
    );
  }
}

function invoiceGen(array) {
  for (let i = 0; i < array.length; i++) {
    const reservationId = Math.ceil(Math.random() * 20);
    console.log(
      `INSERT INTO invoices (reservation_id, total, surcharges, invoice_date_time, paid) VALUES (${reservationId}, ${
        array[i].total
      }, ${array[i].surcharges}, ${array[i].invoiceDateTime}, ${
        array[i].paid
      });`
    );
  }
}
